const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if(req.url==='/home'){
    res.write("Welcome to Home page");
  }
  else if(req.url==='/about'){
    res.write("Welcome to about page");
  }
  else if(req.url==='/node'){
    res.write("Welcome to Node js page");
  }
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});