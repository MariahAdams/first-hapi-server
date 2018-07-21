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
    year: {
        type: Number,
        required: true,
        validate: {
            validator: v => {
                return /\d{4}/.test(v);
            },
            message: 'Valid year required'
        }
    }
});

module.exports = mongoose.model('Game', schema);