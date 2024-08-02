<template>
<<<<<<< Updated upstream
    <div class="page-analyse-donnees">
      <header class="header">
        <div class="logo">
          <h1><router-link to="/">EventLit</router-link></h1>
        </div>
        <nav class="navigation">
          <ul>
            <li><router-link to="/creer-evenement" class="nav-link">Créer Événement</router-link></li>
            <li><router-link to="/gerer-evenements" class="nav-link">Gérer Événements</router-link></li>
            <li><router-link to="/analyse-donnees" class="nav-link active">Analyse Données</router-link></li>
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
        <div class="analyse-donnees">
          <h2>Analyse des Données</h2>
          <div v-if="events.length" class="events-analysis">
            <div v-for="event in events" :key="event.id" class="event-analysis-item">
              <h3>{{ event.name }}</h3>
              <button @click="toggleEventDetails(event.id)" class="cta-button">
                {{ event.showDetails ? 'Masquer Détails' : 'Voir Détails' }}
              </button>
              <div v-if="event.showDetails" class="event-details">
                <p><strong>Date:</strong> {{ event.date }}</p>
                <p><strong>Lieu:</strong> {{ event.location }}</p>
                <p><strong>Nombre de participants:</strong> {{ event.participants.length }}</p>
                <p><strong>Description:</strong> {{ event.description }}</p>
              </div>
=======
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
            <button @click="voirFeedback(event)" class="cta-button">Voir le feedback</button>
            <div v-if="event.showDetails" class="event-details">
              <p><strong>Date:</strong> {{ event.date_debut }}</p>
              <p v-if="event.adresse !== null"><strong>Lieu:</strong> {{ event.adresse }}</p>
              <p><strong>Nombre d'affichages:</strong> {{ event.nombre_affichage }}</p>
              <p><strong>Nombre d'inscriptions :</strong> {{ event.nombre_inscription }}</p>
              <p v-if="event.nombre_affichage > 0"><strong>Taux d'inscriptions :</strong> {{ (event.nombre_inscription /
                event.nombre_affichage * 100).toFixed(2) }}%</p>
              <p v-if="event.nombre_participants_maximum !== null"><strong>Nombre d'inscriptions maximum :</strong> {{
                event.nombre_participants_maximum }}</p>
              <p v-if="event.nombre_participants_maximum !== null"><strong>Pourcentage de places comblés:</strong> {{
                (event.nombre_inscription / event.nombre_participants_maximum * 100).toFixed(2) }}%</p>

                <div class="participants-list">
                    <h4>Participants</h4>
                    <ul v-if="emails.value[event.id] && emails.value[event.id].length">
                        <li v-for="email in emails.value[event.id]" :key="email">
                    {{ email }}
                    <button @click="copyEmail(email)" class="cta-button">Copier</button>
                    </li>
                    </ul>
                    <p v-else>Aucun participant enregistré.</p>
                </div>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
      participants: ['Mehdi', 'Etienne', 'Radia', 'JM', 'Olivier'],
      showDetails: false
    },
    {
      id: 2,
      name: 'Atelier de Cuisine',
      date: '2024-10-01',
      location: 'Lyon, France',
      description: 'Un atelier pour apprendre les bases de la cuisine française.',
      participants: ['Mehdi', 'Etienne', 'Radia', 'JM', 'Olivier'],
      showDetails: false
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
=======
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
import { useRouter } from 'vue-router';
import { setEvenementAModifier } from '../services/modifierEvenementManager';

if (isLogedIn.value) {
  getEvents();
}

const events = ref([]);

const emails = ref({});

const router = useRouter();

function toggleEventDetails(eventId) {
  const event = events.value.find(e => e.id === eventId);
  if (event) {
    event.showDetails = !event.showDetails;

    if (event.showDetails && !emails.value[eventId]) {
        getEmails(eventId);
  }
  }

}

function voirFeedback(event) {
  // Stocker l'événement à modifier dans le ModifierEvenementManager.js
  setEvenementAModifier(event);

  // Envoyer vers la page de feedback
  router.push({ name: 'MessagesFeedback' });
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
>>>>>>> Stashed changes
    }
  }
<<<<<<< Updated upstream
  
  function toggleEventDetails(eventId) {
    const event = events.value.find(e => e.id === eventId);
    if (event) {
      event.showDetails = !event.showDetails;
    }
=======
}

  async function getEmails(eventId) {

    try{
        let response = await fetch(`${HOST}api/v1/inscriptions/courriels/${eventId}`, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Eventlit',
        'Authorization': 'Bearer ' + token.value
    }
  });
  
  if (response.ok) {
    let data = await response.json();

    emails.value={...emails.value,[eventId]: data };
  } else {
      alert('Erreur lors de la récupération des courriels des participants');
      console.error('Erreur lors de la récupération des courriels des participants:', response.statusText);
    }
  } catch (error) {
    alert('Erreur lors de la récupération des courriels des participants');
    console.error('Erreur lors de la récupération des courriels des participants:', error);
}
  }

  function copyEmail(email) {
    navigator.clipboard.writeText(email)
    .then(() => {
        alert(`L'email ${email} a été copié dans le presse-papiers.`);
    })
    .catch(err => {
        console.error('Erreur lors de la copie: ',err);
    });
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

.participants-list {
  margin-top: 20px;
}

.participants-list ul {
  list-style-type: none;
  padding: 0;
}

.participants-list li {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
>>>>>>> Stashed changes
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
  