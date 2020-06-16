import React from "react";
import { Component } from "react";
import "../css/main.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  render() {
    return (
      <div className="container">
        <h1 className="loginLogo">Login</h1>
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
  }
}
export default Login;
