const UserModel = require('../models/user');

const login = async (usuario, password) => {
  const user = await UserModel.findOne({ usuario });
  if (!user) {
    throw new Error('Usuario no encontrado');
  }

  const passwordMatch = await user.comparePassword(password);
  if (!passwordMatch) {
    throw new Error('Contraseña incorrecta');
  }

  return user;
};

module.exports = login;
