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
            <div className="users-section">
                <div className="user-list">
                  <h3>Active Users</h3>
                </div>
            </div>
            <div class="card my-5 px-2">
                <div className="title text-center p-2"> Hey {name}, Welcome Back! User id:{socket.id}</div>
                <form action="" >
                    <div className="msg-box" >
                        {userChat.length == 0 ? <> </> : userChat.map((ele, i) => {
                            return (
                                <>
                                    {console.log(ele.userId == userId, ele.userId, userId)}
                                    {ele.userNaam == name ?
                                        <fieldset>
                                            <legend> {ele.name} </legend>
                                            <div key={Date.now()} className="right text-end">
                                                <p> {ele.text} </p>
                                            </div>
                                        </fieldset>

                                        :
                                        <fieldset>
                                            <legend> {ele.name} </legend>
                                            <div className="left">
                                                {ele.text}
                                            </div>
                                        </fieldset>


                                    }
                                </>
                            )
                        })}
                    </div>
                    <div className='btn-send text-center'>
                        <div className="input-group">
                            <input className="form-control" placeholder='Enter Message Here....' aria-label="With textarea" value={inputData} onChange={(e) => setInputData(e.target.value)} ></input>
                            <button type='submit' className="input-group-text" onClick={sendHendler} > Send </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Card
