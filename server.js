const Hapi = require('hapi');
const Mongoose = require('mongoose');
const Game = require('./lib/models/game');

Mongoose.connect('mongodb://localhost:27017/switch');
Mongoose.connection.once('open', () => {
    console.log('connected to database');
});

const server = Hapi.server({
    host: 'localhost',
    port: 8080
});

server.route([
    {
        method: 'GET',
        path: '/api/{user?}',
        handler: function(request, h) {
    
            //Note that we URI encode the name parameter, 
            //this is to prevent content injection attacks. 
            const user = request.params.user ? encodeURIComponent(request.params.user) : 'Stranger';
            return `Hello ${user}!`; 
        }
    },
    {
        method: 'GET',
        path: '/api/games',
        handler: (req, reply) => {
            return Game.find();
        }
    },
    {
        method: 'POST',
        path: '/api/games',
        handler: (req, reply) => {
            const { name, url, developer, year } = req.payload;
            const game = new Game({
                name,
                url,
                developer,
                year
            });

            return game.save();
        }
    }
]);

const init = async() => {

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();



