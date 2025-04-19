const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(cors());

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("stationUpdate", (data) => {
        console.log("Station update:", data);
        io.emit("updateBusPosition", data);
    });

    socket.on("driverMessage", (msg) => {
        console.log("Driver message:", msg);
        io.emit("studentNotification", msg);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});


server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});