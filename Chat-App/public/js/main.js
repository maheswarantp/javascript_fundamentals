const chatForm = document.getElementById("chat-form");
const chatMessage = document.querySelector(".chat-messages");
const socket = io();

const roomName = document.getElementById("room-name");
const userList = document.getElementById("users");

// get username and room
const credentials = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

// Join room
socket.emit("joinRoom", credentials);

// Get Room and Users
socket.on("roomUsers", ({ room, users }) => {
  outputRoomName(room);
  outputUsers(users);
});

socket.on("message", (message) => {
  // console.log(message);
  outputMessage(message);

  // scroll
  chatMessage.scrollTop = chatMessage.scrollHeight;
});

// Message Submit
chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = event.target.elements.msg.value;
  // console.log(message);
  socket.emit("chatMessage", message);
  event.target.elements.msg.value = "";
  event.target.elements.msg.focus();
});

// output message to DOM
function outputMessage(message) {
  // console.log(message);
  const div = document.createElement("div");
  div.classList.add("message");
  div.innerHTML = `<p class="meta">${message.username}<span>${message.time}</span></p>
  <p class="text">
  ${message.text}
  </p>`;
  document.querySelector(".chat-messages").appendChild(div);
}

// Room Name to DOM
function outputRoomName(room) {
  roomName.innerHTML = room;
}

// User List to DOM
function outputUsers(users) {
  userList.innerHTML = `${users
    .map((user) => `<li>${user.username}</li>`)
    .join("")}`;
  console.log(users.map((user) => user.username));
}
