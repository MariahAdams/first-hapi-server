const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    name: String, 
    url: String,
    developer: String,
    year: Number
});

module.exports = mongoose.model('Game', GameSchema);