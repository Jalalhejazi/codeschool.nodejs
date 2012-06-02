var EventEmitter = require('events').EventEmitter;
var http = require('http');

var logger = new EventEmitter();
logger.on('error', function(message){
    console.log("ERROR: " + message);
});

logger.on('warn', function(message){
    console.log("WARN: " + message);
});

logger.on('info', function(message){
    console.log("INFO: " + message);
});

logger.emit('error', 'Something went wrong');
logger.emit('warn', 'Take care while using that');
logger.emit('info', 'If you have any questions, ask me!');
logger.emit('unhandled', 'Dont care about it');

var server = http.createServer();
server.listen(4000);

server.on('connection', function(socket) {
    console.log("Welcome!");
})

server.on('request', function(request, response){
    response.writeHead(200);
    response.end();
})

server.on('close', function(){
    console.log("Goodbye!");
})
