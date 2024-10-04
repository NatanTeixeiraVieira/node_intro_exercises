const http = require('http');

http
  .createServer((req, res) => {
    if (req.url === '/') {
      res.end('Bem vindo!');
    }
  })
  .listen(3333);
