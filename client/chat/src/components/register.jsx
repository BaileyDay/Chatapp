import React from "react";
import { Component } from "react";
import "../css/main.css";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
      username: "",
      password: "",
      redirect: false,
    };
    this.createUser = this.createUser.bind(this);
  }

  createUser(e) {
    axios
      .post("http://localhost:3002/register", {
        username: this.state.username,
        password: this.state.password,
      })
      .then(function () {})
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="container">
        <h1 className="loginLogo register">Register</h1>
        <form>
          <div>
            <input
              type="text"
              placeholder="Enter Username"
              onChange={(event) =>
                this.setState({ username: event.target.value })
              }
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter Password"
              onChange={(event) =>
                this.setState({ password: event.target.value })
              }
            />
          </div>
          <div>
            <input type="text" placeholder="Confirm Password" />
          </div>
          <button className="loginButton" onClick={this.createUser}>
            Register
          </button>
        </form>
      </div>
    );
  }
}
export default Register;
