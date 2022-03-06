////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////

const express = require('express');
const { create } = require('../models/users');
const User = require('../models/users')

/////////////////////////////////////////
// Create Router
/////////////////////////////////////////

const router = express.Router();

////////////////////////////////////////////
// Routes
////////////////////////////////////////////

// INDEX

router.get('/', (req,res) => {
    res.send('Testing')
})

// NEW

router.get('/new', (req,res) => {
    res.render('users/New')
})

// DELETE

// UPDATE

// CREATE

router.post('/', (req,res) => {
    User.create(req.body)
        .then((createdUser) => {
            console.log(createdUser)
            res.redirect(`/`)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
})

// EDIT

// SHOW










//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;