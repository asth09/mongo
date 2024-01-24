const UserModel = require('../models/userModel');
const {generateToken} =  require('../helpers/jwtHelper.js');

const login = async (usuario, password) => {
  const user = await UserModel.findOne({ usuario });
  if (!user) {
    throw new Error('Usuario no encontrado');
  }

  const passwordMatch = await user.comparePassword(password);
  if (!passwordMatch) {
    throw new Error('Contraseña incorrecta');
  }

	const token = await generateToken(user) 
	console.log(token)
  return user;
};

module.exports = login;
