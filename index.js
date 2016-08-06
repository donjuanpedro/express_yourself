const http = require('http');
const express = require('express');
const path = require('path');

const app = express();

// Set our views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index.ejs', { names: 'Walker'}, {skills: ['HTML', 'CSS', 'Javascript', 'Node.js/Express.js']
});

const server = http.createServer(app);
const port = 3000;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
