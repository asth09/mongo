const express = require('express');
const router = express.Router();

const entradaController = require('../controllers/entradaController')

router.get('/entradas_aux', entradaController.mostrar)

module.exports = router;