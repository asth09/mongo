const express = require('express');
const router = express.Router();

const salidaController = require('../controllers/salidaController')

router.get('/salidas_aux', salidaController.mostrar)

module.exports = router;