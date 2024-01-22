import React, {
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import { Modal } from "@mui/material";
import { io } from "socket.io-client";
import noUserFound from "../assets/noUserActive.jpg";
import moment from "moment";
import gif from "../assets/live.gif";
import "./Chat.css";

const Star = () => <div className="star"></div>;

const Card = () => {
  const [showModal, setShowModal] = useState(false);
  const [allUser, setAlluser] = useState([]);
  const [GetMessage, setGetMessage] = useState("");
  const [getAllMessage, setGetAllMessage] = useState([]);
  const [userId, setUserId] = useState(null);
  const [name, setName] = useState("");
  const [showError, setShowError] = useState(false);

  useMemo(() => {
    return setShowModal(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || name === "") setShowError(true);
    if (name?.length !== 0) {
      setShowModal(false);
      socket.emit("user-connected", name, new Date());
    }
  };

  const socket = io("http://localhost:2344/");

  const sendMessageHandler = (e) => {
    e.preventDefault();
    socket.emit("send-msg", GetMessage, name);
    setGetMessage("");
  };

  useEffect(() => {
    // data receive
    socket.on("new-user", (userData) => {
      console.log("calling new user event");
      setAlluser(userData);
    });
    socket.on("active-user", (removedUser) => {
      console.log("callin");
      setAlluser(removedUser);
    });

    socket.on("msg-recived", (messageReceived) => {
      setGetAllMessage(messageReceived.reverse());
      console.log(messageReceived);
    });
    console.log("useeffect caliinng");
  }, []);

  // setUserId(so?.id);

  // const sendHendler = (e) => {
  //   e.preventDefault();
  //   socket.emit("send-msg", inputData, name);
  //   setInputData("");
  // };

  // useEffect(() => {
  //   socket.on("msg-recived", (data) => {
  //     setUserChat(data);

  //   });
  // }, []);

  return (
    <>
      <div className="chat-container ">
        <div>
          <h3>
            Welcome <span className="welcome-user">{name}</span>, Let's start
            chat!
          </h3>
          <div className="chat-box">
            <div className="chat-active-user">
              <div className="active-heading">
                <h4 onClick={() => setShowModal(true)}>Active User</h4>
                <p>
                  {allUser?.length} user
                  {allUser?.length > 0 ? <span className="active"></span> : ""}
                </p>
              </div>
              {allUser.length > 0 ? (
                allUser?.map((userData) => {
                  return (
                    <div className="user-profile" key={userData?.userId}>
                      <div className="avatar">
                        {userData?.userName?.split("")[0]}
                      </div>
                      <div className="user-name">
                        <p className="user-name-align">
                          <span
                            style={{
                              width: "80px",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              textTransform:"capitalize"
                            }}
                          >
                            {userData?.userName}
                            {/* <span className="active"></span> */}
                          </span>
                        </p>
                        <small>{moment(userData?.time).format("LT")}</small>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <div>
                    <img
                      src={noUserFound}
                      alt="noUserFound"
                      style={{ width: "96px" }}
                    />
                    <h4>No Active User</h4>
                  </div>
                </div>
              )}
            </div>
            <div className="live-chat">
              <div className="live-chat-heading">
                <div
                  style={{ display: "flex", gap: "8px", alignItems: "center" }}
                >
                  <h4>Live Chat</h4>
                  {/* <iframe
                    src="https://giphy.com/embed/McsDYx2ihXzztTFMap"
                    width="20"
                    height="20"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe> */}
                  <img src={gif} alt="gif" style={{ width: "20px" }} />
                </div>
                <VideocamIcon className="icon" />
              </div>
              <div className="all-chat">
                {getAllMessage.length > 0 ? (
                  getAllMessage?.map((message) => {
                    return (
                      <>
                        {name === message?.userNaam ? (
                          <div className="right">
                            <div style={{ lineHeight: "1.8" }}>
                              <p className="right-message">{message?.text}</p>
                              <p
                                style={{
                                  fontSize: "8px",
                                  textAlign: "end",
                                  color: "gray",
                                }}
                              >
                                12:30 AM
                              </p>
                            </div>

                            {/* <small style={{ fontSize: "8px" }}>
                              {moment(message?.time).format("LT")}
                            </small> */}
                          </div>
                        ) : (
                          <div className="left">
                            <p
                              style={{
                                width: "80px",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                textTransform:"capitalize"
                              }}
                            >
                       
                              {message?.userNaam}
                            </p>
                            <p className="left-message">{message?.text}</p>
                          </div>
                        )}
                      </>
                    );
                  })
                ) : (
                  <p style={{ textAlign: "center", color: "gray" }}>
                    Let's Start your Chat !!
                  </p>
                )}
              </div>
              <div className="message-type-container">
                <form action="" onSubmit={(e) => sendMessageHandler(e)}>
                  <div className="input-msg-container">
                    <input
                      type="text"
                      value={GetMessage}
                      className="type-message"
                      placeholder="Enter your message..."
                      onKeyDown={(event) => {
                        if (event.key === " " && !GetMessage)
                          event.preventDefault();
                      }}
                      onChange={(e) => {
                        setGetMessage(e.target.value);
                      }}
                    />
                    <button className="send-btn" type="submit">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">All right reserved &copy;2024</footer>
      <Modal
        open={showModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal-container">
          <div className="modal-content">
            <h3 style={{ textAlign: "center" }}> May I know your Name ?</h3>
            <small style={{ textAlign: "center" }}>
              Start typing, We've got surprise for you.
            </small>

            <form
              className="form-container"
              action=""
              onSubmit={(e) => handleSubmit(e)}
            >
              <label htmlFor="name" className="label">
                Enter Your Name
              </label>{" "}
              <br />
              <input
                type="text"
                name="name"
                onKeyDown={(event) => {
                  if (event.key === " " && !name) event.preventDefault();
                }}
                onChange={(e) => {
                  setName(e.target.value);
                  setShowError(false);
                }}
                id="name"
                className="input-box"
                placeholder="Enter your name..."
              />
              {showError && (
                <>
                  <small className="err">Please enter your name</small> <br />
                </>
              )}
              <button className="btn" type="submit">
                Join Chat
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Card;
