"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
const messages = [];
app.use((0, cors_1.default)({ origin: "*" }));
app.get("/", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.json({ name: "bhuvansh" });
});
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
// const httpServer = createServer(app);
// const io = new Server(httpServer, {
//   cors: {
//     origin: "*",
//   },
// });
//
// io.on("connection", (socket) => {
//   console.log("User connected");
//
//   // Sends all the messages to the client
//   socket.emit("all messages", messages);
//
//   // Broadcast the message to all
//   socket.on("message", (message: string) => {
//     socket.broadcast.emit("message", message);
//     messages.push(message);
//   });
// });
//
// httpServer.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });
