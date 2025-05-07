const express = require('express');
const router = express.Router();
const {checkAuth, logout} = require('../../controller/auth/user.controller');
const passport=require("passport")


router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',  passport.authenticate('google', {
  failureRedirect: 'http://localhost:5173/login',
  successRedirect:"http://localhost:5173/"
}));

router.get('/check-auth',checkAuth)
  
router.get('/logout',logout)

module.exports = router;