const express = require('express');
const path = require("path");

//initilizacions
const app = express();
require('./database.js');

//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

app.get("/", function(req,res){
    res.render("index");
})

//midlewares
app.use(express.urlencoded({extended: false}));
app.use(express.static("public"));

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