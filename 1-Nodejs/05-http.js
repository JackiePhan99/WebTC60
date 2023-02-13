const http = require('http');
const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.end('Day la trang chu');
	} else if (req.url === '/about') {
		res.end("day la trang cua Tuan Anh");
	} else {
		res.end("trang nay ko ton tai");
	}
});

server.listen(5000);