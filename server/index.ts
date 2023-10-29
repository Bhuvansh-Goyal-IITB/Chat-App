import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
const port = 3000;

const messages: Array<string> = [];

app.use(cors({ origin: "*" }));

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("User connected");

  // Sends all the messages to the client
  socket.emit("all messages", messages);

  // Broadcast the message to all
  socket.on("message", (message: string) => {
    socket.broadcast.emit("message", message);
    messages.push(message);
  });
});

httpServer.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
