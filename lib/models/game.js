const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    url: String,
    developer: {
        type: String, 
        required: true
    },
    year: Number
});

module.exports = mongoose.model('Game', schema);