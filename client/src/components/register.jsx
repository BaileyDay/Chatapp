import React, { useState } from "react";
import "../css/main.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useStore } from "./store";

function Register() {
  const [username, setUsername] = useState(0);
  const [password, setPassword] = useState(0);
  const [confirmPassword, setConfirmPassword] = useState(0);
  const { state, dispatch } = useStore();

  let history = useHistory();

  const createUser = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      axios
        .post("http://localhost:3002/register", {
          username: username,
          password: password,
        })
        .then(function (response) {
          console.log(response);
          if (response.status === 200) {
            history.push("/login");
            dispatch({ type: "RegistrationSucceeded" });
          }
        })
        .catch(function (error) {
          console.log(error.response);
          if (error.response.status === 409) {
            dispatch({ type: "InvalidUsername" });
          }
        });
    } else {
      dispatch({ type: "PasswordsDontMatch" });
    }
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <h1 className="loginLogo register">Register</h1>
        {state.errorMessage && (
          <h3 className="errorMessage">{state.errorMessage}</h3>
        )}
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
              type="password"
              placeholder="Enter Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </div>
          <button className="loginButton" onClick={createUser}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
export default Register;
