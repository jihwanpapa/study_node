var server = require('http');

server.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	setTimeout(function(){
		res.end('World\n');
	},2000);
	res.write('Hello\n');
	//res.end('Hello World\n');
	console.log('request arrive!');
}).listen(3000,'localhost');

console.log('Server started at http://localhost:3000');