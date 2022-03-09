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
const advSchema = new Schema({
    name: {
        type: String,
        required: true,
        max: 64
    },
    date: {
        type: Date,
        required: true
    },
    levelGain:Boolean,
    goldGain: Number,
    downtime: Number,
    dungeonMaster: String,
    magicItems: Array,
    notes:String
});

// make user model
const Adventure = model("Adventure", advSchema);

///////////////////////////////////////////////////
// Export Model
///////////////////////////////////////////////////
module.exports = Adventure