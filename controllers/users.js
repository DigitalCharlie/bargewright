////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////

const express = require('express');
const User = require('../models/users')
const { registerValid, loginValid } = require('../auth/validation')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const auth = require('../auth/verify')

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

router.get('/private', auth, (req,res) => {
    res.send('private area')
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
    const alreadyRegistered = await User.findOne({username:req.body.username})
    if (alreadyRegistered) return res.status(400).send('Username is taken')

    // Hash the password
    const salt = await bcrypt.genSaltSync(10)
    const hashedPw = await bcrypt.hash(req.body.password, salt)

    // create user
    const newUser = ({
        username:req.body.username,
        email: req.body.email,
        password: hashedPw
    })

    User.create(newUser)
        .then((createdUser) => {
            res.redirect(`/`)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
})

// LOGIN

router.get('/login', (req,res) => {
    res.render('users/Login')
})

router.post ('/login', async (req,res) => {
    // validate input
    const { error } = loginValid(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    // is it a valid user?
    const user = await User.findOne({username:req.body.username})
    if (!user) return res.status(400).send('Username or password are not valid')

    // is the password correct?
    const validPassword = await bcrypt.compareSync(req.body.password, user.password)
    if (!validPassword) return res.status(400).send('Username or password are not valid')

    // create jwt
    const token = jwt.sign({_id:user._id}, process.env.JWT_SECRET)
    res.header('auth-token', token)
    res.redirect(`/users/private`)
})

// EDIT

// SHOW










//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;