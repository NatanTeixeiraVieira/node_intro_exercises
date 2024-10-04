const express = require('express');
const path = require('path');
const app = express();
const port = 3333;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/data', (req, res) => {
  res.sendFile(path.join(__dirname, 'info.json'));
});

app.listen(port, () => {
  console.log(`Server listening at
  http://localhost:${port}`);
});
