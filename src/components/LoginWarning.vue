<template>
    <h3>Vous devez être connecté pour pouvoir accéder à cette fonctionnalité</h3>
    <router-link to="/connexion" class="cta-button">Je me connecte</router-link>
</template>

<script setup>
</script>

<style scoped>
* {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    flex-direction: column;
    background-color: #f9f9f9;
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

h3 {
    font-size: 1.25rem;
    color: #333;
    margin-bottom: 20px;
}
</style>