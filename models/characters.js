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
const charSchema = new Schema({
    name: {
        type: String,
        required: true,
        max: 64
    },
    class: {
        type: String,
        required: true
    },
    race: {
        type: String,
        required: true,
    },
    level: 1,
    adventures: Array
});

// make user model
const Character = model("Char", charSchema);

///////////////////////////////////////////////////
// Export Model
///////////////////////////////////////////////////
module.exports = Character