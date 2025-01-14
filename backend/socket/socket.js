import { Server } from 'socket.io';
import http from "http";
import express from "express"

const app = express();

const server = http.createServer(app)
const io = new Server(server, {
    cors:{
        origin:['http://localhost:3000' , 'http://localhost:3001'],
        methods:['GET','POST'],
        credentials: true,
    },
});

const userSocketMap = {}; //{userId -> socketId}

io.on('connection', (socket) => {
    console.log('user connected', socket.id);
    const userId = socket.handshake.query.userId
    if (userId != undefined){
        userSocketMap[userId] = socket.id;
    }
    
    
    socket.on('disconnect', () => {
        console.log('User Disconnected', socket.id);
        delete userSocketMap[userId]
        io.emit('getOnlineUsers', Object.keys(userSocketMap));
    })
})



// const PORT = process.env.PORT || 8080;
// server.listen(PORT, () => {
//     console.log(`Socket.io server listening on port ${PORT}`);
// });




export {app, io, server}