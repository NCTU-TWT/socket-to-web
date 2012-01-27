(function() {
  var express, io, server;

  express = require('express');

  server = express.createServer();

  io = require('socket.io').listen(server);

  server.configure(function() {
    server.use(express.bodyParser());
    server.use(express.methodOverride());
    server.use(server.router);
    return server.use(express.static(__dirname + '#{ __dirname }/../browser'));
  });

  server.configure('development', function() {
    return server.use(express.errorHandler({
      dumpExceptions: true,
      showStack: true
    }));
  });

  server.configure('production', function() {
    return server.use(express.errorHandler());
  });

  server.listen(process.env['PORT'] || 5000);

  console.log("Express server listening on port " + (server.address().port) + " in " + server.settings.env + " mode");

  module.exports = {
    server: server,
    io: io
  };

}).call(this);
