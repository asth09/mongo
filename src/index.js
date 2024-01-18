const express = require('express');
const passport = require('passport');
const path = require("path");

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
app.use(passport.initialize());

//global variables

//routes
app.use(require('./routes/index'));
app.use(require('./routes/users'));
app.use(require('./routes/notes'));

//static files
app.use(express.static(path.join(__dirname, 'public')));
//server is listenning
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
});