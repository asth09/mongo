const ProveedorModel = require('../models/proveedor')

module.exports.mostrar = async (req, res)=>{
    try {
        const proveedores = await ProveedorModel.find({}).exec();
        return res.render('proveedor', { proveedores: proveedores });
      } catch (error) {
        return res.status(500).json({
          message: 'Error mostrando los proveedores'
        });
      }
    }