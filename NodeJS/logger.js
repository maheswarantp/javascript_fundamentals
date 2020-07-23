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

const Logger = require("./logger");
const logger = new Logger();

logger.on("message", (data) => console.log("Called Listener:", data));
logger.log("Hello World");
logger.log("New Message logged");

// module.exports = Logger;
