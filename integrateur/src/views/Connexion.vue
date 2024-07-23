<template>
  <div class="page-auth">
    <Navigation />

    <main class="main-content" v-if="loginManager.isLogedIn.value === false">
      <div class="auth-toggle">
        <button @click="showLogin = true" :class="{ active: showLogin }">Connexion</button>
        <button @click="showLogin = false" :class="{ active: !showLogin }">Inscription</button>
      </div>

      <div class="login-section" v-if="showLogin">
        <h2>Connexion</h2>
        <form @submit.prevent="submitLogin">
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required />
          </div>
          <div class="form-group">
            <label for="password">Mot de passe:</label>
            <input type="password" id="password" v-model="password" required />
          </div>
          <button type="submit" class="login-button">Se connecter</button>
        </form>
      </div>

      <div class="signup-section" v-else>
        <h2>Inscription</h2>
        <form @submit.prevent="submitSignup">
          <div class="form-group">
            <label for="signup-email">Email:</label>
            <input type="email" id="signup-email" v-model="signupEmail" required />
          </div>
          <div class="form-group">
            <label for="prenom">Prenom:</label>
            <input type="text" id="prenom" v-model="prenom" required />
          </div>
          <div class="form-group">
            <label for="nom">Nom:</label>
            <input type="text" id="nom" v-model="nom" required />
          </div>
          <div class="form-group">
            <label for="signup-password">Mot de passe:</label>
            <input type="password" id="signup-password" v-model="signupPassword" required />
          </div>
          <div class="form-group">
            <label for="confirm-password">Confirmer Mot de passe:</label>
            <input type="password" id="confirm-password" v-model="confirmPassword" required />
          </div>
          <button type="submit" class="signup-button">S'inscrire</button>
        </form>
      </div>
    </main>

    <main class="main-content" v-else>
      <h2>Vous êtes déjà connecté en tant que :</h2>
      <p>{{ loginManager.prenomUtilisateur }} {{ loginManager.nomUtilisateur }}</p>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Navigation from '../components/Navigation.vue';
import Footer from '../components/Footer.vue';
import { HOST } from '../services/sessionData';
import * as loginManager from '../services/loginManager';
import { useRouter } from 'vue-router';

const showLogin = ref(true); // Toggle between login and signup
const prenom = ref('');
const nom = ref('');
const email = ref('');
const password = ref('');
const signupEmail = ref('');
const signupPassword = ref('');
const confirmPassword = ref('');

const router = useRouter();

async function submitLogin() {
  try {
    let response = await fetch(`${HOST}api/v1/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Eventlit'
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    });

    if (response.ok) {
      let data = await response.json();
      saveResponseDate(data);
    } else {
      alert('Email ou mot de passe incorrect.');
    }
  } catch (error) {
    alert('Erreur lors de la connexion, veuillez réessayer.');
    console.error('Login error:', error);
  }
}

// TODO
async function submitSignup() {
  if (signupPassword.value !== confirmPassword.value) {
    alert("Les mots de passe ne correspondent pas.");
    return;
  }

  // Envoyer les données à l'API

  try {
    let response = await fetch(`${HOST}api/v1/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Eventlit'
      },
      body: JSON.stringify({
        nom: nom.value,
        prenom: prenom.value,
        email: signupEmail.value,
        password: signupPassword.value
      })
    });

    if (response.ok) {
      let data = await response.json();
      saveResponseDate(data);
    } else {
      alert('Données invalides, veuillez réessayer.');
    }
  } catch (error) {
    alert('Erreur lors de l\'inscription, veuillez réessayer.');
    console.error('Login error:', error);
  }
}

function saveResponseDate(data) {
  // Enregistrer le token
  loginManager.setToken(data.token);

  // Enregistrer les informations de l'utilisateur
  loginManager.setIdUtilisateur(data.utilisateur.id);
  loginManager.setNomUtilisateur(data.utilisateur.nom);
  loginManager.setPrenomUtilisateur(data.utilisateur.prenom);
  loginManager.setEmailUtilisateur(data.utilisateur.email);

  // Set isLogedIn a true
  loginManager.login();

  // Rediriger vers la page d'accueil
  router.push({ name: 'Accueil' });
}

</script>

<style scoped>
.page-auth {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.auth-toggle {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 2rem;
}

.auth-toggle button {
  padding: 10px 20px;
  font-size: 1.2rem;
  border: none;
  background-color: #fff;
  color: darkred;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.auth-toggle button.active {
  background-color: darkred;
  color: #fff;
}

.auth-toggle button:hover {
  background-color: #e73c7e;
  color: #fff;
}

.login-section,
.signup-section {
  width: 100%;
  max-width: 400px;
  padding: 30px;
  padding-right: 50px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 2rem;
}

.login-section h2,
.signup-section h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

.form-group label {
  display: block;
  font-size: 1rem;
  color: #666;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login-button,
.signup-button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.2rem;
  text-decoration: none;
  color: #fff;
  background-color: darkred;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.login-button:hover,
.signup-button:hover {
  background-color: #e73c7e;
}
</style>
