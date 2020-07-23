/***==== SECTION 1 ====***/
// const express = require("express");
// const app = express();

// // Route
// app.get("/", (req, res) => {
//   res.send("<h1>hello world</h1>");
//   res.end();
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server active on ${PORT}`));

/***====== SECTION 1 ENDS ======***/

/***==== SECTION 2 ====***/
// const express = require("express");
// const path = require("path");
// const app = express();

// // Route
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server active on ${PORT}`));

/***====== SECTION 2 ENDS ======***/

/***==== SECTION 3 ====***/
// const express = require("express");
// const path = require("path");
// const app = express();

// // Make public folder as static
// app.use(express.static(path.join(__dirname, "public")));

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server active on ${PORT}`));

/***====== SECTION 3 ENDS ======***/

/***==== SECTION 4 ====***/
// const express = require("express");
// const path = require("path");
// const app = express();

// const members = [
//   {
//     id: 1,
//     name: "Max",
//     email: "max@mail.com",
//     status: "active",
//   },
//   {
//     id: 2,
//     name: "John",
//     email: "john@mail.com",
//     status: "inactive",
//   },
//   {
//     id: 3,
//     name: "Danny",
//     email: "danny@mail.com",
//     status: "active",
//   },
// ];
// // Simple REST API (hardcoded)
// // gets all members
// app.get("/api/members", (req, res) => res.json(members));
// // Static Folder
// app.use(express.static(path.join(__dirname, "public")));

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server active on ${PORT}`));
/***====== SECTION 4 ENDS ======***/

/***==== SECTION 5 ====***/
// const express = require("express");
// const path = require("path");
// const moment = require("moment");
// const app = express();
// const members = require("./Members");

// // Middle Ware
// // create middleware
// // const logger = (req, res, next) => {
// //   console.log(
// //     `${req.protocol}://${req.get("host")}${
// //       req.originalUrl
// //     }:${moment().format()}`
// //   );
// //   next();
// // };
// // we have made a middleware folder and put the logger file into it
// const logger = require("./middleware/logger");
// // initialize middleware
// app.use(logger);

// app.get("/api/members", (req, res) => res.json(members));
// // Static Folder
// app.use(express.static(path.join(__dirname, "public")));

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server active on ${PORT}`));

/***====== SECTION 5 ENDS ======***/

/***==== SECTION 6 ====***/
// const express = require("express");
// const path = require("path");
// const moment = require("moment");
// const app = express();
// const members = require("./Members");
// // Middleware
// const logger = require("./middleware/logger");
// // app.use(logger);
// // Get all members
// app.get("/api/members", (req, res) => res.json(members));
// // Get single members
// app.get("/api/members/:id", (req, res) => {
//   //   res.send(req.params.id);
//   const found = members.some((member) => member.id == req.params.id);
//   if (found) {
//     res.json(members.filter((member) => member.id == req.params.id));
//   } else {
//     res.status(400).json({ msg: `Member ID:${req.params.id} not found` });
//   }
// });

// // Static Folder
// app.use(express.static(path.join(__dirname, "public")));

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server active on ${PORT}`));

/***====== SECTION 6 ENDS ======***/

/***==== SECTION 7 ====***/
// const express = require("express");
// const path = require("path");
// const moment = require("moment");
// const app = express();
// const members = require("./Members");

// // Middleware
// const logger = require("./middleware/logger");
// // app.use(logger);
// // Static Folder
// app.use(express.static(path.join(__dirname, "public")));

// // Routes
// app.use("/api/members", require("./routes/api/members"));

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server active on ${PORT}`));

/***====== SECTION 7 ENDS ======***/

/***==== SECTION 8 ====***/
// ======== POST REQUEST ======== //

// const express = require("express");
// const path = require("path");
// const app = express();

// // Middleware
// const logger = require("./middleware/logger");
// // app.use(logger);
// // Static Folder
// app.use(express.static(path.join(__dirname, "public")));

// // POST REQUEST, PUT REQUEST AND DELETE REQUEST
// //  Code occurs in members.js
// // init body parser middleware for post req
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// // Routes
// app.use("/api/members", require("./routes/api/members"));

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server active on ${PORT}`));

/***====== SECTION 8 ENDS ======***/

/***==== SECTION 10 ====***/
const express = require("express");
const path = require("path");
const app = express();
const logger = require("./middleware/logger");
const exphbs = require("express-handlebars");
const members = require("./Members");

// Static Folder
// app.use(express.static(path.join(__dirname, "public")));

// Express-Handlebars Middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Render Home Page
app.get("/", (req, res) =>
  res.render("index", {
    title: "Member App",
    members,
  })
);

// Routes
app.use("/api/members", require("./routes/api/members"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server active on ${PORT}`));
