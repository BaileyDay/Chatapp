import React, { useState } from "react";
import "../css/main.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState(0);
  const [password, setPassword] = useState(0);
  let history = useHistory();

  function createUser(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3002/register", {
        username: username,
        password: password,
      })
      .catch(function (error) {
        console.log(error);
      });
    history.push("/login");
  }

  return (
    <div className="container">
      <h1 className="loginLogo register">Register</h1>
      <form>
        <div>
          <input
            type="text"
            placeholder="Enter Username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <input type="text" placeholder="Confirm Password" />
        </div>
        <button className="loginButton" onClick={createUser}>
          Register
        </button>
      </form>
    </div>
  );
}
export default Register;
