var config = require('config');

var express = require('express');
var app = express();
var server = require('http').createServer(app)
var io = require('socket.io').listen(server);
var adnstream = require('./adnstream');

server.listen(8666);

app.use(express.logger());
app.use(express.static(__dirname + '/../../html'));

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

var stream = new adnstream.ADNStream(config.stream);

stream.on('post', function (obj) {
    console.log('post', obj);
    io.sockets.emit('post', obj);
});

stream.process();

console.log('Ohe there!');
