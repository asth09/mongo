const UserModel = require('../models/user');
const bcrypt = require('bcryptjs');

const registrarUsuario = async (datosUsuario) => {
  const { usuario, password } = datosUsuario;
  const hashedPassword = await bcrypt.hash(password, 10);
  const nuevoUsuario = new UserModel({ usuario, password: hashedPassword });
  await nuevoUsuario.save();
}

module.exports = registrarUsuario;
