<template>
    <div class="page-gerer-evenements">
      <Navigation />
  
      <main class="main-content">
        <div class="gerer-evenements" v-if="isLogedIn">
          <h2>Gérer Vos Événements</h2>
          <div v-if="events.length" class="events-list">
            <div v-for="event in events" :key="event.id" class="event-item">
              <h3>{{ event.nom }}</h3>
              <p><strong>Date:</strong> {{ event.date_debut }}</p>
              <p v-if="event.adresse !== null"><strong>Lieu:</strong> {{ event.adresse }}</p>
              <p><strong>Nombre de participants:</strong> {{ event.nombre_inscription }}</p>
              <p><strong>Description:</strong> {{ event.description }}</p>
              <button @click="editEvent(event)" class="cta-button">Modifier</button>
              <button @click="deleteEvent(event.id)" class="cta-button delete">Supprimer</button>
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
  import LoginWarning from '../components/LoginWarning.vue';
  import { isLogedIn, idUtilisateur, token } from '../services/loginManager';
  import { evenementAModifier, setEvenementAModifier } from '../services/modifierEvenementManager';
  import { HOST } from '../services/sessionData';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const events = ref([]);

  // Loader les événements de l'utilisateur connecté
  if(isLogedIn.value){
    getEvents();
  }
  

  function editEvent(event) {

    // Stocker l'événement à modifier dans le ModifierEvenementManager.js
    setEvenementAModifier(event);

    // Rediriger l'utilisateur vers la page de modification de l'événement
    router.push({ name: 'ModifierEvenement' });
  }
  
  async function deleteEvent(eventId) {
    // Confirmer que l'utilisateur veut supprimer l'événement
    if (!confirm('Voulez-vous vraiment supprimer cet événement?')) {
      return;
    }
    // Supprimer l'événement de la base de données
    try {
      let response = await fetch(`${HOST}api/v1/evenements/${eventId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Eventlit',
          'Authorization': 'Bearer ' + token.value
        }
      });

      if (response.ok) {
        alert('Événement supprimé avec succès');
      } else {
        alert('Erreur lors de la suppression de l\'événement');
        console.error('Erreur lors de la récupération des événements:', response.statusText);
      }
    } catch (error) {
      alert('Erreur lors de la suppression de l\'événement');
      console.error('Erreur lors de la récupération des événements:', error);
    }

    // Recharger les événements
    getEvents();
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
  .page-gerer-evenements {
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
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  </style>
  