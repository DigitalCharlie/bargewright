////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////

const express = require('express');
const Character = require('../models/characters')
const User = require('../models/users')

/////////////////////////////////////////
// Create Router
/////////////////////////////////////////

const router = express.Router();

////////////////////////////////////////////
// Routes
////////////////////////////////////////////

// INDEX (which just takes them back to the user's main page)

router.get('/', (req,res) => {
    res.redirect(`/users/${res.cookie.user}`)
})

// NEW ADVENTURE

router.get('/:character/new', (req,res) => {
    res.render('adventures/New', {character: req.params.character,user:res.cookie.user})
})

// DELETE CHARACTER



// UPDATE

// update character

// add new adventure to character's adventure array

// EDIT

// SHOW (which is a character's home page, but whatever)

router.get('/:character', (req,res) => {
    Character.findById(req.params.character)
        .then(( foundChar ) => {
            res.render('characters/Show', {character: foundChar})
            // res.send(`This is a test of ${foundChar.name}'s page`)
        })
})

//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;