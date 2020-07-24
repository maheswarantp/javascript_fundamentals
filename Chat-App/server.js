const express = require("express");
const path = require("path");
const http = require("http");
const socketio = require("socket.io");
const formatMessages = require("./utils/messages");
const function_utils = require("./utils/user");
const { getRoomUsers } = require("./utils/user");
const botName = "Chat-Bot";

// create express app
const app = express();
// create a server
const server = http.createServer(app);
// Create socketio object io and pass in server
const io = socketio(server);
// Setup the static files
app.use(express.static(path.join(__dirname, "public")));

// Run when the client connects
io.on("connection", (socket) => {
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

  // Listen for chat message with id chatMessage
  socket.on("chatMessage", (message) => {
    const user = function_utils.getCurrentUser(socket.id);
    // console.log(message);
    // emit message recieved to server to everybody
    io.to(user.room).emit(
      "message",
      formatMessages(`${user.username}`, message)
    );
  });
});

// create a port to listen to
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`));
