import { createRouter, createWebHistory } from 'vue-router';
import Accueil from './views/Accueil.vue';  
import Connexion from './views/Connexion.vue'; 
import CreerEvenement from './views/CreerEvenement.vue';
import GererEvenement from './views/GererEvenement.vue';
import AnalyseDonnees from './views/AnalyseDonnees.vue';
//import PolitiqueConfidentialite from './views/PolitiqueConfidentialite.vue'; 

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  
  {
    path: '/connexion',
    name: 'Connexion',
    component: Connexion
  },

  {
    path: '/creer-evenement',
    name: 'CreerEvenement',
    component: CreerEvenement
  },

  {
    path: '/gerer-evenements',
    name: 'GererEvenement',
    component: GererEvenement
  },

  {
    path: '/analyse-donnees',
    name: 'AnalyseDonnees',
    component: AnalyseDonnees
  },

  /*{
    path: '/politique-confidentialite',
    name: 'PolitiqueConfidentialite',
    component: PolitiqueConfidentialite
  }*/
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
