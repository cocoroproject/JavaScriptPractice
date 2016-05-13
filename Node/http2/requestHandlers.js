var querystring = require('querystring');
var formidable = require('formidable');
var fs = require('fs');


function view(response, request){
	console.log('request handler called --> view');
	
	var body = '<html>'+
		'<head>'+
		'<meta http-equiv="Content-Type" content="text/html; '+
		'charset=UTF-8"/>'+
		'</head>'+
		'<body>'+
		'<form action="/create" method="post" enctype="multipart/form-data">'+
		'<textarea name="text" rows="20" cols="60"></textarea>'+
		'<input type="file" name="upload"/>'+
		'<input type="submit" value="Submit"/>'+
		'</form>'+
		'</body>'+
		'</html>';
		
	response.writeHead(200, {
		"Content-Type" : "text/html"
	});
	
	response.write(body);
	response.end();
}


function create(response, request){
	console.log('request handler called --> create');
	
	/*response.writeHead(200, {
		"Content-Type" : "text/plain; charset=utf-8"
	});
	response.write('send Data : ' + querystring.parse(postData).text);
	response.end();*/
	
	var form = new formidable.IncomingForm();
	form.uploadDir = "./";
	form.parse(request, function(error, fields, files){
		fs.renameSync(files.upload.path, './test.png');
		
		response.writeHead(200, {
			"Content-Type" : "text/html; charset=utf-8"
		});
		
		response.write('<p>send data:' + fields.text+'</p>');
		response.write('<img src="/view/image"/>');		
		response.end();
		
	});	
}


function viewImage(response){
	fs.readFile('./test.png', 'binary', function(error, file){
		if(error){
			console.log("image error1");
			response.writeHead(500, {"Content-Type" : "text/plain"});
			response.write(error + "\n");
			response.end();
		}else{
			console.log("image 2");
			response.writeHead(200, {"Content-Type" : "image/png"});
			response.write(file, 'binary');
			response.end();
		}
	});
}



var handle = {};

handle['/'] = view;
handle['/view'] = view;
handle['/create'] = create;
handle['/view/image'] = viewImage;

exports.handle = handle; 








