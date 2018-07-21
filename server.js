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
        handler: function(request) {
    
            //Note that we URI encode the name parameter, 
            //this is to prevent content injection attacks. 
            const user = request.params.user ? encodeURIComponent(request.params.user) : 'Stranger';
            return `Hello ${user}!`; 
        }
    },
    {
        method: 'GET',
        path: '/api/games',
        handler: () => {
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

            return reply.response(game).code(200);
        }
    },
    {
        method: 'PUT',
        path: '/api/games/{id}',
        handler: (req, reply) => {
            const { name, url, developer, year } = req.payload;
            const game = new Game({
                name,
                url,
                developer,
                year
            });
            
            Game.findByIdAndUpdate({ _id: req.params.id }, req.payload, { new: true });

            return reply.response(game);
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

module.exports = server;



