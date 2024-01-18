const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/inventario')
mongoose.set("strictQuery", true);

const database = mongoose.connection;

database.on("connected", () => {
    console.log("Base de datos creada y inicializada")

})
database.on("error", (error) => {
    console.log("Error al establecer con la DB", error)
})
const clienteSchema = mongoose.Schema({
    nombre: String,
    rif: Number,
    direccion: String,
    telefono: Number,
    vendedor: String
})
const ClienteModel = mongoose.model('clientes', clienteSchema)

//mostrar
const mostrar = async ()=>{
    const clientes = await ClienteModel.find()
    console.log(clientes)
}

mostrar()
module.exports = mongoose;
  