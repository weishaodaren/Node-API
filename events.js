const events = require('events');
const eventEmitter = new events.EventEmitter();

const handler = () => {
  console.log(`连接成功`);
  eventEmitter.emit(`data_received`);
};

eventEmitter.on(`handler`, handler);

eventEmitter.on(`data_received`, () => {
  console.log(`接收成功`);
});

eventEmitter.emit(`handler`);

console.log(`done`);
