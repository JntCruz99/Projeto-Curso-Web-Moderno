const app = require('express')();
const consign = require('consign');
const db = require('./config/db');

app.db = db;

consign()
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app);

const porta = 3003;

app.listen(porta, ()=>{
    console.log(`Executando na porta ${porta}`)
});