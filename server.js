const express = require('express');
const { ExpressPeerServer } = require('peer');
const http = require('http');

const app = express();
const server = http.createServer(app);
const peerServer = ExpressPeerServer(server, {
  debug: true
});

app.use('/peerjs', peerServer);

app.use(express.static('public'));

server.listen(9000, () => {
  console.log('Server is running on http://localhost:9000');
});
