const url = require("url");
const myUrl = new URL(
  "http://www.google.com:8000/hello.html/?id=100&status=active"
);

// Get Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());
// Host(root domain)
console.log(myUrl.host);
// Host Name (doesnt give port)
console.log(myUrl.hostname);
// Path Name
console.log(myUrl.pathname);
// Serialized Query
console.log(myUrl.search);
// Create A Search Object
console.log(myUrl.searchParams);
// Add Params
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);
// Loop through Params
myUrl.searchParams.forEach((val, name) => console.log(`${name}:${val}`));
