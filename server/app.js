(function() {
  var EE, EventEmitter, io, net, server;

  net = require('net');

  io = require('./server').io;

  EventEmitter = require('events').EventEmitter;

  EE = new EventEmitter;

  server = net.createServer(function(client) {
    return client.on('data', function(data) {
      return EE.emit('data', data.toString());
    });
  });

  server.listen('4900');

  io.sockets.on('connection', function(socket) {
    return EE.on('data', function(data) {
      console.log(data);
      return socket.emit('data', data);
    });
  });

}).call(this);
