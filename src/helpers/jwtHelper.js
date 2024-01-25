require('dotenv').config();
const jwt = require('jsonwebtoken')

const generateToken = async (user) => {
	return await jwt.sign(
		{
			_id: user._id,
			role: user.role
		},
		process.env.JWT_SECRET,
		{
			expiresIn: "2h"
		}
	)
}

const verifyToken = async (token) => {
	try {
		return await jwt.verify(token, process.env.JWT_SECRET)
	} catch (e) {
		return null
	}
}

module.exports = {generateToken, verifyToken}
