{/* <div className='d-flex justify-content-center '>
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
</div> */}