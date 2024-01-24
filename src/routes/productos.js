const express = require('express');
const router = express.Router();
const {checkAuth, checkAuthRole} = require('../middlewares/auth.js')

const produController = require('../controllers/produController')

router.get('/productos', checkAuth, checkAuthRole(['ADMIN']), produController.mostrar)

module.exports = router;
