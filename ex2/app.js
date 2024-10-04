const http = require('http');

http
  .createServer((req, res) => {
    if (req.url === '/') {
      res.end('Bem vindo!');
    } else if (req.url === '/sobre') {
      res.end('Estudante de Engenharia de Software \nDEV');
    } else if (req.url === '/contato') {
      res.end('Telefone: 42 988887777');
    }
  })
  .listen(3333);
