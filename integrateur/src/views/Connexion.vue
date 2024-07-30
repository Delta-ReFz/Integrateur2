<template>
  <div class="page-auth">
    <header class="header">
      <div class="logo">
        <h1><router-link to="/">EventLit</router-link></h1>
      </div>
      <nav class="navigation">
        <ul>
          <li><router-link to="/creer-evenement" class="nav-link">Créer Événement</router-link></li>
          <li><router-link to="/gerer-evenements" class="nav-link">Gérer Événements</router-link></li>
          <li><router-link to="/analyse-donnees" class="nav-link">Analyse Données</router-link></li>
          <li><router-link to="/connexion" class="nav-link active">Connexion</router-link></li>
        </ul>
      </nav>
      <div class="language-selector">
        <label for="language">Langue: </label>
        <select id="language" @change="changeLanguage">
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="es">Español</option>
        </select>
      </div>
    </header>

    <main class="main-content">
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

    <footer class="footer">
      <div class="footer-content">
        <div class="footer-link">
          <router-link to="/politique-confidentialite">Politique de Confidentialité</router-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import eventBus from '../scripts/eventBus.js';


const showLogin = ref(true); 
const email = ref('');
const password = ref('');
const signupEmail = ref('');
const signupPassword = ref('');
const confirmPassword = ref('');

function submitLogin() {
  console.log('Email:', email.value);
  console.log('Mot de passe:', password.value);
}

function submitSignup() {
  if (signupPassword.value !== confirmPassword.value) {
    alert("Les mots de passe ne correspondent pas.");
    return;
  }
  console.log('Email:', signupEmail.value);
  console.log('Mot de passe:', signupPassword.value);
}

function changeLanguage() {
  const language = document.getElementById('language').value;
  if (language === 'en') {
    window.location.href = 'index.html';
  } else if (language === 'fr') {
    window.location.href = 'index_fr.html';
  } else if (language === 'es') {
    window.location.href = 'index_es.html';
  }
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

.header {
  background-color: #fff;
  padding: 20px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-decoration: none;
}

.logo h1 a {
  margin: 0;
  font-size: 2.5rem;
  color: darkred;
  text-decoration: none;
}

.navigation {
  margin-top: 10px;
}

.navigation ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: darkred;
}

.nav-link.active {
  font-weight: bold;
  color: darkred;
}

.language-selector {
  margin-top: 10px;
}

.language-selector label {
  margin-right: 10px;
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

.login-section, .signup-section {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.login-section h2, .signup-section h2 {
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

.login-button, .signup-button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.2rem;
  text-decoration: none;
  color: #fff;
  background-color: darkred;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.login-button:hover, .signup-button:hover {
  background-color: #e73c7e;
}

.footer {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
}

.footer-link {
  text-decoration: none;
  color: #fff;
  padding: 10px 20px;
  border: 2px solid #fff;
  border-radius: 5px;
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
}

.footer-link:hover {
  background-color: #e73c7e;
  border-color: #e73c7e;
  color: #fff;
}
</style>
