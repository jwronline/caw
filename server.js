const path = require('path');
const http = require('http');
const express = require('express');

const app = express();
const server = new http.Server(app);
const io = require('socket.io')(server);

const data = require('./src/js/solutions.json');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
  res.render('main', {
    role: 'client',
    data: data
  });
});

app.get('/admin', (req, res) => {
  res.render('main', {
    role: 'admin',
    data: data
  });
});

app.use(express.static(path.join(__dirname, '/dist')));

module.exports = {
  start() {
    server.listen(3000, () => {
      console.log('listening on *:3000');
    });

    io.on('connection', socket => {
      socket.on('toggle', msg => {
        io.emit('toggle', msg);
      });
    });
  }
};
