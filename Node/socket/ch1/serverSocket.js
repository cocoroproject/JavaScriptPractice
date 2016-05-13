var fs = require('fs');
var http = require('http');
var socketio = require('socket.io');

//웹서버 생성
var server = http.createServer(function (request, response) {
	fs.readFile('htmlPage.html', function (error, data) {
		response.writeHead('200', {'Content-Type' : 'text/html'});
		response.end(data);
	});
}).listen(5000, function () {
	console.log('Server running...');
});

//server Socket 생성
var io = socketio.listen(server);
var id = 0;
io.sockets.on('connection', function (socket) {
	id = socket.id;
	console.log('id:' + id);
	socket.on('kosta', function (data) {
		console.log('Client Send Data: ' + data);
//		io.sockets.emit('apple', data);   // public 통신 - 모두에게 통신 
//		socket.broadcast .emit('apple', data); // broadcast 통신 -
		io.sockets.sockets[id].emit('apple', data); // private 통신
	});
});