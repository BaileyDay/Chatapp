import React, { useState, useEffect } from "react";
import "../css/main.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useStore } from "./store";

const Chat = () => {
  const { state, dispatch } = useStore();

  let history = useHistory();

  useEffect(() => {
    async function fetchData() {
      const result = await axios("http://localhost:3002/chat");
      console.log(result);
      dispatch({
        type: "getUserData",
        payload: result.data,
      });
    }

    fetchData();
  }, []);

  return <h3></h3>;
};
export default Chat;
