const http = require('http');
const express = require('express');
const path = require('path');
const ejs = require('ejs');
const ghAvatar = require('gh-avatar');

const app = express();


app.use(express.static(__dirname + '/public'));

// Set our views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
  ghAvatar('donjuanpedro').then(avatar => {
  res.render('index.ejs', {
    ghAvatar: avatar,
    name:'Walker',
    skills: ['HTML', 'CSS', 'Javascript', 'Express.js'],
    hobbies: ['Reading', 'Camping', 'Cooking', 'Coding'],
    quote: '"They don\'t think it be like it is, but it do."-Oscar Gamble'
    });
  });
});

console.log(__dirname);

const server = http.createServer(app);
const port = 3000;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
