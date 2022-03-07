//////////////////////////////////////////////
// Import Dependencies
//////////////////////////////////////////////
const mongoose = require("./connection");

////////////////////////////////////////////////
// Define Model
////////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model } = mongoose;

// make user schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        max: 30
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
});

// make user model
const User = model("User", userSchema);

///////////////////////////////////////////////////
// Export Model
///////////////////////////////////////////////////
module.exports = User