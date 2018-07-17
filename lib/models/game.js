const mongo = require('../mongodb');

const Games = mongo.then(db => db.collection('game'));

module.exports = {
    
};