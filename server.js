const express = require('express');
const mongoose = require('mongoose')
const requireDir = require('requiredir')
const cors = require('cors')

// iniciando o app
const app = express();
app.use(express.json()); // permite envio de dados no formato JSON
app.use(cors());

// iniciando o database (tem que começar com mongodb://)
mongoose.connect(
    'mongodb://localhost:27017/blindversity', 
    {useNewUrlParser: true}
);

requireDir('./src/models/');

// use recebe todos os tipos de requisição. toda vez que receber uma requisição
// a partir da rota 'api', ele manda para o routes.
app.use('/api', require('./src/routes'));

app.listen(3001);