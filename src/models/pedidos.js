const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' },
  producto: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto' },
  cantidad: Number,
  metodoPago: String,
  montoTotal: Number,
  montoPendiente: Number  // Nuevo campo para el monto pendiente por pagar
});

module.exports = mongoose.model('Venta', ventaSchema);
