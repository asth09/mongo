const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nodejs')
mongoose.set("strictQuery", true);

const database = mongoose.connection;

database.on("connected", () => {
    console.log("Base de datos creada y inicializada")

})
database.on("error", (error) => {
    console.log("Error al establecer con la DB", error)
})

module.exports = mongoose;
  