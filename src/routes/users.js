const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/users/registro', (req,res) => {
    res.render('registro');
});
/*router.post('/', passport.authenticate('local',{
    successRedirect: '/home',
    failureRedirect: '/',
    failureFlash: true
}))*/


router.get('/users/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})
module.exports = router;