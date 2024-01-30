const express = require('express');
const router = express.Router();

router.get('/users/registro', (req,res) => {
    res.render('registro');
});

router.get('/users/logout', (req, res) => {
    res.clearCookie('jwtToken'); // Ejemplo: limpiar una cookie llamada 'jwtToken'
  
    // Enviar una respuesta al cliente
    res.render('index');
});
module.exports = router;