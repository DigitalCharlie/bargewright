////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////

const express = require('express');
const Character = require('../models/characters')

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

// NEW

router.get('/new', (req,res) => {
    res.render('characters/New')
})



// CREATE

router.post('/', async (req,res) => {
    req.body.player = res.cookie.user;
    Character.create(req.body)
    .then((createdCharacter) => {
        res.send(`You have created ${createdCharacter}`)
    })
    .catch ((err) => {
        res.status(400).json(err)
    })
})



//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;