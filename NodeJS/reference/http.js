const http = require("http");

// Create Server Object takes a callback function
http
  .createServer((req, res) => {
    res.write("Hello World");
    res.end();
  })
  .listen(3000, () => console.log("Server Running")); //listen(port_number)
