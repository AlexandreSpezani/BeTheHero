const express = require('express');
const ongController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//ONGS
routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

//INCIDENTS
routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

//Profile
routes.get('/profile', ProfileController.index);

// Login
routes.post('/session', SessionController.create)

module.exports = routes;