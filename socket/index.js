'use strict';

/**
 * Encapsulates all code for emitting and listening to socket events
 *
 */
 var users = {};
var ioEvents = function(io) {
  io.on('connection', function(socket) {
    console.log('socket is connection');

    socket.on('new user', function(data) {
      if (users[data]) {
        users[data] = socket;
      } else {
        var nickname = data;
        users[nickname] = socket;
      }
    });

    socket.on('chat', function(msg) {
      if(users[msg.to]){
        users[msg.to].emit('to'+msg.to,{mess:msg.message});
      }
    })

    socket.on('disconnect', function() {
      console.log('socket is disconnect')
    })
  });

}

/**
 * Initialize Socket.io
 * Uses Redis as Adapter for Socket.io
 *
 */
var init = function(app) {

  var server = require('http').Server(app);
  var io = require('socket.io')(server);

  // Force Socket.io to ONLY use "websockets"; No Long Polling.
  io.set('transports', ['websocket']);

  console.log('init socket')

  // Define all Events
  ioEvents(io);

  // The server object will be then used to list to a port number
  return server;
}

module.exports = init;
