// src/services/api.js
const API_BASE_URL = 'http://localhost:3000/api';

export const createUser = async (user) => {
  const response = await fetch(`${API_BASE_URL}/utilisateur`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error('Erreur lors de la création de l\'utilisateur');
  }
  return response.json();
};

export const getUser = async (id) => {
  const response = await fetch(`${API_BASE_URL}/utilisateur/${id}`);
  if (!response.ok) {
    throw new Error('Erreur lors de la récupération de l\'utilisateur');
  }
  return response.json();
};

export const createEvent = async (event) => {
  const response = await fetch(`${API_BASE_URL}/evenement`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event),
  });
  if (!response.ok) {
    throw new Error('Erreur lors de la création de l\'événement');
  }
  return response.json();
};

// Ajoutez d'autres fonctions API selon vos besoins...
