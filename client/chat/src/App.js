import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import "./components/homepage";
import Homepage from "./components/homepage";
import Login from "./components/login";
import Register from "./components/register";

const defaultGlobalState = {
  registrationSuccessfull: false,
};
const globalStateContext = React.createContext(defaultGlobalState);
const dispatchStateContext = React.createContext(undefined);

const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    (state, newValue) => ({ ...state, ...newValue }),
    defaultGlobalState
  );
  return (
    <globalStateContext.Provider value={state}>
      <dispatchStateContext.Provider value={dispatch}>
        {children}
      </dispatchStateContext.Provider>
    </globalStateContext.Provider>
  );
};

function App() {
  return (
    <GlobalStateProvider>
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
    </GlobalStateProvider>
  );
}

export default App;
