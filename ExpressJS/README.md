# This is an Express JS Basics Tutorial by Traversy Media

## What is Express?

- Express is a very fast, unopinionated, minimalist web framework for NodeJS
- Express is "server-side" framework and cannot be compared with ReactJS or Angular or VueJS. Its is often used with these to make full stack applications

## Why use Express?

- Easier than making websites with plain NodeJS
- Used for server rendered and APIS
- Full control over request and response objects

## Prerequisites:

- Javascript Fundamentals
- Basic NodeJS and NPM
- HTTP Status Codes
- JSON
- High Order Array Methods => forEach, Map, filter
- Arrow Functions

### NOTE: Higher Order Functions Folder contains the respective methods

## BASIC SERVER SYNTAX

```js
const express = require("express");

// Init Express
const app = express();

// Create Route Handlers
app.get("/", (req, res) => {
  res.send("Hello World");
  res.end();
});

// Listen on a PORT
app.listen(3000);
```

    So if we went to 'http://localhost:5000/' on browser we would see
    "Hello World"

## Basic Route Handling

- Fetch Data from Database
- Load Pages
- Return JSONS for APIS
- Full request and response access

## Express Middleware

    Middleware functions are functions that have access to the **request** and **response** object.
    Express has built in middleware as well as third party middleware and we can create our own middleware
    Middle Ware can:

- Execute any code
- Make changes to req/res objects
- End response cycle
- Call next middleware in the stack

## Start the code

#### Section-1

If you look at section 1 of index.js, you will see this:

```js
const PORT = process.env.PORT || 3000;
app.listen(PORT);
```

- What that does is check for open ports in the env variable of the system (for production) or assign 3000 to the port (for development);

#### Section-2

- We send a html file to the '/', so first we create a folder called "public" and create an "index.html" file in it.
- Then we import the path module into our index.js for assigning the hrml files to the necessary routes
- This is however inefficient as we have to manually serve all the routes ourself.
  So if we want a completely static HTML website which just has to render HTML pages, Express has a functionality to make a folder static

#### Section-3

- We use the

```js
app.use();
```

method for using middleware

- So by using the **app.use(express.static(path.join(\_\_dirname, "public")));** code, we can create a completely static HTML website and we can also add css files to the HTML page by creating a css folder in the public folder and adding css stylesheets as done
- We can access other html files simply by changing the route to **/<filename>.html**
  example: http://localhost:3000/about.html
- The benefit of using express.static is we dont have to handle the "Content-Type" and loading the css files part as we had to do in NodeJS

#### Section-4

We are gonna make a simple REST API where we return JSON data which we have hardcoded and not from any database for the moment.

So when we hit the following route we want to be returned a json string

```js
app.get("/api/members", (req, res) => {
  res.json(members);
});
```

The good thing here is we dont even have to do a JSON.stringify() method for the const members object to be converted to a json string.

#### NOTE: Now if we open POSTMAN AND send a get request to http://localhost:3000/api/members, we get the members json string

We are gonna put our members in a new file called Members.js and import it into our index.js

#### Section-5

- We are going to deal with **Middleware** now.
- Middleware is basically something which has access to request and response object.
- We are gonna create a simple middleware called Logger which

- We create a middleware named logger as follows:

```js
const logger = (req, res, next) => {
  // Function
};
```

**next** is used to point to the next middleware in the stack to be used.

- Only creating a logger middleware is not enough, we need to initialize it as well..we use the **app.use()** method for that

```js
app.use(logger);
```

- Now we use the req.protocol, req.get('host') and req.originalUrl functions to get the http, localhost:3000 and /api/members into the console
- we need to **npm i moment** for getting the date and time of the program, and require it into our program

#### Section-6

- We now create an API which gets us a single member from out Members.js object as a json string
- Since we are gonna grab the person by id, we pass in /api/members/:id in our routes and if we send this:

```js
res.send(req.params.id);
```

we can send whatever is the parameter passed on the req object

- For obtaining individual members by id,

```js
res.json(members.filter((member) => member.id === req.params.id));
```

However this gives us **[]** as the output.Thats because members.id is of datatype number and req.params.id is of datatype string, so we can simply do this

```js
res.json(members.filter((member) => member.id == req.params.id));
```

Check by value

#### Section-7

- Here we first clear all the clutter in our code by creating a routes folder and accessing our routes with the Router method in express
- So first we create a routes folder and an api subfolder and initialized a members.js file where we store all our routes
- Then we initialized express and then initialized **const router = express.Router()** method which helps us to set the routes.
- Since we are using router method, instead of app.get, we need to code router.get(// function definition)

```js
router.get("/", (req, res) => res.json(members));
```

An example is shown above

- In our index.js file, we have to then use members.js as a middleware with the app.use() method

```js
app.use("/api/members", require("./routes/api/members"));
```

- The parameters passed are the route to be used in the url and then the actual middleware is required

#### NOTE: Do check the folder tree of our Members.js which provides the json files in our members.js

#### Section-7 POST REQUEST

- Here we send POST requests to the url which we specify in the members.js file in the routes/api/ subfolder
- Code is as follows:

```js
router.post("/", (req, res) => {
  res.send(req.body);
});
```

- What we are doing here is we are initializing a post request to the route **http://localhost:3000/api/members** and then sending whatever we get in our req object back via the res object
- So if we setup a content-type of json and a body as follows:

```json
{
  "name": "DANNY",
  "email": "dan@mail.com"
}
```

It is expected to get the same as the response. But we dont
get the same as result...INFACT WE DONT GET ANY RESULT AT ALL

- For that we need to use the bodyparser module inside express itself, We initialize the body parser module before calling the routes in our main file ie **index.js** file

```js
app.use(express.json());
// express.json for parsing json data
app.use(express.urlencoded({ extended: false }));
// express.urlencoded() for form data
```

and after that if we initialize the routes and send a POST request, we get the same json data as expected

#### Section-8 PUT Request

- Put requests are generally done to update some database value
- In our case, we are gonna update certain values of the hardcoded json file **Members.js**
- First we initialize our put route by the

```js
router.put("/:id", (req, res) => {
  // function
});
```

- Then we check whether the id exists, if it does continue or flag that the id doesnt exist
- If the id exists, we initialize a constant named updateMember which will contain the values to be updated.
- Then using a forEach function, we loop through all the members to match with the
  member id and the req.params.id (the id parameter which we passed in the url)
- Then we check what is the value being sent in the put request and make the changes appropriately

#### Section-9-A Delete Request

- Basically we do the same thing which we did for get request but use the router.delete key word, and the id which we passed on gets deleted

#### Section-9-B Rendering Templates

- Templates can be used with help of any rendering engine. Here we are using **express-handlebars**. So we have to first "npm i express-handlebars".

- The we need to import it in our index.js file with

```js
const exphbs = require("express-handlebars");
```

- We also need to use a middleware to use the express-handlebars, by using this:

```js
// Check Handlebars documentation for more info
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
```

- So we now create a folder named views and a subfolder named layouts and in that we create a layouts template called main.handlebars (it is basically an html template with extension .handlebars)

- So in handlebars where we want to put our information we do this:

```html
<body>
  <div class="container mt-4">
    {{{body}}}
  </div>
</body>
```

- So we now create an index.handlebars in the views folder (out of the layouts subfolder, check tree for further info)
  and thats where we are gonna put the info we want to render onto our route **http://localhost:3000/**

- So we also have to create a route in our index.js with app.get('/') for rendering the index on '/'

```js
app.get("/", (req, res) => res.render("index"));
```

#### NOTE: We need to ensure that the static files are which we declared in the crash course are not rendered first. If thats the case, the static files will be rendered and we wont get our template at the route mentioned

- In index.js if we see the code snippet of app.get(),

```js
app.get("/", (req, res) =>
  res.render("index", {
    title: "Member App",
    members,
  })
);
```

Here we render index.handlebars which has been passed an object containing title as Member App and members list

- If we observe index.handlebars, in h1 tag in double {{title}} means the title is going to be shown there.

```handlebars
<h1 class="text-center mb-3">{{title}}</h1>
```

- Similarly we are printing the members list below in the ul class

```handlebars
<ul class="list-group">
    {{#each members}}
    <li class="list-group-item">{{this.name}}:{{this.email}}</li>
    {{/each}}
</ul>
```

Here #each members act as a for loop which loops through all the members of the class members and prints whatever is asked to be printed

#### Form-Submission

- If we look at the index.handlebars file we can see the html form-group tag
  This is to submit a form with email and name
- Form action is "/api/members" with a method="POST"

```html
<form action="/api/members" method="POST">
  <input type="text" name="name" />
</form>
```

- In the name attribute it is important to specify exactly what are we sending as defined in the POST part of the express api,

```js
router.post("/", (req, res) => {
  //   res.send(req.body);
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active",
  };
```

This part as shown above
So if we were to add a new attribute named password we can easily do so in the route as done by me in the member.js file of the routes/api subfolder

#### CONCLUSION:

The Crash Course on [ExpressJS](https://www.youtube.com/watch?v=L72fhGm1tfE&t=2499s) is finally complete
