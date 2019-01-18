const express = require('express');
const routes = express.Router();
const CandidateController = require('./controllers/CandidateController');

routes.get('/candidates', CandidateController.index);
routes.get('/candidates/:id', CandidateController.show);
routes.post('/candidates', CandidateController.store);
routes.put('/candidates/:id', CandidateController.update);
routes.delete('/products/:id', CandidateController.destroy);

module.exports = routes;