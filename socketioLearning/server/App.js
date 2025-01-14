import express from "express"
import { Server } from "socket.io";
import {createServer} from "http"

const app = express();

const port = 3000
const server = createServer(app)

const io = new Server(server)

app.get("/", (req, res) => {
    res.send("Hello World")
})

io.on("connection", (socket) => {
    console.log("user connected");
    console.log("id", socket.id)
})

app.listen(3000, () => {
    console.log(`Server running on ${port}`);
})