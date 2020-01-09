const events = require('events');

const myEmitter = new events();

myEmitter.on('customEvent', msg => {
  console.log(msg);
});

myEmitter.emit('customEvent', 'this custom event working');
