const mongoose = require('mongoose');

const clienteSchema = mongoose.Schema({
  nombre: String,
  rif: Number,
  direccion: String,
  telefono: Number,
  vendedor: String
});

const ClienteModel = mongoose.model('clientes', clienteSchema);
console.log(ClienteModel)

module.exports = ClienteModel;
