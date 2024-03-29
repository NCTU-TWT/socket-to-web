(function() {

  require.config({
    paths: {
      jquery: 'lib/jquery-1.7.1.min',
      io: 'lib/socket.io-client-amd'
    }
  });

  require(['jquery', 'io'], function($, io) {
    var socket;
    socket = io.connect();
    return socket.on('data', function(data) {
      return $('#container').append("<p>" + data + "</p>");
    });
  });

}).call(this);
