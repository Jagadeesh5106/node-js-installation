const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Jagadeesh');
});

server.listen(4000, () => {
  console.log('Server listening on port 4000');
});