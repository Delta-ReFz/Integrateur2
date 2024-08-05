import { ref } from 'vue';

let isLogedIn = ref(false);
let token = ref('');

let idUtilisateur = ref(0);
let nomUtilisateur = ref('');
let prenomUtilisateur = ref('');
let emailUtilisateur = ref('');

const login = () => {
    isLogedIn.value = true;
}

const setToken = (newToken) => {
    token.value = newToken;
}

const setIdUtilisateur = (newIdUtilisateur) => {
    idUtilisateur.value = newIdUtilisateur;
}

const setNomUtilisateur = (newNomUtilisateur) => {
    nomUtilisateur.value = newNomUtilisateur;
}

const setPrenomUtilisateur = (newPrenomUtilisateur) => {
    prenomUtilisateur.value = newPrenomUtilisateur;
}

const setEmailUtilisateur = (newEmailUtilisateur) => {
    emailUtilisateur.value = newEmailUtilisateur;
}

export {
    isLogedIn,
    token,
    login,
    setToken,
    idUtilisateur,
    setIdUtilisateur,
    nomUtilisateur,
    setNomUtilisateur,
    prenomUtilisateur,
    setPrenomUtilisateur,
    emailUtilisateur,
    setEmailUtilisateur
}

