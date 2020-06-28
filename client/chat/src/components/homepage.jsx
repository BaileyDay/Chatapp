import React from "react";
import { Component } from "react";
import "../css/main.css";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  render() {
    return (
      <div className="outerContainer">
        <div className="container">
          <h1>Chat App</h1>
          <div className="buttonContainer2">
            <a href="/login" className="button7 buttonContainer" id="login">
              Login
            </a>
          </div>
          <div className="buttonContainer2">
            <a
              href="/register"
              className="button7 buttonContainer"
              id="register"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Homepage;
