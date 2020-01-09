const http = require('http');

const server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  if (req.url === '/home') {
    res.end('We are on the homepage!');
  } else if (req.url === '/about') {
    res.end('This is the about page silly.');
  } else if (req.url === '/singers') {
    const singerList = {
      first: 'Allan',
      second: 'Jaida',
      third: 'Aubree'
    };

    res.end(JSON.stringify(singerList));
  } else {
    res.end('Not Found');
  }
});

server.listen(3000);
console.log('Server Starting...');
