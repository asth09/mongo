const EntradaModel = require('../models/entrada')

module.exports.mostrar = async (req, res)=>{
    try {
        const entradas = await EntradaModel.find({}).exec();
        return res.render('entradas_aux', { entradas: entradas });
      } catch (error) {
        return res.status(500).json({
          message: 'Error mostrando las entradas'
        });
      }
    }