<template>
  <div class="page-creer-evenement">
    <Navigation />

    <main class="main-content">
      <div class="creer-evenement" v-if="isLogedIn">
        <h2>Créer un Nouvel Événement</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="nom">Nom de l'événement :</label>
            <input type="text" id="nom" v-model="event.nom" required />
          </div>
          <div class="form-group">
            <label for="date_debut">Date :</label>
            <input type="date" id="date_debut" v-model="event.date_debut" required />
          </div>
          <div class="form-group">
            <label for="date_limite">Date limite d'inscription (optionnel) :</label>
            <input type="date" id="date_limite" v-model="event.date_limite_inscription" />
          </div>
          <div class="form-group">
            <label for="location">Lieu (optionnel) :</label>
            <input type="text" id="location" v-model="event.adresse" />
          </div>
          <div class="form-group">
            <label for="description">Description :</label>
            <textarea id="description" v-model="event.description" required></textarea>
          </div>
          <div class="form-group">
            <label for="image">Image principale (URL) (optionnel) :</label>
            <input type="url" id="image" v-model="event.image_principale"
              placeholder="https://www.urldelimagechoisi.com" />
          </div>
          <div class="form-group">
            <label for="participants">Nombre de participants maximum (optionnel):</label>
            <input type="number" id="participants" v-model="event.nombre_participants_maximum" />
          </div>

          <button type="submit" class="cta-button">Créer</button>
        </form>
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
import { isLogedIn, token, idUtilisateur } from '../services/loginManager';
import LoginWarning from '../components/LoginWarning.vue';
import { HOST } from '../services/sessionData';
import { useRouter } from 'vue-router';

const router = useRouter();

const event = ref({
  nom: '',
  date_debut: '',
  description: '',
  image_principale: '',
  nombre_participants_maximum: '',
  date_limite_inscription: '',
  adresse: ''
});

async function submitForm() {
  // Trim les valeurs vides de event
  for (const key in event.value) {
    if (event.value[key] === '') {
      delete event.value[key];
    }
  }

  // Ajouter l'ID de l'utilisateur connecté
  event.value.organisateur = idUtilisateur;

  // Envoyer les données à l'API

  try {
    let response = await fetch(`${HOST}api/v1/evenements`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Eventlit',
        'Authorization': 'Bearer ' + token.value
      },
      body: JSON.stringify(event.value)
    });

    if (response.ok) {
      // let data = await response.json(); // Nous ne nous servons pas des données, donc pas besoin de les récupérer

      alert('Événement créé avec succès');

      // Rediriger vers la page gérer vos Événements
      router.push({ name: 'GererEvenement' });

    } else {
      alert('Erreur lors de la création de l événement');
    }
  } catch (error) {
    alert('Erreur lors de la création de l événement');
    console.error('Erreur lors de la création de l événement', error);
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
  padding-right: 50px;
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

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>