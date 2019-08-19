const express = require('express');
const path = require('path');
const app = express();
const port = 4000;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/data', (req, res) => {
  res.header('Content-Type', 'application/json');
  res.sendFile(path.join(__dirname, 'data/test.json'));
});

app.get('*', (req, res) => res.send('server running'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))