# We are going to finally make a realtime Chat-App with web-sockets (I dont fully know what web sockets are tbh !!!) using the Traversy Media Tutorial

## What all are we going to use?

- NodeJS
- ExpressJS
- Socket.io
- Nodemon

## Lets get started

- Install dependencies as mentioned in the package.json
- Create our server.js file

### Section 1: Create an HTTP Server with Express and NodeJS for testing

- Require the necessary files into the server.js file
  1. express
  2. path
  3. http
  4. socket.io
- Create an express app and also create a server with

```js
const app = express();
const server = http.createServer(app);
```

and pass in the app

- Initialize a PORT for the server to listen to, here we have used PORT: 3000

### Section-2: Setting the Static files with ap.us(express.static()) function and setting up the io function

- Set the static files with the

```js
app.use(express.static(path.join(__dirname, "public")));
```

function

- We setup the io object with the following function

```js
const io = socketio(server);
```

and pass in the server as a parameter

#### NOTE: The io object is going to listen for any kind of event and respond accordingly

### Section-3: Creating the io.on() function for listening when clients connect

- ```js
  io.on("connection", (socket) => console.log("New Connection"));
  ```
  This function listens for client connections and responds accordingly
- For the frontend to respond to the server and use socket.io, we need to go to chat.html and add a script tag.

```html
<script src="/socket.io/socket.io.js"></script>
```

- Now in our frontend javascript **main.js** we can use the io object as follows:

```js
const socket = io();
```

#### Section-4: Basic server to client message emit

- The socket object of the io.on() function can emit messages too.

```js
// INSIDE THE io.on() function
socket.emit("message", "This is a message emitted from the server");
// socket.emit("<NAME OF THE DATA SENT(LIKE AN ID)>", "DATA TO BE SENT");
```

- And in the main.js, we need to catch this message sent too with the help of the socket object created with the io() function;

```js
socket.emit("message", (message) => {
  console.log(message);
});
// socket.emit("id name", function with data recieved as a parameter)
```

#### Section-5: Welcome Message and Disconnection Messages with Broadcast

- The broadcast function emits the data to all the clients connected except the client from which it was emitted, here we use that to create a chatroom

  1. socket.emit() ===> for a single client
  2. socket.broadcast.emit() ===> for all the clients except emitter client
  3. io.emit() ===> all clients in general

- Disconnection code is written inside the connection function

```js
// inside the original io.on() function
socket.on("disconnect", () => {
  // disconnect function here
  io.emit("user has left the chat");
});
```

#### Section-6: Send messages from client to server

- Now we try to send messages from client to our server, for that we need to go to our **main.js**
- First we import chat-form element into our js file by the **document.getElementByID('chat-form');**
- Then we make an eventlistener of the form of type submit to listen for any submit event happening in our element

```js
chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target.elements.msg.value);
});
```

- We first prevent its default method to happen and then we console log the value passed in the element of chatForm named msg into the console

- Now as we can extract the submitted form from the html successfully, we emit it to the server by using the socket.emit function

```js
socket.emit('chatMessage' message)
```

inside the eventlistener

- On the server side, we have to catch the **chatMessage** chat message,

```js
socket.on("chatMessage", (message) => {
  console.log(message);
});
```

What happens is socket.on() catches the message with id chatMessage and console logs it as we specified it to do so

- We thenemit it back to the frontend framework by using the io.emit() ==> for everybody

```js
io.emit("message", message); // inside the socket.on() function
```

#### Section-7: Make the sent message look like a message by using DOM on the frontend js file 'main.js'

- We create the frontend works to create a div which contains our message and append our message to the div and display it...just read the **function outputMessage(message)** in main.js

#### Section-8: Get started on users and groups

- So now we convert the hardcoded "user has entered the chat" and other such strings to be converted into an object which has username, text, time as its attributes and they are then displayed on our html page
- To get started with users and groups, on login page, u can see the url contains details about the username and room name we can extract those from the url using a cdn called qs cdn
- Get that cdn and put it in our chat.html for usage in main.js

- From the CDN we can extract the username of the person and the ROOM he has to join, we then emit this info to our server.js file which will parse this info

- Now as we need to seperate each users to their respective rooms, we create a socket.on() which encompasses all the earler socket.emits which we had seen

```js
socket.on("joinRoom", (credentials) => {
  const user = function_utils.userJoin(
    socket.id,
    credentials.username,
    credentials.room
  );

  socket.join(user.room);

  socket.emit(
    "message",
    formatMessages(botName, "Welcome to the Community!!!")
  );

  // Broadcast
  socket.broadcast
    .to(user.room)
    .emit(
      "message",
      formatMessages(botName, `${credentials.username} has joined the chat`)
    );

  // send users and rooms
  io.to(user.room).emit("roomUsers", {
    room: user.room,
    users: getRoomUsers(user.room),
  });
  // console.log(getRoomUsers(user.room));
  // console.log("=======");

  // Runs when disconnects
  socket.on("disconnect", () => {
    const user = function_utils.userLeftChat(socket.id);
    if (user) {
      io.to(user.room).emit(
        "message",
        formatMessages(botName, `${user.username} has left the chat`)
      );
      io.to(user.room).emit("roomUsers", {
        room: user.room,
        users: getRoomUsers(user, user.room),
      });
    }
  });
});
```

This itself is in the io.on('connection') part of the code at the top

- io.to(user.room).emit() means it will emit only to that particular room which has been created above

- Then we write js code to get users and get RoomName and call it a day!!!!
