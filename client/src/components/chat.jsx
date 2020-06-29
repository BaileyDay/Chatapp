import React, { useState, useEffect } from "react";
import "../css/main.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useStore } from "./store";

const Chat = () => {
  const { state, dispatch } = useStore();
  const [message, setMessage] = useState(0);
  const [data, setData] = useState(0);
  let history = useHistory();

  axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");

  const sendMessage = (e) => {
    e.preventDefault();

    axios
      .post("/chat", {
        username: state.username,
        message: message,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.response.status);
      });
    const textArea = document.querySelector("#chatBar");
    textArea.value = "";
    history.go(0);
  };

  useEffect(() => {
    try {
      async function fetchData() {
        const result = await axios.get("/chat");
        dispatch({
          type: "getUserData",
          payload: result.data,
        });
      }
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, [state.token, dispatch]);

  useEffect(() => {
    async function fetchData() {
      await axios.get("/chatmessages").then((result) => setData(result.data));
    }

    fetchData();
  }, []);

  const logout = () => {
    dispatch({
      type: "logout",
    });
    history.push("/login");
  };

  return (
    <div>
      <div className="chatHeader">
        <h3 className="welcomeMessage">Welcome, {state.username}</h3>
        <button onClick={logout}>Logout</button>
      </div>
      <div>
        {data && (
          <div className="messageContainer">
            {data.map((user, id) => (
              <div className="singleMessage" key={id}>
                <div>
                  <p className="messageUsername">{user.username}</p>
                </div>
                <div>
                  <p className="userMessage">{user.message}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        <form>
          <div className="formContainer">
            <textarea
              id="chatBar"
              name="textArea"
              rows="1"
              cols="40"
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>
            <button className="sendButton" onClick={sendMessage}>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Chat;
