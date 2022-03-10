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

// INDEX

router.get('/:character', (req,res) => {
    Character.findById(req.params.character)
        .then((foundChar) => {
            res.send(`This is a test of ${foundChar.name}'s page`)
        })
})

// NEW ADVENTURE

router.get('/:character/new', (req,res) => {
    res.render('adventures/New', {character: req.params.character,user:res.cookie.user})
})

// DELETE CHARACTER



// UPDATE

// update character

// add new adventure to character's adventure array


//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;