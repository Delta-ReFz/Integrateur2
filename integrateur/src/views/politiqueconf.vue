<template>
    <div class="page-politique-conf">
      <header class="header">
        <div class="titre1">
          <h1>
            <router-link to="/">EventLit</router-link>
          </h1>
        </div>
      </header>
      <main class="content">
        <h1>POLITIQUE DE CONFIDENTIALITÉ</h1>
        <p>
          Cette page est conçue pour vous informer de la manière dont nous traitons vos informations personnelles en fonction de notre relation avec vous. Par exemple, si vous :
        </p>
        <ol>
          <li>
            <strong>Achetez un billet chez nous</strong>
            <p>
              Nous utilisons les informations que vous fournissez pour remplir nos obligations envers vous et celles de nos partenaires d'événement (artiste, promoteur, organisation sportive, maison de disques ou lieu). Lorsque cela est permis, nous utilisons également ces informations pour vous informer sur d'autres événements qui pourraient vous intéresser.
            </p>
          </li>
          <li>
            <strong>Organisez votre événement chez nous</strong>
            <p>
              Nous utilisons les informations que vous fournissez pour remplir nos obligations envers vous et celles de nos particulers. Lorsque cela est permis, nous utilisons également ces informations pour vous informer sur d'autres événements qui pourraient vous intéresser.
            </p>
          </li>
        </ol>
        <p>Les détails sur vos choix et vos droits sont expliqués ci-dessous.</p>
        <hr />
        <h2>APERÇU</h2>
        <h3>Les informations que nous collectons et leur origine</h3>
        <p>
          Nous recueillons et stockons divers types d'informations lorsque vous créez un compte, achetez des billets, contactez nos services ou utilisez nos sites Web, applications et réseaux sociaux.
        </p>
        <h3>Comment et pourquoi nous utilisons vos informations personnelles</h3>
        <p>
          Nous utilisons vos informations pour plusieurs raisons, y compris pour faciliter votre participation aux événements que vous appréciez, pour communiquer avec vous, à des fins commerciales et pour d'autres motifs exigés par la loi.
        </p>
        <h3>Avec qui nous partageons vos informations et pourquoi</h3>
        <p>
          Nous pouvons partager vos informations avec les partenaires de l'événement (tels que l'artiste, le promoteur ou le lieu) et d'autres tiers impliqués dans la prestation du service.
        </p>
        <h3>Vos choix et vos droits</h3>
        <p>
          Vous pouvez choisir de recevoir des communications commerciales de notre part et avez le droit d'accéder aux informations que nous détenons à votre sujet.
        </p>
        <h3>Protection de vos informations personnelles</h3>
        <p>
          Nous prenons des mesures pour protéger vos informations et les supprimons en toute sécurité lorsqu'elles ne sont plus nécessaires.
        </p>
        <h3>Nous joindre</h3>
        <p>
          Pour toute question ou commentaire sur cette politique ou sur la manière dont nous traitons vos informations, contactez-nous.
        </p>
      </main>
      <footer class="footer">
        <router-link to="/">Retour à l'accueil</router-link>
      </footer>
    </div>
  </template>
  
  <script setup>
  // Vous pouvez ajouter des scripts ici si nécessaire
  </script>
  
  <style scoped>
  /* Styles pour la page Politique de Confidentialité */
  .page-politique-conf body, 
  .page-politique-conf html {
    margin: 0;
    padding: 0;
    font-family: 'Times New Roman', Times, serif;
  }
  
  .page-politique-conf .header {
    width: 100%;
    text-align: center;
    padding: 20px;
    background-color: #f4f4f4;
  }
  
  .page-politique-conf .titre1 h1 {
    margin: 0;
  }
  
  .page-politique-conf .titre1 h1 a {
    text-decoration: none;
    color: darkred;
  }
  
  .page-politique-conf .content {
    padding: 20px;
  }
  
  .page-politique-conf h1 {
    text-align: center;
  }
  </style>
  