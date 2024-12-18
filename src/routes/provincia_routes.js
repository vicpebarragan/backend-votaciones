const express = require('express');
const router = express.Router();
const provinciaController = require('../controllers/provincia_controller');

// Rutas CRUD
router.get('/', provinciaController.getAllProvincias);
router.get('/:id', provinciaController.getProvinciaById);
router.post('/', provinciaController.createProvincia);
router.put('/:id', provinciaController.updateProvincia);
router.delete('/:id', provinciaController.deleteProvincia);

module.exports = router;
