const mongoose = require('mongoose');
const Schema = mongoose.Schema
const productoSchema = new Schema({
  nombre: String,
  codigo: String,
  existencia: Number,
  precio: String
}, {versionKey:false});

module.exports = mongoose.model('productos', productoSchema);
