const SalidaModel = require('../models/salida')

module.exports.mostrar = async (req, res)=>{
    try {
        const salidas = await SalidaModel.find({}).exec();
        return res.render('salidas_aux', { salidas: salidas });
      } catch (error) {
        return res.status(500).json({
          message: 'Error mostrando las salidas'
        });
      }
    }