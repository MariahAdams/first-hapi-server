const { createServer } = require('http');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const serverjs = require('../../server');
const server = createServer(serverjs);
const request = chai.request(server).keepOpen();

after(done => server.close(done));

module.exports = request;
