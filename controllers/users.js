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

router.get('/', (req,res) => {
    User.findOne({username: res.cookie.user})
        .then((userObj) => {
            Character.find({ player: userObj.username })
            .then ((characters) => {
                res.render('users/Index', {characters, user:userObj.username, userObj})
            })
            .catch((error) => {
                console.log(error);
                res.json({ error });
            });
        })
    .catch((error) => {
        console.log(error);
        res.json({ error });
    });
})

// SORTED INDEX

router.get('/sort/:field/', (req,res) => {
    let { field } = req.params
    // This directional sorting works, but I don't want to implement it because time.
    // field = req.params.direction === 'asc' ? field : "-"+field 
    User.findOne({username: res.cookie.user})
        .then((userObj) => {
            Character.find({ player: userObj.username })
            .sort(field)
            .then ((characters) => {
                res.render('users/Index', {characters, user:userObj.username, userObj})
            })
            .catch((error) => {
                console.log(error);
                res.json({ error });
            });
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

// DELETE USER

router.delete('/', async (req, res) => {
    const { user } = res.cookie;
    await Character.deleteMany({ player:user })
    User.findOneAndDelete({ username: user })
        .then(() => {
            res.redirect('/logout');
            console.log('user deleted')
        })
        .catch((error) => {
            res.status(400).json({ error });
        })
})


// UPDATE

router.put('/', (req,res) => {
    const { user } = res.cookie
    User.findOneAndUpdate({ username: user }, req.body, {new:true})
        .then(() => {
            res.redirect(`/users/${user}`)
        })
        .catch((err) => {
            res.status(400).json({err})
        })
})

// CREATE NEW CHARACTER

router.post('/', (req,res) => {
    // Set player to current user
    req.body.player = res.cookie.user;

    // Create new character
    Character.create(req.body)

    .then((createdCharacter) => {
        // Add created character to User's character array
        // This is so that when a user is deleted their characters are, too.
        User.findOne({user: res.cookie.user})
            .then((foundUser) => {
                foundUser.characters = [...foundUser.characters, createdCharacter._id]
                foundUser.save()
            })
        // Show created character if successful
        res.send(`You have created ${createdCharacter}`)
    })
    .catch ((err) => {
        res.status(400).json(err)
    })
})


// EDIT USER

router.get('/edit', (req,res) => {
    User.findOne({ username: res.cookie.user }, (err, foundUser) => {
        if(!err) {
            res.render('users/Edit', {
                    user: foundUser
                }
            );
        } else {
            res.send({msg:err.message})
        }
    })
})

// SHOW


//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;