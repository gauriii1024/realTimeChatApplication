import { Server } from 'socket.io';
import http from "http";
import express from "express"

const app = express();

const server = http.createServer(app)
const io = new Server(server, {
    cors:{
        origin:['http://localhost:3000'],
        methods:['GET','POST'],
        credentials: true,
    },
});

io.on('connection', (socket) => {
    console.log('user connected', socket.id);
    socket.on("disconnect", () => {
        console.log("user disconnected");
    });
    
})

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Socket.io server listening on port ${PORT}`);
});




export {app, io, server}