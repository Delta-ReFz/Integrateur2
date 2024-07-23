<template>
    <footer class="footer">
        <div class="footer-content">
          <div class="footer-link">
            <router-link to="/politique-confidentialite">Politique de Confidentialité</router-link>
          </div>
        </div>
      </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
    color: #fff;
    padding: 20px 0;
    text-align: center;
    border-top: 0.05rem solid darkred;
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
    cursor: default;
  }

    .footer-content {
        display: flex;
        justify-content: center;
    }  
</style>