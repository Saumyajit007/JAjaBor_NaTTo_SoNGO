const passport = require('passport');

const googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });

const googleCallback = passport.authenticate('google', {
  failureRedirect: 'http://localhost:5173/login',
  successRedirect: 'http://localhost:5173/',
});

module.exports={
    googleAuth,
    googleCallback,

}