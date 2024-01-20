const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/users/registro', (req,res) => {
    res.render('registro');
});
router.post('/views/index', passport.authenticate('local',{
    successRedirect: '/views/home',
    failureRedirect: '/views/index',
    failureFlash: true
}))


router.get('/users/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})
module.exports = router;