require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require("path");
const registrarUsuario = require('./controllers/userController');
const clientes = require('./routes/clientes')
const productos = require('./routes/productos')
const proveedor = require('./routes/proveedor');
const entradas = require('./routes/entradas');
const salidas = require('./routes/salidas');
const login = require('./controllers/authController');

//initilizacions
const app = express();
app.use(cookieParser())
app.use(clientes)
app.use(productos)
app.use(proveedor)
app.use(entradas)
app.use(salidas)
require('./database.js');

//settings
app.set('port', process.env.PORT || 3000);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//midlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json())
app.post('/', async (req, res) => {
  const { usuario, password } = req.body;
  try {
    const user = await login(usuario, password);
    res.render('home');
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

//global variables

//routes
app.use(require('./routes/index'));
app.use(require('./routes/users'));
app.use(require('./routes/notes'));

//static files
app.use(express.static(path.join(__dirname, 'public')));
//server is listenning
app.post('/users/registro', async (req, res) => {
    try {
      await registrarUsuario(req.body);
      res.status(201).json({ mensaje: 'Usuario registrado exitosamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al registrar usuario' });
    }
  });


app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
});
