const express = require('express');
const app = express();
const login = require('../controllers/authController');


app.post('/', async (req, res) => {
  const { usuario, password } = req.body;
  try {
    const user = await login(usuario, password);
    res.status(200).json({ message: 'Inicio de sesión exitoso', user });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

