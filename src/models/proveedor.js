const mongoose = require('mongoose');
const Schema = mongoose.Schema
const proveedorSchema = new Schema({
  nombre: String,
  rif: Number,
  direccion: String,
  telefono: Number,
  vendedor: String
}, {versionKey:false});

module.exports = mongoose.model('proveedores', proveedorSchema);
