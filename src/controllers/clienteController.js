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
module.exports.crear = async (req, res) => {
    try {
      const { nombre, rif, direccion, telefono, vendedor } = req.body;
  
      // Crear un nuevo cliente
      const nuevoCliente = new ClienteModel({
        nombre,
        rif,
        direccion,
        telefono,
        vendedor
      });
  console.log(nuevoCliente)
      // Guardar el nuevo cliente en la base de datos
      const clienteCreado = await nuevoCliente.save();
  
      return res.status(201).json({ message: 'Cliente creado exitosamente', cliente: clienteCreado });
    } catch (error) {
      return res.status(500).json({ message: 'Error al crear el cliente', error: error.message });
    }
  };
  

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
 

 