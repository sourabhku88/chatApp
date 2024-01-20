import React, { useEffect, useMemo, useState } from 'react'
import { io } from 'socket.io-client'

const Card = ({ name }) => {
    const [inputData, setInputData] = useState('');
    const [userChat, setUserChat] = useState([]);
    const [userId, setUserId] = useState(null)
    const socket = useMemo(() => {
        const so = io('http://localhost:2344/');
        setUserId(so.id);
        return so;
    }, [])


    const sendHendler = (e) => {
        e.preventDefault();
        socket.emit('send-msg', inputData, name);
        setInputData('');
    }

    

    useEffect(() => {
        socket.on('msg-recived', (data) => {
            setUserChat(data);
            console.log(data);
        })
    }, []);

    return (
        <div className='d-flex justify-content-center '>
           
        </div>
    )
}

export default Card
