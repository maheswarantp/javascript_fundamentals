const Person = require("./person");
const person = new Person("Max", 18);
// person.helloPerson();

/*  
This is the way of creating new modules and importing from them. Here we first created a person module and 
declared a class Person which has name and age in its constructor method, 
then we did module.exports = Person; on that Person class,and then we imported it in our main file with 
const Person = require('./person'); and then initialized a person object with const person = new Person('Max', 18)
and passed in 'Max' and 18 as the parameters for the constructor
*/

// ======= MODULE WRAPPER FUNCTION ======= //
/*
function (exports, require, module, __filename, __dirname){
    // the entire javascript code is wrapped in this function
}
*/
// console.log(__dirname, __filename);
// gives dirname and filename

/* 
We generally use Express for Basic Webpages
*/
const http = require("http");
const path = require("path");
const fs = require("fs");

// ===== INEFFICIENT ROUTING =========== //
// const server = http.createServer((req, res) => {
//   console.log(req.url); // gives us the url of the req, if just run like this gives '/'
//   if (req.url === "/" || req.url === "/home") {
//     fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
//       if (err) throw err;
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(data);
//     });
//   } else if (req.url === "/about") {
//     fs.readFile(
//       path.join(__dirname, "public", "about.html"),
//       (err, content) => {
//         if (err) throw err;
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(content);
//       }
//     );
//   } else if (req.url === "/json") {
//     const users = [
//       { name: "Man1", age: 40 },
//       { name: "Man2", age: 34 },
//     ];
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(users));
//   }
// });

const server = http.createServer((req, res) => {
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url + ".html"
  );
  //   console.log(filePath);
  let extensionName = path.extname(filePath);
  //    Initial Content-Type
  let contentType = "text/html";
  // check for content-type
  switch (extensionName) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  // read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        //PAGE NOT FOUND
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        // server error
        res.writeHead(500);
        res.end(`Server Error Occured: ${err.code}`);
      }
    } else {
      //Success
      res.writeHead(200, { "Content-Type": "text.html" });
      res.end(content, "utf8");
    }
  });
});

const PORT = process.env.PORT || 5000;
/* 
What this means is the Server is gonna run either on a port assigned by the environment variable of the host or
its gonna run on PORT: 3000
*/
server.listen(PORT, () => console.log(`Server on: ${PORT}`));
