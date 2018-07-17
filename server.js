const Hapi = require('hapi');

const server = Hapi.server({
    host: 'localhost',
    port: 8080
});

server.route({
    method: 'GET',
    path: '/hello',
    handler: function(request, h) {

        return 'Hello World';
    }
});

//start server
async function start() {

    try {
        await server.start();
    }
    catch(err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
}

start();