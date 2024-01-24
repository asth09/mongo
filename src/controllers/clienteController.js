const ClienteModel = require('../models/clientes')

module.exports.mostrar = async (req, res)=>{
    try {
        const clientes = await ClienteModel.find({}).exec();
        return res.render('clientes', { clientes: clientes });
      } catch (error) {
        return res.status(500).json({
          message: 'Error mostrando los clientes'
        });
      }
    }

//Crear
module.exports.crear = (req, res)=>{
  //console.log(req.body)
  const cliente = new ClienteModel({
      nombre: req.body.nombre,
      rif: req.body.rif,
      direccion:  req.body.direccion,
      telefono:  req.body.telefono,
      vendedor:  req.body.vendedor
  })
  cliente.save(function(error,clientes){
      if(error){
          return res.status(500).json({
              message: 'Error al crear el Clientes'
          })
      }
      res.redirect('/clientes')
  })
}

//Editar
module.exports.editar = (req,res)=>{
    const id = req.body.id_editar
    const nombre = req.body.nombre_editar
    const rif = req.body.rif_editar
    const direccion = req.body.direccion_editar
    const telefono = req.body.telefono_editar
    const vendedor = req.body.vendedor_editar
    Cliente.findByIdAndUpdate(id, {nombre, rif, direccion, telefono, vendedor}, (error, cliente)=>{
        if(error){
            return res.status(500).json({
                message: 'Error actualizando el cliente'
            })
        }
        res.redirect('/clientes')
    })
}
 

 