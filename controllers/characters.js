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

// INDEX (which just takes them back to the user's main page)

router.get('/', (req,res) => {
    res.redirect(`/users/${res.cookie.user}`)
})

// NEW ADVENTURE FOR CHARACTER

router.get('/:character/adventures/new', (req,res) => {
    Character.findById(req.params.character)
    .then((foundChar) => {
        res.render('adventures/New', {character: foundChar,user:res.cookie.user})
    })
})

// DELETE CHARACTER

router.delete('/:character', (req, res) => {
    const { user } = res.cookie;
    Character.findByIdAndDelete( req.params.character )
        .then(() => {
            res.redirect(`/users/${user}`);
        })
        .catch((error) => {
            res.status(400).json({ error });
        })
})

// UPDATE

// update character
router.put('/:character', (req,res) => {
    const { user } = res.cookie;
    const { character } = req.params
    Character.findByIdAndUpdate(character, req.body, {new:true})
        .then(() => {
            console.log('updated')
            res.redirect(`/users/${user}/characters/${character}`)
        })
        .catch((err) => {
            res.status(400).json({err})
        })
})

// add new adventure to character's adventure array
router.put('/:character/adventures', (req,res) => {
    const { user } = res.cookie;
    const { character } = req.params
    // establish new adventure
    newAdventure = req.body
    Character.findById(req.params.character)
        .then((foundChar) => {
            // Add new adventure to the found character's adventure array
            foundChar.adventures = [...foundChar.adventures, newAdventure]
            // Save the update
            foundChar.save()
            // Show created character if successful
            res.redirect(`/users/${user}/characters/${character}`)
        })
    .catch ((err) => {
        res.status(400).json(err)
    })
})


// EDIT

router.get('/:character/edit', (req,res) => {
    Character.findById(req.params.character)
        .then((foundChar) => {
            res.render('characters/Edit', {character: foundChar})
        })
})

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