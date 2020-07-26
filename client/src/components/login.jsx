import React, { useState } from "react";
import "../css/main.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useStore } from "./store";

const Login = () => {
  const [username, setUsername] = useState(0);
  const [password, setPassword] = useState(0);
  const { state, dispatch } = useStore();
  let history = useHistory();

  const loginUser = (e) => {
    e.preventDefault();
    axios
      .post("/api/login", {
        username: username,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          dispatch({ type: "loginSucceeded", payload: response.data });
        }
      })
      .then(() => {
        history.push("/chat");
      })
      .catch(function (error) {
        console.log(error.response.status);
        if (error.response.status === 400) {
          dispatch({ type: "InvalidUsername" });
        }
      });
  };
  return (
    <div className="outerContainer">
      <div className="container">
        <h1 className="loginLogo">Login</h1>
        {state.message && <h3 className="loginMessage">{state.message}</h3>}
        {state.errorMessage && (
          <h3 className="errorMessage">{state.errorMessage}</h3>
        )}
        <form>
          <div>
            <input
              type="text"
              placeholder="Username"
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button className="loginButton" onClick={loginUser}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
