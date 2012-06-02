var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });

    response.write("It's running!");

    setTimeout(function() {
        response.end("Hello!");
    }, 2000);

}).listen(4000);

console.log("Listening on port 4000");
