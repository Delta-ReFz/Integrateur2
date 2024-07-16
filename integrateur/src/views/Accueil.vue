<template>
    <div class="page-accueil">
      <header class="header">
        <div class="logo">
          <h1><router-link to="/">EventLit</router-link></h1>
        </div>
        <nav class="navigation">
          <ul>
            <li><router-link to="/creer-evenement" class="nav-link">Créer Événement</router-link></li>
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
        <div class="welcome-section">
          <h2>Bienvenue sur EventLit</h2>
          <p>Créez, gérez et analysez vos événements facilement avec notre plateforme intuitive.</p>
        </div>
  
        <div class="cta-buttons">
          <router-link to="/creer-evenement" class="cta-button">Je crée un événement</router-link>
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
  .page-accueil {
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
  