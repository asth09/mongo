const express = require('express');
const router = express.Router();

router.get('/users/registro', (req,res) => {
    res.render('registro');
});

router.get('/users/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})
module.exports = router;