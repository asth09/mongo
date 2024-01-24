const UserModel = require('../models/user');
const bcrypt = require('bcryptjs');

const registrarUsuario = async (datosUsuario) => {
  const { usuario, password, role } = datosUsuario;
  const nuevoUsuario = new UserModel({ usuario, password, role });
  await nuevoUsuario.save();
}

module.exports = registrarUsuario;
