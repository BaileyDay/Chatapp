import React from "react";
import { Component } from "react";
import "../css/main.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  render() {
    return (
      <div className="container">
        <h1 className="loginLogo register">Register</h1>
        <form>
          <div>
            <input type="text" placeholder="Enter Username" />
          </div>
          <div>
            <input type="text" placeholder="Enter Password" />
          </div>
          <div>
            <input type="text" placeholder="Confirm Password" />
          </div>
          <button className="loginButton">Login</button>
        </form>
      </div>
    );
  }
}
export default Register;
