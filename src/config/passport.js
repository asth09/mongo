const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

passport.use(new LocalStrategy({
    usernameField: 'usuario'
    }, async (usuario, password, done) => {
       const user = User.findOne({usuario: usuario});
       if(!user){
        return done(null, false, {message: 'Not User found'});
       }else{
        const match = await user.matchPassword(password);
        if(match) {
            return done(null, user);
        } else {
            return done(null, false, {message: 'Incorrect Password'});
        }
       }
    }));

    passport.serializeUser((user, done) => {
        done(null, user,id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        })
    })