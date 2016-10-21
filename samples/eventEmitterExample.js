// Import events module
var events = require('events');


// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
   console.log('connection succesful.');
  
   // Fire the data_received event 
   eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('blah', function() {
   console.log('blah event triggered succesful.');
  
   // Fire the data_received event 
   eventEmitter.emit('data_received');
});
 

// Fire the connection event 
eventEmitter.emit('blah');

console.log("Program Ended.");