const mongoose = require('mongoose');
const Schema = mongoose.Schema
const clienteSchema = new Schema({
  nombre: String,
  rif: Number,
  direccion: String,
  telefono: Number,
  vendedor: String
}, {versionKey:false});

module.exports = mongoose.model('clientes', clienteSchema);
