<template>
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
  </header>
</template>

<script setup>
</script>

<style scoped>
.header {
  background-color: #fff;
  padding: 20px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
}


.logo h1 a {
  margin: 0;
  font-size: 2.5rem;
  color: darkred;
  text-decoration: none;
}

.navigation {
  grid-column: span 2;
}

.navigation ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  gap: 20px;
  padding: 0;
  align-self: center;
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
</style>