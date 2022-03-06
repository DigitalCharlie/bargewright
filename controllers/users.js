////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////

const express = require('express');
const User = require('../models/users')
const {registerValid, loginValid} = require('../models/validation')

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

router.post('/', async (req,res) => {
    const { error } = registerValid(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    await User.create(req.body)
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