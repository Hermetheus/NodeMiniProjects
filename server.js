const http = require('http');

const server = http.createServer(function(req, res) {
  res.end('Hey Everyone');
});

server.listen(3000);
console.log('Server Starting...');
