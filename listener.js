const events = require('events');
const eventEmitter = new events.EventEmitter();

const listener1 = () => console.log(`监听器 1 执行`);
const listener2 = () => console.log(`监听器 2 执行`);

eventEmitter.addListener('connection', listener1);
eventEmitter.on('connection', listener2);

const eventListeners = eventEmitter.listenerCount('connection');
console.log(`${eventListeners}个监听器`);

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listener1);
console.log(`listener1 不再监听`);

eventEmitter.emit('connection');
