const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lakerSchema = new Schema({
    name: String,
    number: Number,
    position: String,
    gamesPlayed: Number,
    points: Number,
    fieldGoals: Number,
    height: String,
    dob: String,
    age: Number,
    weight: String,
    hometown: String,
    image: String
});

module.exports = mongoose.model("Laker", lakerSchema);