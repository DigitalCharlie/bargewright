////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////

const express = require('express');
const User = require('../models/users')
const { registerValid, loginValid } = require('../auth/validation')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

/////////////////////////////////////////
// Create Router
/////////////////////////////////////////

const router = express.Router();

////////////////////////////////////////////
// Routes
////////////////////////////////////////////

// INDEX

router.get("/", (req,res) => {
    if (req.cookies['auth-token']) {
        res.redirect(`/users/${req.cookies.user}`)
    } else {
        res.render('home/Index')
    }
});

// NEW

router.get('/new', (req,res) => {
    res.render('users/New')
})

// CREATE NEW USER

router.post('/', async (req,res) => {
    // validation
    const { error } = registerValid(req.body)
    if (error) return res.render(`users/New`, {error: error.details[0].message})

    // does user already exist?
    const alreadyRegistered = await User.findOne({username:req.body.username})
    if (alreadyRegistered) return res.render(`users/New`, {error: "Username is taken"})

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
            res.redirect(`/login`)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
})

// LOGIN

router.get('/login', (req,res) => {
    if (req.cookies['auth-token']) {
        res.redirect(`/users/${req.cookies.user}`)
    } else {
        res.render('users/Login')
    }
})

router.post('/login', async (req,res) => {
    // validate input
    const { error } = loginValid(req.body)
    if (error) return res.render(`users/Login`, {error: error.details[0].message})

    // is it a valid user?
    const user = await User.findOne({username:req.body.username})
    if (!user) return res.render(`users/Login`, {error:'Username or password are not valid'})

    // is the password correct?
    const validPassword = await bcrypt.compareSync(req.body.password, user.password)
    if (!validPassword) res.render(`users/Login`, {error:'Username or password are not valid'})

    // create jwt
    // this is what I have questions about rn — res.cookie vs res.locals
    const token = jwt.sign({_id:user._id, username:user.username}, process.env.JWT_SECRET, { expiresIn: '1h' })
    res.cookie('auth-token', token, { httpOnly: true, maxAge:60*60*1000 })
    res.cookie('user', user.username, { httpOnly: true, maxAge:60*60*1000 })
        .redirect(`/users/${req.body.username}`)
})

// LOGOUT

router.get('/logout', (req,res) => {
    res.clearCookie('auth-token')
    res.clearCookie('user')
    res.clearCookie('username')
    res.status(200).redirect('/')
})

// EDIT

// SHOW







//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;