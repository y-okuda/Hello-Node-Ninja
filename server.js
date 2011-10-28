var http = require('http');
http.createServer(function (req, res) {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('Hello Node Ninja & Yasuhiro-kun\n');
}).listen(8080);
