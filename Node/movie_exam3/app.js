var socketio = require('socket.io');
var express = require('express');
var http = require('http');
var fs = require('fs');

var seats  = [
    [1,1,0,1,1,0,0,0,0,1,1,0,1,1],          
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],          
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],          
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],          
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],          
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],          
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],          
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],          
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],          
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],          
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],          
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],          
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1]          
 ];

//서버 생성
var app = express();

//미들 웨어(라우터) 설정
app.get('/', function(req, res){
	fs.readFile('HTMLPage.html', function(err, data) {
		res.send(data.toString());
	});
});

app.get('/seats', function(req, res){
	res.send(seats);
});

//서버 실행
var server = http.createServer(app);
server.listen(5000, function() {
	console.log('Server running...');
});

//웹 소켓 생성, 실행
var io = socketio.listen(server);

io.sockets.on('connection', function(socket){
	//클라이언트 소켓이 넘어온다
	socket.on('reserve', function(data){
		//seats[x][y] = 2 로 변경시켜야함
		seats[data.y][data.x] = 2;
		
		
		//모든 클라이언트에게 data 전달
		io.sockets.emit('reserve', data);
	});
});


