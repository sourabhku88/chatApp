import React, { useEffect, useMemo, useState } from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import { Modal } from "@mui/material";
import { io } from "socket.io-client";
import "./Chat.css";

const Star = () => <div className="star"></div>;

const Card = () => {
  const [showModal, setShowModal] = useState(false);
  const [inputData, setInputData] = useState("");
  const [userChat, setUserChat] = useState([]);
  const [userId, setUserId] = useState(null);
  const [name, setName] = useState("");
  const [showError, setShowError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || name === "") {
      setShowError(true);
    } else {
      setShowModal(false);
    }
  };

  const socket = io("http://localhost:2344/");

  
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

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <>
      <div className="chat-container ">
        <div>
          <h3>
            Welcome{" "}
            <span className="welcome-user">
              {console.log(name)}
              {name}
            </span>
            , Let's start chat!
          </h3>
          <div className="chat-box">
            <div className="chat-active-user">
              <div className="active-heading">
                <h4 onClick={() => setShowModal(true)}>Active User</h4>
                <p>10 user</p>
              </div>
              <div className="user-profile">
                <div className="avatar">RC</div>
                <div className="user-name">
                  <p className="user-name-align">
                    Rahul Chouhan <span className="active"></span>
                  </p>
                  <small>10 min ago</small>
                </div>
              </div>
              <div className="user-profile">
                <div className="avatar">SP</div>
                <div className="user-name">
                  <p> Sourabh Prajapati</p>
                  <small>10 min ago</small>
                </div>
              </div>
              <div className="user-profile">
                <div className="avatar">NJ</div>
                <div className="user-name">
                  <p> Namrata Jaiswal</p>
                  <small>10 min ago</small>
                </div>
              </div>
              <div className="user-profile">
                <div className="avatar">NJ</div>
                <div className="user-name">
                  <p> Namrata Jaiswal</p>
                  <small>10 min ago</small>
                </div>
              </div>{" "}
              <div className="user-profile">
                <div className="avatar">NJ</div>
                <div className="user-name">
                  <p> Namrata Jaiswal</p>
                  <small>10 min ago</small>
                </div>
              </div>{" "}
              <div className="user-profile">
                <div className="avatar">NJ</div>
                <div className="user-name">
                  <p> Namrata Jaiswal</p>
                  <small>10 min ago</small>
                </div>
              </div>{" "}
              <div className="user-profile">
                <div className="avatar">NJ</div>
                <div className="user-name">
                  <p> Namrata Jaiswal</p>
                  <small>10 min ago</small>
                </div>
              </div>
            </div>
            <div className="live-chat">
              <div className="live-chat-heading">
                <div
                  style={{ display: "flex", gap: "8px", alignItems: "center" }}
                >
                  <h4>Live Chat</h4>
                  <iframe
                    src="https://giphy.com/embed/McsDYx2ihXzztTFMap"
                    width="20"
                    height="20"
                    frameBorder="0"
                    className="giphy-embed"
                    allowFullScreen
                  ></iframe>
                </div>
                <VideocamIcon className="icon" />
              </div>
              <div className="all-chat">
                <div className="right">hi</div>
                <div className="left">hello</div>
              </div>
              <div className="message-type-container">
                <div className="input-msg-container">
                  <input
                    type="text"
                    className="type-message"
                    placeholder="Enter your message..."
                  />
                  <button className="send-btn">Send</button>
                </div>
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
