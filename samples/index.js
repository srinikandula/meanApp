var myVar = require("http");


var server = myVar.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Hello World, this is my first node app\n');
});

server.listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');