// const server = require('../../server');
// const { assert } = require('chai');
// const request = require('./request');
// const { dropCollection  } = require('./_db');

// describe('Games API', () => {

    // beforeEach(() => dropCollection('games'));

    // function save(game) {
    //     return request
    //         .post('/api/games')
    //         .send(game)
    //         .then(({ body }) => body);
    // }

    // let botw;

    // beforeEach(() => {
    //     return save({ name: 'Breath of the Wild' })
    //         .then(data => {
    //             botw = data;
    //         });
    // });

    // it('saves a game', () => {
    //     assert.isOk(botw._id);
    // });

    // it('returns game by id on GET', () => {
    //     return request
    //         .get(`/api/games/${botw._id}`)
    //         .then(({ body }) => {
    //             assert.deepEqual(body, botw);
    //         });
    // });

    // it('returns games on GET', () => {
    //     let mkart;
    //     return save({ name: 'Mario Kart' })
    //         .then(_mkart => {
    //             mkart = _mkart;
    //             return request.get('/api/games');
    //         })
    //         .then(({ body }) => {
    //             assert.deepEqual(body, [botw, mkart]);
    //         });
    // });

    // it('updates a game on PUT', () => {
    //     botw.name = 'BOTW';
    //     return request 
    //         .put(`/api/games/${botw._id}`)
    //         .send(botw)
    //         .then(({ body }) => {
    //             assert.deepEqual(body, botw);
    //         });
    // });   

    // it('deletes one game on DELETE', () => {
    //     return request  
    //         .del(`/api/games/${botw._id}`)
    //         .then(() => {
    //             return request.get('/games');
    //         })
    //         .then(({ body }) => {
    //             assert.deepEqual(body, {});
    //         });
    // });

    // it('returns 404 on bad url', () => {
    //     return request
    //         .get('/bad')
    //         .then(res => {
    //             assert.equal(res.status, 404);
    //         });
    // });
// });

/* Plugin attempts */
// const assert = require('chai').assert;
// const server = require('../server');
// const request = require('http');

// server.register([
//     { register: require('inject-then') }
// ]);

// describe('Server Testing', () => {

//     it('should validate if the server is running', () => {
//         return server.injectThen({
//             method: 'GET',
//             url: '/'
//         })
//             .then(res => {
//                 assert.deepEqual(res.statusCode, 200);
//             });
//     });
// });



/* Old attempts: */
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