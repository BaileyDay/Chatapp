import React from "react";
import { Component } from "react";
import "../css/main.css";
import { useStore } from "./store";

const Login = () => {
  const { state, dispatch } = useStore();
  return (
    <div className="container">
      <h1 className="loginLogo">Login</h1>
      <h3 className="loginMessage">{state.message}</h3>
      <form>
        <div>
          <input type="text" placeholder="Username" />
        </div>
        <div>
          <input type="text" placeholder="Password" />
        </div>
        <button className="loginButton">Login</button>
      </form>
    </div>
  );
};
export default Login;
