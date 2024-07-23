const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Données en mémoire pour les exemples
let events = [];

// Endpoint pour créer un événement
app.post('/api/evenement', (req, res) => {
  const event = req.body;
  event.id = events.length + 1; // Simple id auto-incrémenté
  events.push(event);
  res.status(201).json(event);
});

// Exemple d'autres endpoints pour les événements (facultatif)
app.get('/api/evenement', (req, res) => {
  res.json(events);
});

app.get('/api/evenement/:id', (req, res) => {
  const event = events.find(e => e.id === parseInt(req.params.id));
  if (event) {
    res.json(event);
  } else {
    res.status(404).send('Event not found');
  }
});

app.put('/api/evenement/:id', (req, res) => {
  const index = events.findIndex(e => e.id === parseInt(req.params.id));
  if (index !== -1) {
    events[index] = req.body;
    events[index].id = parseInt(req.params.id); // Assure que l'ID reste le même
    res.json(events[index]);
  } else {
    res.status(404).send('Event not found');
  }
});

app.delete('/api/evenement/:id', (req, res) => {
  const index = events.findIndex(e => e.id === parseInt(req.params.id));
  if (index !== -1) {
    const deletedEvent = events.splice(index, 1);
    res.json(deletedEvent);
  } else {
    res.status(404).send('Event not found');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
