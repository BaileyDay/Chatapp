import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import "./components/homepage";
import Homepage from "./components/homepage";
import Login from "./components/login";
import Register from "./components/register";
import { StoreProvider } from "./components/store";

function App() {
  return (
    <StoreProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="*"></Route>
        </Switch>
      </Router>
    </StoreProvider>
  );
}

export default App;
