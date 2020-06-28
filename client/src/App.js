import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import "./components/homepage";
import Homepage from "./components/homepage";
import Login from "./components/login";
import Register from "./components/register";
import { StoreProvider } from "./components/store";
import Chat from "../src/components/chat";
import { useStore } from "./components/store";

function PrivateRoute({ children, ...rest }) {
  const { state } = useStore();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        state.token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

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
          <PrivateRoute path="/chat">
            <Chat />
          </PrivateRoute>
          <Route path="*"></Route>
        </Switch>
      </Router>
    </StoreProvider>
  );
}

export default App;
