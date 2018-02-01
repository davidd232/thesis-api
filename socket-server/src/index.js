const http = require('http');
const SocketIo = require('socket.io');

const log = require('./lib/log');

const server = http.createServer();
const io = SocketIo(server);

io.on('connection', (client) => {
  client.removeAllListeners();
  log('client connected');
  client.join('yooo');
})

const PORT = process.env.PORT || 4155;
server.listen(PORT, () => {
  log(`socket server listening on port ${PORT}`);
});