const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    name: String, 
    url: String,
    techniques: [String]
});

module.exports = mongoose.model('Game', GameSchema);