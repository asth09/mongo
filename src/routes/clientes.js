const express = require('express')
const router = express.Router()

const mostrarClientes = require('../controllers/clienteController')

router.get('/clientes', mostrarClientes.mostrar)
//Crear alumno
router.get('/crear', (req, res) => {
    res.render('crear');
});
router.post('/crear', mostrarClientes.crear)
//Editar alumno (POST)
router.get('/editar/:id', mostrarClientes.editar)

module.exports = router