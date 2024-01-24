const express = require('express');
const router = express.Router();

const proveeController = require('../controllers/proveeController')

router.get('/proveedor', proveeController.mostrar)

module.exports = router;