const EventEmitter = require("events");
const uuid = require("uuid");

// console.log(uuid.v4()); // generates random id

// create a logger class
class Logger extends EventEmitter {
  log(msg) {
    // Call event
    this.emit("message", { id: uuid.v4(), msg: msg });
  }
}

module.exports = Logger;
