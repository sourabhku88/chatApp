const socket = (io) => {
    let userChat = [];
    let usersList = [];

    io.on('connection', (socket) => {
        socket.on('user-connected', (userName, time) => {
            // console.log(userName,time);
            usersList.push({ userName, time, userId:socket.id });
            io.emit('new-user', usersList);
            console.log(usersList);
        });


        socket.on('send-msg', (data, name) => {
            console.log(data,name);
            userChat.push({ text: data, time: Date().toString(), userId: socket.id, userNaam: name });
            io.emit('msg-recived', userChat);
        });

        socket.on('disconnect', () => {
            usersList = usersList.filter(ele => ele.userId !== socket.id);
            io.emit('active-user',usersList);
            // console.log('one user disconnected!!', socket.id)
        })
    })
}

module.exports = { socket }