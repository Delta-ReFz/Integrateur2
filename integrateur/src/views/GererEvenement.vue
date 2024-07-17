<template>
    <div class="page-gerer-evenements">
      <header class="header">
        <div class="logo">
          <h1><router-link to="/">EventLit</router-link></h1>
        </div>
        <nav class="navigation">
          <ul>
            <li><router-link to="/creer-evenement" class="nav-link">Créer Événement</router-link></li>
            <li><router-link to="/gerer-evenements" class="nav-link active">Gérer Événements</router-link></li>
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
        <div class="gerer-evenements">
          <h2>Gérer Vos Événements</h2>
          <div v-if="events.length" class="events-list">
            <div v-for="event in events" :key="event.id" class="event-item">
              <h3>{{ event.name }}</h3>
              <p><strong>Date:</strong> {{ event.date }}</p>
              <p><strong>Lieu:</strong> {{ event.location }}</p>
              <p><strong>Nombre de participants:</strong> {{ event.participants.length }}</p>
              <p><strong>Description:</strong> {{ event.description }}</p>
              <button @click="editEvent(event)" class="cta-button">Modifier</button>
              <button @click="deleteEvent(event.id)" class="cta-button delete">Supprimer</button>
            </div>
          </div>
          <div v-else>
            <p>Aucun événement trouvé. <router-link to="/creer-evenement" class="cta-button">Créez un événement</router-link></p>
          </div>
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
  
  const events = ref([
    {
      id: 1,
      name: 'Conférence Tech',
      date: '2024-09-15',
      location: 'Paris, France',
      description: 'Une conférence sur les nouvelles technologies.',
      participants: ['Alice', 'Bob', 'Charlie']
    },
    {
      id: 2,
      name: 'Atelier de Cuisine',
      date: '2024-10-01',
      location: 'Lyon, France',
      description: 'Un atelier pour apprendre les bases de la cuisine française.',
      participants: ['David', 'Eva', 'Frank']
    }
  ]);
  
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
  
  function editEvent(event) {
    console.log('Modifier l\'événement:', event);
    // Add your edit logic here
  }
  
  function deleteEvent(eventId) {
    events.value = events.value.filter(event => event.id !== eventId);
  }
  </script>
  
  <style scoped>
  .page-gerer-evenements {
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
    padding: 20px;
  }
  
  .gerer-evenements {
    width: 100%;
    max-width: 800px;
    padding: 30px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    animation: fadeIn 1s ease-in-out;
  }
  
  .gerer-evenements h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 20px;
  }
  
  .events-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .event-item {
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    border-radius: 8px;
    text-align: left;
  }
  
  .event-item h3 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 10px;
  }
  
  .cta-button {
    display: inline-block;
    padding: 10px 20px;
    font-size: 1rem;
    text-decoration: none;
    color: #fff;
    background-color: darkred;
    border-radius: 8px;
    transition: background-color 0.3s ease;
    cursor: pointer;
    margin-right: 10px;
  }
  
  .cta-button.delete {
    background-color: #e73c7e;
  }
  
  .cta-button:hover {
    background-color: #c82333;
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
  