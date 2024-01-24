const express = require('express');
const router = express.Router();

const produController = require('../controllers/produController')
const mostrarClientes = require('../controllers/clienteController')

   // Ruta para realizar una venta con pagos por cuotas
   router.post('/realizar-venta-cuotas', async (req, res) => {
    try {
      const { clienteId, productoId, cantidad, metodoPago, cuotas, montoTotal } = req.body;

      // Calcular el monto de cada cuota
      const montoCuota = montoTotal / cuotas;

      // Crear la venta con el monto total y el monto pendiente igual al monto total
      const nuevaVenta = new Venta({
        cliente: clienteId,
        producto: productoId,
        cantidad,
        metodoPago,
        montoTotal,
        montoPendiente: montoTotal
      });

      await nuevaVenta.save();

      return res.status(200).json({ message: 'Venta con pagos por cuotas realizada exitosamente' });
    } catch (error) {
      return res.status(500).json({ message: 'Error al realizar la venta con pagos por cuotas' });
    }
  });
  

     // Ruta para realizar un pago por cuota
     router.post('/realizar-pago-cuota', async (req, res) => {
        try {
          const { ventaId, monto } = req.body;
   
          // Obtener la venta
          const venta = await Venta.findById(ventaId);
   
          if (!venta) {
            return res.status(404).json({ message: 'Venta no encontrada' });
          }
   
          if (venta.montoPendiente < monto) {
            return res.status(400).json({ message: 'El monto del pago es mayor al monto pendiente' });
          }
   
          // Actualizar el monto pendiente de la venta
          venta.montoPendiente -= monto;
          await venta.save();
   
          // Guardar el pago en la base de datos
          // Aquí puedes guardar el pago en una colección de pagos
   
          return res.status(200).json({ message: 'Pago realizado exitosamente' });
        } catch (error) {
          return res.status(500).json({ message: 'Error al realizar el pago' });
        }
      });
      

module.exports = router;