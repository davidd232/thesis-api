const http = require('http');
const SocketIo = require('socket.io');

const log = require('./lib/log');
const Rooms = require('./rooms');

const server = http.createServer();
const io = SocketIo(server);
const rooms = new Rooms(io);

io.on('connection', (client) => {
  client.removeAllListeners();
  log('client connected');
  const { roomId } = client.handshake.query;
  const room = rooms.findOrCreate(roomId || 'default');
  client.join(room.get('id'));
})

const PORT = process.env.PORT || 4155;
server.listen(PORT, () => {
  log(`socket server listening on port ${PORT}`);
});