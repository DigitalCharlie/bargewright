////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////

const express = require('express');
const User = require('../models/users')
const {registerValid, loginValid} = require('../models/validation')
const bcrypt = require('bcryptjs')

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
    // validation
    const { error } = registerValid(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    // does user already exist?
    const alreadyRegistered = await User.findOne({email:req.body.email})
    if (alreadyRegistered) return res.status(400).send('Email already registered')

    // Hash the password
    const salt = await bcrypt.genSaltSync(10)
    const hashedPw = await bcrypt.hash(req.body.password, salt)

    // create user
    const newUser = ({
        name:req.body.name,
        email: req.body.email,
        password: hashedPw
    })
    
    User.create(newUser)
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