const helpers = {};

helpers.isAthenticated = (req, res, next) => {
    if(req.isAthenticated()) {
        return next();
    }
    req.flash('error_msg', 'Not Authorized');
    res.redirect('/');
}