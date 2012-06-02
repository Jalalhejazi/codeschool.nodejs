var events = require('events');
var EventEmitter = events.EventEmitter;

var chat = new EventEmitter();
var users = [], chatlog = [];

chat.on('message', function(message) {
  chatlog.push(message);
});

chat.on('join', function(nickname) {
  users.push(nickname);
});

chat.emit('join', 'Glauco Vinicius');
chat.emit('join', 'Anne Kelly');

chat.emit('message', 'I love you honey!');

var http = require('http');
var server = http.createServer();
server.listen(8080);

server.on('request', function(request, response) {
    response.writeHead(200);
    response.write("Hello, this is dog");
    response.end();
});

server.on('request', function(request, response){
    console.log('New request coming in...');
});

server.on('close', function(request, response){
    console.log('Closing down the server...');
});
