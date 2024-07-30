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
        <h1>Politique de Confidentialité</h1>
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
              Nous utilisons les informations que vous fournissez pour remplir nos obligations envers vous et celles de nos partenaires. Lorsque cela est permis, nous utilisons également ces informations pour vous informer sur d'autres événements qui pourraient vous intéresser.
            </p>
          </li>
        </ol>
        <p>Les détails sur vos choix et vos droits sont expliqués ci-dessous.</p>
        <hr />
  
        <h2>Aperçu</h2>
  
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
  
  
  
  <style scoped>
  
  
  body,
  html {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif; 
  }
  
  .page-politique-conf {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .header {
    width: 100%;
    text-align: center;
    padding: 20px;
    background-color: darkred;
    color: #fff; 
  }
  
  .titre1 h1 {
    margin: 0;
    font-size: 2rem; 
  }
  
  .titre1 h1 a {
    text-decoration: none;
    color: white; 
    transition: color 0.3s ease; 
  }
  
  .titre1 h1 a:hover {
    color:deeppink;
  }
  
  .content {
    flex-grow: 1; 
    padding: 40px;
    background-color: #f9f9f9;
    color: #333;
    max-width: 800px;
    margin: 0 auto; 
  }
  
  h1 {
    text-align: center;
    color: #333;
    font-size: 2.5rem;
    margin-bottom: 20px; 
  }
  
  h2 {
    color: #444;
    margin-top: 30px; 
    font-size: 1.8rem;
  }
  
  h3 {
    color: #555;
    font-size: 1.5rem;
    margin-top: 25px;
  }
  
  p {
    line-height: 1.6; 
    margin: 10px 0;
    color: #666;
  }
  
  ol {
    padding-left: 20px; 
  }
  
  ol li {
    margin-bottom: 10px;
  }
  
  strong {
    color: #333;
  }
  
  hr {
    border: none;
    border-top: 2px solid #ddd;
    margin: 30px 0; 
  }
  
  .footer {
    background-color: darkred;
    color: #fff;
    text-align: center;
    padding: 15px;
    position: sticky;
    bottom: 0;
    width: 100%;
  }
  
  .footer a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
  
  .footer a:hover {
    color: deeppink;
  }
  </style>
  