<template>
    <div class="page-analyse-donnees">
      <Navigation />

      <main class="main-content">
        <div class="analyse-donnees" v-if="isLogedIn">
          <h2>Analyse des Données</h2>
          <div v-if="events.length" class="events-analysis">
            <div v-for="event in events" :key="event.id" class="event-analysis-item">
              <h3>{{ event.nom }}</h3>
              <button @click="toggleEventDetails(event.id)" class="cta-button">
                {{ event.showDetails ? 'Masquer Détails' : 'Voir Détails' }}
              </button>
              <div v-if="event.showDetails" class="event-details">
                <p><strong>Date:</strong> {{ event.date_debut }}</p>
                <p v-if="event.adresse !== null"><strong>Lieu:</strong> {{ event.adresse }}</p>
                <p><strong>Nombre d'affichages:</strong> {{ event.nombre_affichage }}</p>
                <p><strong>Nombre d'inscriptions :</strong> {{ event.nombre_inscription }}</p>
                <p v-if="event.nombre_affichage > 0"><strong>Taux d'inscriptions :</strong> {{ (event.nombre_inscription / event.nombre_affichage * 100).toFixed(2) }}%</p>
                <p v-if="event.nombre_participants_maximum !== null"><strong>Nombre d'inscriptions maximum :</strong> {{ event.nombre_participants_maximum }}</p>
                <p v-if="event.nombre_participants_maximum !== null"><strong>Pourcentage de places comblés:</strong> {{ (event.nombre_inscription / event.nombre_participants_maximum * 100).toFixed(2) }}%</p>
              </div>
            </div>
          </div>
          <div v-else>
            <p>Aucun événement trouvé. <router-link to="/creer-evenement" class="cta-button">Créez un événement</router-link></p>
          </div>
        </div>

          <div v-else>
            <LoginWarning />
          </div>

      </main>
  
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Navigation from '../components/Navigation.vue';
  import Footer from '../components/Footer.vue';
  import { isLogedIn, idUtilisateur, token } from '../services/loginManager';
  import LoginWarning from '../components/LoginWarning.vue';
  import { HOST } from '../services/sessionData';

  if (isLogedIn.value) {
    getEvents();
  }
  
  const events = ref([]);
  

  function toggleEventDetails(eventId) {
    const event = events.value.find(e => e.id === eventId);
    if (event) {
      event.showDetails = !event.showDetails;
    }
  }

  async function getEvents() {
    // Obtenir les événements de l'utilisateur connecté sur l'API
    try {
      let response = await fetch(`${HOST}api/v1/evenements/organisateur/${idUtilisateur.value}`, {
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Eventlit',
          'Authorization': 'Bearer ' + token.value
        }
      });

      if (response.ok) {
        let data = await response.json();
        events.value = data;
      } else {
        alert('Erreur lors de la récupération des événements');
        console.error('Erreur lors de la récupération des événements:', response.statusText);
      }
    } catch (error) {
      alert('Erreur lors de la récupération des événements');
      console.error('Erreur lors de la récupération des événements:', error);
    }
  }
  </script>
  
  <style scoped>
  .page-analyse-donnees {
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
    padding: 20px;
  }
  
  .analyse-donnees {
    width: 100%;
    max-width: 800px;
    padding: 30px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    animation: fadeIn 1s ease-in-out;
  }
  
  .analyse-donnees h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 20px;
  }
  
  .events-analysis {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .event-analysis-item {
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    border-radius: 8px;
    text-align: left;
  }
  
  .event-analysis-item h3 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 10px;
  }
  
  .event-details {
    margin-top: 20px;
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
  
  .cta-button:hover {
    background-color: #c82333;
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
  