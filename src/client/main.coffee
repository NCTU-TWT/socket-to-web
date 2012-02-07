require.config
    paths:
        jquery: 'lib/jquery-1.7.1.min'
        io: 'lib/socket.io-client-amd'
        
require ['jquery','io'], ($, io) ->

    socket = io.connect()
    
    socket.on 'data', (data) ->
        console.log(data)
        $('#data').prepend("<p>#{ data }</p>")
