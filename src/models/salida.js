const mongoose = require('mongoose');
const Schema = mongoose.Schema
const salidaSchema = new Schema({
  nombre: String,
  salidas: Number,
  observacion: String,
  vendedor: String,
  fecha: String
}, {versionKey:false,
timestamps:true});

module.exports = mongoose.model('salidas', salidaSchema);
