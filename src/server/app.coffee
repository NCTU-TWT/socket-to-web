net             = require 'net'
{io}            = require './server'
{EventEmitter}  = require 'events'

# mediator
EE = new EventEmitter

# socket server
server = net.createServer (client) ->
    client.on 'data', (data) ->
        EE.emit 'data', data.toString()

server.listen '4900'



# browser
io.sockets.on 'connection', (socket) ->
    EE.on 'data', (data) ->
        console.log data
        socket.emit 'data', data
