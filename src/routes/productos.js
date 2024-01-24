const express = require('express');
const router = express.Router();

const produController = require('../controllers/produController')

router.get('/productos', produController.mostrar)

module.exports = router;