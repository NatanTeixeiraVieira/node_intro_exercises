const http = require('http');
const { generateRandomNumber } = require('./utils.js');

http
  .createServer((req, res) => {
    if (req.url === '/numero') {
      const randomNumber = generateRandomNumber();
      res.end(randomNumber.toString());
    }
  })
  .listen(3333);
