const ClienteModel = require('../models/clientes')

 const mostrarClientes = async () => {
   const clientes = await ClienteModel.find();
   console.log(clientes)
   return clientes;
 }
 
 module.exports = mostrarClientes;
 