import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import "./components/homepage";
import Homepage from "./components/homepage";
import Login from "./components/login";
import Register from "./components/register";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register"></Route>
        <Route path="*"></Route>
      </Switch>
    </Router>
  );
}

export default App;
