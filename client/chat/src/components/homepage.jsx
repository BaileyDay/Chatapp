import React from "react";
import { Component } from "react";
import "../css/main.css";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  componentDidMount() {
    const apiUrl = "http://localhost:3002/test";
    fetch(apiUrl)
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  render() {
    return (
      <div className="container">
        <h1>Chat App</h1>
        <div className="buttonContainer2">
          <a href="/login" class="button7 buttonContainer" id="login">
            Login
          </a>
        </div>
        <div className="buttonContainer2">
          <a href="/register" class="button7 buttonContainer" id="register">
            Register
          </a>
        </div>
      </div>
    );
  }
}
export default Homepage;
