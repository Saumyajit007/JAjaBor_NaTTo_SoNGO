const express = require('express');
const router = express.Router();
const {loginSuccess} = require('../../controller/auth/user.controller');
const passport=require("passport")


router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',  passport.authenticate('google', {
  failureRedirect: 'http://localhost:5173/login',
  successRedirect:"http://localhost:5173/"
}));

router.get('/google/login/success',loginSuccess)

module.exports = router;