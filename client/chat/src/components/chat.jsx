import React, { useState, useEffect } from "react";
import "../css/main.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useStore } from "./store";

const Chat = () => {
  const { state, dispatch } = useStore();

  let history = useHistory();

  useEffect(() => {
    let config = {
      headers: {
        "x-auth-token": state.token,
      },
    };
    async function fetchData() {
      const result = await axios("http://localhost:3002/chat", config);
      dispatch({
        type: "getUserData",
        payload: result.data,
      });
    }
    fetchData();
  }, []);
  return (
    <div>
      <h3 className="welcomeMessage">Welcome, {state.username}</h3>
      <div>
        <form className="formContainer">
          <div>
            <textarea id="chatBar" rows="1" cols="40"></textarea>
            <button>Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Chat;