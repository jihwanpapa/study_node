var net = require('net');

var server = net.createServer(function(socket){
	console.log('server connected');
	socket.on('end', function(){
		console.log('connection is end');
	});
	socket.write('hello \r\n');
});

server.listen(8124, function(){
	console.log('server is connected at %d port',server.address().port);
});