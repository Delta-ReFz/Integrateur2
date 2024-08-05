<template>
  <div class="page-accueil">
    <Navigation />

    <main class="main-content">
      <div class="welcome-section">
        <h2>Bienvenue sur EventLit</h2>
        <p>Créez, gérez et analysez vos événements facilement avec notre plateforme intuitive.</p>
      </div>

      <div class="cta-buttons">
        <div id="accueilCtaLoggedIn" v-if="isLogedIn">
          <router-link to="/creer-evenement" class="cta-button">Je crée un événement</router-link>
        </div>
        <div id="accueilCtaNotLoggedIn" v-else>
          <router-link to="/connexion" class="cta-button">Je me connecte</router-link>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>

import { ref } from 'vue';
import { isLogedIn } from '../services/loginManager';
import Navigation from '../components/Navigation.vue';
import Footer from '../components/Footer.vue';

</script>

<style scoped>
.page-accueil {
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

.welcome-section {
  margin-bottom: 2rem;
}

.welcome-section h2 {
  font-size: 3rem;
  color: #333;
  margin-bottom: 10px;
}

.welcome-section p {
  font-size: 1.5rem;
  color: #666;
}

.cta-buttons {
  margin-top: 2rem;
}

.cta-button {
  display: inline-block;
  padding: 15px 40px;
  font-size: 1.5rem;
  text-decoration: none;
  color: #fff;
  background-color: darkred;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #e73c7e;
}
</style>