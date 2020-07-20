const path = require("path");

// Base File Name
console.log(path.basename(__filename));
// gives path.js as output

// Base Directory Name
console.log(path.dirname(__filename));
// gives directory with path

// File Extension
console.log(path.extname(__filename));
// prints .js

// Create a path object
console.log(path.parse(__filename));
/*Gives this o/p:
     {
         root: 'C:\\',
         dir: 'C:\\javascript\\NodeJS\\reference',
         base: 'path.js',
         ext: '.js',
         name: 'path'
       }  */

// Concatenate paths
console.log(path.join(__dirname, "test", "hello.html"));
// C:\javascript\NodeJS\reference\test\hello.html gives this
