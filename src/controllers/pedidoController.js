const ProductoModel = require('../models/producto')
const ClienteModel = require('../models/clientes')

module.exports.mostrar = async (req, res)=>{
    try {
        const productos = await ProductoModel.find({}).exec();
        return res.render('productos', { productos: productos });
      } catch (error) {
        return res.status(500).json({
          message: 'Error mostrando los productos'
        });
      }
    }