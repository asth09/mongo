const jwt = require('jsonwebtoken')

const generateToken = async (user) => {
	return await jwt.sign(
		{
			_id: user._id,
			role: user.role
		},
		"ackerman",
		{
			expiresIn: "2h"
		}
	)
}

const verifyToken = async (token) => {
	try {
		return await jwt.verify(token, "ackerman")
	} catch (e) {
		return null
	}
}

module.exports = {generateToken, verifyToken}
