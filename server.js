const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 8080;
const file = path.join(__dirname, 'index.html');

const server = http.createServer((req, res) => {
  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Server error');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  });
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Tokyo Clock listening on port ${port}`);
});
