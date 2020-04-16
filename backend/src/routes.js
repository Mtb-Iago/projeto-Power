const express = require('express'); //importando o express para o routes

const OngController = require('./controllers/UsersController'); //importa o arquivo
const IncidentController = require('./controllers/IncidentController'); //importa o arquivo
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router(); //desacoplando o modo de rotas em uma nova variavel

routes.post('/session', SessionController.create);

routes.get('/users', OngController.index);
routes.post('/users', OngController.create); //manda para controller.

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);

routes.delete('/users/id', OngController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes; //exporta tudo que esta em  variavel routes