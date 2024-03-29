# Module dependencies. 

express = require 'express'
server  = express.createServer()
io      = require('socket.io').listen server

# Configuration
server.configure ->
    server.use express.bodyParser()
    server.use express.methodOverride()
    server.use server.router
    server.use express.static __dirname + '#{ __dirname }/../client'

server.configure 'development', ->
    server.use express.errorHandler
        dumpExceptions: true
        showStack: true

server.configure 'production', ->
    server.use express.errorHandler()

server.listen process.env['PORT'] || 5000
console.log "Express server listening on port #{ server.address().port } in #{ server.settings.env } mode"


module.exports =
    server: server
    io: io
