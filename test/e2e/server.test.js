const assert = require('chai').assert;
const server = require('../server');
const request = require('http');

server.register([
    { register: require('inject-then') }
]);

describe('Server Testing', () => {

    it('should validate if the server is running', () => {
        return server.injectThen({
            method: 'GET',
            url: '/'
        })
            .then(res => {
                assert.deepEqual(res.statusCode, 200);
            });
    });
});



// const mongo = require('../lib/mongodb');
// const { assert } = require('chai');
// const request = require('./request');

// server.register([
//     {
//         register: require('inject-then')
//     }
// ]);

// describe('Games API', () => {

//     it.only('testing with mocha works', () => {
//         return server.injectThen({
//             method: 'GET',
//             url: '/'
//         })
//             .then(
//                 function(res) {
//                     assert.deepEqual(res.statusCode, 200);
//                 }
//             )
//     });

//     it('mocha testing working?', () => {
//         assert.equal(res.text, 'Testing hapi with mocha and chai');
//     });

//     beforeEach(() => {
//         return mongo.then(db => {
//             return db.collection('games').remove();
//         });
//     });

//     function save(game) {
//         return request
//             .post('/api/games')
//             .send(game)
//             .then(({ body }) => body);
//     }

//     let botw;

//     beforeEach(() => {
//         return save({ name: 'Breath of the Wild' })
//             .then(data => {
//                 botw = data;
//             });
//     });

//     it('saves a game', () => {
//         assert.isOk(botw._id);
//     });
// });