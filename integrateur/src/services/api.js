import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  // Utilisateurs
  createUser(user) {
    return apiClient.post('/utilisateur', user);
  },
  getUser(id) {
    return apiClient.get(`/utilisateur/${id}`);
  },
  updateUser(id, user) {
    return apiClient.put(`/utilisateur/${id}`, user);
  },
  deleteUser(id) {
    return apiClient.delete(`/utilisateur/${id}`);
  },

};
