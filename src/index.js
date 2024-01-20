const express = require('express');
const passport = require('passport');
const path = require("path");
const registrarUsuario = require('./controllers/userController');

//initilizacions
const app = express();
require('./database.js');
require('./config/passport');

//settings
app.set('port', process.env.PORT || 3000);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//midlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json())
app.use(passport.initialize());

//global variables

//routes
app.use(require('./routes/index'));
app.use(require('./routes/users'));
app.use(require('./routes/notes'));
app.use(require('./routes/clientes'));

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