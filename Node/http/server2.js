var http = require('http');

var server = http.createServer();

server.addListener("request", function (request, response) {
	console.log("requested....");
	response.writeHead(200, {
		"Content-Type" : "text/plain"
	});
	
	response.write("Hello nodeJS2!!!");
	response.end();
});

server.addListener("connection", function () {
	console.log("connected....");
});

server.listen(7777);
