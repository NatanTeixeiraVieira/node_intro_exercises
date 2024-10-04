const http = require('http');

http
  .createServer((req, res) => {
    if (req.url.startsWith('/saudacao/')) {
      const name = req.url.split('/')[2];
      res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(`Olá, ${name}`);
    }
  })
  .listen(3333);
