require('dotenv').config();
require('./lib/mongodb');
const app = require('./lib/app');
const Hapi = require('hapi');

const server = Hapi.server({
    host: 'localhost',
    port: 8080
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function(request, h) {

        //Note that we URI encode the name parameter, 
        //this is to prevent content injection attacks. 
        return 'Hello, ' + encodeURIComponent(request.params.name) + '!';
    }
});

const init = async () => {

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();

