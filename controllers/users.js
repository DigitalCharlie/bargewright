////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////

const express = require('express');
const Character = require('../models/characters')
const User = require('../models/users')
const verify = require('../auth/verify')
const authorize = require('../auth/authorize')

/////////////////////////////////////////
// Create Router
/////////////////////////////////////////

const router = express.Router();

////////////////////////////////////////////
// Routes
////////////////////////////////////////////

// INDEX


// router.get('/', (req,res) => {
//     res.send('Welcome to your page, ' + res.cookie.user + `. <a href="/logout">click here to log out.</a>`)
// })

// router.all('/:username/*', verify, authorize);


router.get('/', (req,res) => {
    Character.find({ player: res.cookie.user })
        .then ((characters) => {
            res.render('users/Index', {characters, user:res.cookie.user})
        })
        .catch((error) => {
            console.log(error);
            res.json({ error });
        });
})

// NEW

router.get('/new', (req,res) => {
    res.render('characters/New', {user:res.cookie.user})
})



// CREATE

router.post('/', (req,res) => {
    // Set player to current user
    req.body.player = res.cookie.user;

    // Create new character
    Character.create(req.body)

    .then((createdCharacter) => {
        // Add created character to User's character array
        // User.findOne({user: res.cookie.user})
        //     .then((foundUser) => {
        //         foundUser.characters = [...foundUser.characters, createdCharacter]
        //         foundUser.save()
        //     })
        // Show created character if successful
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