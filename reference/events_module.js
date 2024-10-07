const EventEmitter = require("events");
// An event emitter is like a mock event?

// Create class
class MyEmitter extends EventEmitter { };

// Init an object / an instance of EventEmitter class
const myEmitter = new MyEmitter();

// mock of addEvenListener, 
myEmitter.on('event', () => console.log('Event fired!'));

// Initiliaze Event, the parameter is the value we want to use/manipulate in the .on() method. We can use fs...
myEmitter.emit('event');

module.exports = EventEmitter
