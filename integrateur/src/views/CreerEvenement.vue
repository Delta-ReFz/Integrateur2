<template>
  <div class="page-creer-evenement">
    <header class="header">
      <div class="logo">
        <h1><router-link to="/">EventLit</router-link></h1>
      </div>
      <nav class="navigation">
        <ul>
          <li><router-link to="/creer-evenement" class="nav-link active">Créer Événement</router-link></li>
          <li><router-link to="/gerer-evenements" class="nav-link">Gérer Événements</router-link></li>
          <li><router-link to="/analyse-donnees" class="nav-link">Analyse Données</router-link></li>
          <li><router-link to="/connexion" class="nav-link">Connexion</router-link></li>
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
      <div class="creer-evenement">
        <h2>Créer un Nouvel Événement</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Nom de l'événement :</label>
            <input type="text" id="name" v-model="event.name" required />
          </div>
          <div class="form-group">
            <label for="date">Date :</label>
            <input type="date" id="date" v-model="event.date" required />
          </div>
          <div class="form-group">
            <label for="date_limite">Date limite d'inscription :</label>
            <input type="date" id="date_limite" v-model="event.date_limite_inscription" required />
          </div>
          <div class="form-group">
            <label for="location">Lieu :</label>
            <input type="text" id="location" v-model="event.location" required />
          </div>
          <div class="form-group">
            <label for="description">Description :</label>
            <textarea id="description" v-model="event.description" required></textarea>
          </div>
          <div class="form-group">
            <label for="image">Image principale (URL) :</label>
            <input type="url" id="image" v-model="event.image_principale" placeholder="https://www.urldelimagechoisi.com" required />
          </div>
          <div class="form-group">
            <label for="participants">Nombre de participants maximum :</label>
            <input type="number" id="participants" v-model="event.nombre_participants_maximum" required />
          </div>
          <button type="submit" class="cta-button">Créer</button>
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
import api from '../services/api';

const event = ref({
  name: '',
  date: '',
  location: '',
  description: '',
  image_principale: '',
  nombre_participants_maximum: '',
  date_limite_inscription: '',
});

async function submitForm() {
  try {
    const response = await api.createEvent(event.value);
    console.log('Événement créé:', response.data);
    // Rediriger l'utilisateur ou afficher un message de succès
  } catch (error) {
    console.error('Erreur lors de la création de l\'événement:', error);
  }
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
.page-creer-evenement {
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
  text-decoration: none;
  color: darkred;
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
  padding: 20px;
}

.creer-evenement {
  width: 100%;
  max-width: 500px;
  padding: 30px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  animation: fadeIn 1s ease-in-out;
}

.creer-evenement h2 {
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

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: darkred;
  box-shadow: 0 0 5px rgba(220, 20, 60, 0.5);
}

.cta-button {
  display: inline-block;
  padding: 15px 40px;
  font-size: 1.2rem;
  text-decoration: none;
  color: #fff;
  background-color: darkred;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.cta-button:hover {
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

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
