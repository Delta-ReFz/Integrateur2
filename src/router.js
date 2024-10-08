import { createRouter, createWebHistory } from 'vue-router';
import Accueil from './views/Accueil.vue';
import Connexion from './views/Connexion.vue';
import CreerEvenement from './views/CreerEvenement.vue';
import ModifierEvenement from './views/ModifierEvenement.vue';
import GererEvenement from './views/GererEvenement.vue';
import AnalyseDonnees from './views/AnalyseDonnees.vue';
import PolitiqueConfidentialite from './views/PolitiqueConfidentialite.vue';
import AjouterEtiquettes from './views/AjouterEtiquettes.vue';
import MessagesFeedback from './views/MessagesFeedback.vue';


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
    path: '/modifier-evenement',
    name: 'ModifierEvenement',
    component: ModifierEvenement
  },

  {
    path: '/ajouter-etiquettes',
    name: 'AjouterEtiquettes',
    component: AjouterEtiquettes
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

  {
    path: '/messages-feedback',
    name: 'MessagesFeedback',
    component: MessagesFeedback
  },

  {
    path: '/politique-confidentialite',
    name: 'PolitiqueConfidentialite',
    component: PolitiqueConfidentialite
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
