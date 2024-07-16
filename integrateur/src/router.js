import { createRouter, createWebHistory } from 'vue-router';
import Accueil from './views/Accueil.vue';  
import Connexion from './views/Connexion.vue'; 
import CreerEvenement from './views/CreerEvenement.vue';


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
}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
