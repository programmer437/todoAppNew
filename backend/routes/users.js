const express = require('express');
const router = express.Router();
const { signup,login,logout} = require('../controllers/users');
const jwt = require('jsonwebtoken');
const requireSingIn= require('../middlewares/requireSignIn');

// User-related routes
//router.route('/login').post(login);
router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);
router.get('/requireSignIn',requireSingIn, (req, res) => {
    res.status(200).json({ message: "ok" });
});
module.exports = router;


