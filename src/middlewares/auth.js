const {verifyToken} = require('../helpers/jwtHelper.js')
const userModel = require('../models/userModel.js')

const checkAuth = async (req, res, next) => {
	try {
		//TODO: authorization: Bearer {token}
		const token = req.headers.authorization.split(' ').pop()
		const tokenData = await verifyToken(token)

		if (tokenData._id) {
			next()
		} else {
			res.send("No tiene permisos para ingresar").status(403)
		}
	} catch (e) {
		res.send("No tiene permisos para ingresar").status(403)
	}
}

const checkAuthRole = (roles) => async (req, res, next) => {
	try {
		const token = req.headers.authorization.split(' ').pop()
		const tokenData = await verifyToken(token)
		const userData = await userModel.findById(tokenData._id)

		//TODO: ['admin'].includes('user')
		if([].concat(roles).includes(userData.role)) {
			next()
		} else {
			res.send("No tiene permisos de Role para ingresar").status(403)
		}
	} catch (e) {
		res.send("No tiene permisos de Role para ingresar").status(403)
	}
}

module.exports = {checkAuth, checkAuthRole}
