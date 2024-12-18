const express = require('express');
const app = express();

app.use(express.json());

// Importar rutas
const provinciaRoutes = require('./routes/provincia_routes.js');
//const cantonRoutes = require('./routes/canton.routes');
//const parroquiaRoutes = require('./routes/parroquia.routes');
// Importa todas las demás rutas...

// Configurar rutas
app.use('/api/provincias', provinciaRoutes);
//app.use('/api/cantones', cantonRoutes);
//app.use('/api/parroquias', parroquiaRoutes);
// Configura todas las demás rutas...

module.exports = app;
