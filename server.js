const express = require("express");
const io = require("socket.io");

const app = express();

app.get("/", (req, res) => {
  res.send("salam . I am alive");
});
app.get("/salam", (req, res) => {
  res.send("salam . I am alive");
});

const server = app.listen(3010, (err) => {
  console.log("App Listen to port 3010");
});

const socket = io(server);
const mySocket = socket.of("/socket");

mySocket.on("connection", (socket) => {
  console.log("new User Connected");


  socket.on("disconnect", () => {
    console.log("User disconnected")
  })
});




