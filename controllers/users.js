////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////

const express = require('express');
const User = require('../models/users')
const { registerValid, loginValid } = require('../auth/validation')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const verify = require('../auth/verify')
const authorize = require('../auth/authorize');
const { route } = require('./login');

/////////////////////////////////////////
// Create Router
/////////////////////////////////////////

const router = express.Router();

////////////////////////////////////////////
// Routes
////////////////////////////////////////////

// INDEX


router.get('/', (req,res) => {
    res.send('Welcome to your page, ' + res.cookie.user + `. <a href="/logout">click here to log out.</a>`)
})


router.get('/:num', (req,res) => {
    res.send(`${req.params.num}`)
})



//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;