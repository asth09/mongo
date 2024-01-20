const express = require('express');
const router = express.Router();

const mostrarClientes = require('../controllers/clienteController')

router.get('/clientes', async (req, res) => {
    const clientes = await mostrarClientes();
    res.render('clientes', { clientes: clientes });
  });

module.exports = router;