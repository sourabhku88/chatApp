const express = require('express');
const { createServer } = require("http");
const { Server } = require('socket.io')
const cors = require('cors')
const { socket } = require('./socket/socket')

const app = express();
const PORT = 2344;


const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });




app.use(express.json());
app.use(cors());
socket(io);



app.get('/', (req, res) => {
res.send('Hello Sourabh!')
})



server.listen(PORT, () => {
console.log('server is running on http://localhost:' + PORT)
})





















/**
* ----------- For easy understand

// let userChat = [];
// let usersList = [];

// io.on('connection', (socket) => {
// socket.on('user-connected', (userName, time) => {
// usersList.push({ userName, time });
// io.emit('new-user', usersList);

// // console.log(userName, time )
// // console.log(usersList)
// });


// socket.on('send-msg', (data, name) => {
// userChat.push({ text: data, time: Date().toString(), userId: socket.id, userNaam: name });
// io.emit('msg-recived', userChat);
// });
// })
*/