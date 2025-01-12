const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

// Importar rutas
const routes = require('./routes/routes.js');

// Configurar rutas
app.use('/api', routes);

module.exports = app;
