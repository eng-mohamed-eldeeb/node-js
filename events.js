import EventEmitter from 'events';
import http from 'http';
class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on('newSale', () => {
  console.log('a sale has been done');
});

myEmitter.on('newSale', (stok) => {
  console.log(`there are ${stok} left in stok`);
});

myEmitter.emit('newSale', 9);

const server = http.createServer();

server.on('request', (req, res) => {
  console.log('request received');
  res.end('request received');
});

server.on('request', (req, res) => {
  console.log('another request received');
});

server.listen(8000, 'localhost', () => {
  console.log('server has been started');
});
