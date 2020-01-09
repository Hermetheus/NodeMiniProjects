const http = require('http');

const server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const singerList = {
    first: 'Allan',
    second: 'Jaida',
    third: 'Aubree'
  };

  res.end(JSON.stringify(singerList));
});

server.listen(3000);
console.log('Server Starting');
