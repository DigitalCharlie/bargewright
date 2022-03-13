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
    console.log(req.body)
    Character.findByIdAndUpdate(character, req.body, {new:true})
        .then(() => {
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
    newAdventure.goldChange = parseInt(newAdventure.goldChange)
    newAdventure.downtime = parseInt(newAdventure.downtime)
    newAdventure.levelGain = newAdventure.levelGain === 'on' ? true : false
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

// update or remove adventure from array
router.put('/:character/adventures/:advNum', (req,res) => {
    const { user } = res.cookie;
    const { character, advNum } = req.params
    // find character to update
    Character.findById(req.params.character)
        .then((foundChar) => {
            // check if edit or delete adventure is desired
            if (!req.body) {
                // remove the adventure
                foundChar.adventures.splice(advNum, 1)
            } else {
                // otherwise update the adventure
                const editedAdventure = req.body
                editedAdventure.goldChange = parseInt(editedAdventure.goldChange)
                editedAdventure.downtime = parseInt(editedAdventure.downtime)
                editedAdventure.levelGain = editedAdventure.levelGain === 'on' ? true : false
                foundChar.adventures.splice(advNum, 1, editedAdventure)
            }
            // Remove the adventure
            // Save the update
            foundChar.save()
            // Redirect back to character
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

// edit adventure

router.get('/:character/adventures/:advNum/edit', (req,res) => {
    const { character, advNum } = req.params
    Character.findById(character)
    .then((foundChar) => {
        res.render('adventures/Edit', {character: foundChar,user:res.cookie.user, advNum: advNum})
    })
    .catch (() => {
        res.redirect('/')
    })
})

// SHOW (which is a character's home page, but whatever)

router.get('/:character', (req,res) => {
    Character.findById(req.params.character)
        .then(( foundChar ) => {
            res.render('characters/Show', {character: foundChar})
            // res.send(`This is a test of ${foundChar.name}'s page`)
        })
        .catch (() => {
            res.redirect('/')
        })
})

// show adventure page

router.get('/:character/adventures/:advNum', (req,res) => {
    Character.findById(req.params.character)
        .then(( foundChar ) => {
            res.render('adventures/Show', {character: foundChar, advNum: req.params.advNum})
            // res.send(`This is a test of ${foundChar.name}'s page`)
        })
        .catch (() => {
            res.redirect('/')
        })
})

//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;