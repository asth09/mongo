const mongoose = require('mongoose');
const Schema = mongoose.Schema
const entradaSchema = new Schema({
  nombre: String,
  entradas: Number,
  observacion: String,
  vendedor: String,
  fecha: String
}, {versionKey:false,
timestamps:true});

module.exports = mongoose.model('entradas', entradaSchema);
