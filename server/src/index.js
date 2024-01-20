const express = require('express');
const { createServer } = require("http");
const { Server } = require('socket.io')
const cors = require('cors')

const app = express();
const PORT = 2344;


const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*"
    }
});


app.use(express.json());
app.use(cors());

let userChat = []

io.on('connection', (socket) => {
    socket.on('user-connected', (data) => {
        // console.log(data);
    });

    socket.on('send-msg', (data, name) => {
        userChat.push({ text: data, time: Date().toString(), userId: socket.id, userNaam: name });
        io.emit('msg-recived', userChat);
    });
})

app.get('/', (req, res) => {
    res.send('Hello Sourabh!')
})



server.listen(PORT, () => {
    console.log('server is running on http://localhost:' + PORT)
})