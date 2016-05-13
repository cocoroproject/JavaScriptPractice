var http = require('http');

function onRequest(request, response) {
	response.writeHead(200, {
		"Content-Type" : "text/plain"
	});
	
	response.write("Hello nodeJS3!!!");
	response.end();
}

http.createServer(onRequest).listen(7777);
console.log('server has started');