const express = require('express');
const router = express.Router();
const { signup} = require('../controllers/users');
// User-related routes
//router.route('/login').post(login);
router.post('/signup', signup);
module.exports = router;


