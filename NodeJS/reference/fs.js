const fs = require("fs");
const path = require("path");

// make a dir
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder Created");
// });
// a folder named test is created in reference

// create and write to a file, parameters are filename, thing to be written, function with an err parameter
// fs.writeFile(
//   path.join(__dirname, "/test", "Hello.txt"),
//   "Content to be written here",
//   (err) => {
//     if (err) throw err;
//     console.log("File Created and written");
//   }
// );

// By default the file is overwritten, to prevent use appendFile
// fs.writeFile(
//   path.join(__dirname, "/test", "Hello.txt"),
//   "Content to be written here",
//   (err) => {
//     if (err) throw err;
//     console.log("File Created and written");
//     // Append File  parameters are: filename(with path), thing to be appended to the file, function to be used
//     fs.appendFile(
//       path.join(__dirname, "/test", "Hello.txt"),
//       "File is formatted here",
//       (err) => {
//         if (err) throw err;
//         console.log("File Formatted here");
//       }
//     );
//   }
// );

// Read File: parameters are filename, charachter encoding and function
// fs.readFile(
//   path.join(__dirname, "/test", "Hello.txt"),
//   "utf-8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

// Rename A file, parameters are original filename, new filename, function
// fs.rename(
//   path.join(__dirname, "/test", "Hello.txt"),
//   path.join(__dirname, "/test", "NewName.txt"),
//   (err) => {
//     if (err) throw err;
//     console.log("File Renamed");
//   }
// );
