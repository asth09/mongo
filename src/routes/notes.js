const express = require('express');
const router = express.Router();
const {checkAuth, checkAuthRole} = require('../middlewares/auth.js')

router.get('/notes',checkAuth,checkAuthRole(['ADMIN']), (req,res) => {
    res.send('Notes from database');
});

module.exports = router;
