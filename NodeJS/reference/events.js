const EventEmitter = require("events");

// create class
class MyEmitter extends EventEmitter {}

// init object
const MyEmitter = new MyEmitter();

// Event Listener
MyEmitter.toString("event", () => console.log("Event Emitted"));
