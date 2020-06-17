import React from "react";
import { Component } from "react";
import "../css/main.css";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  createUser() {
    axios
      .post("http://localhost:3002/register", {
        firstName: "Fred",
        lastName: "Flintstone",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
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
          <button className="loginButton" onClick={this.createUser}>
            Login
          </button>
        </form>
      </div>
    );
  }
}
export default Register;
