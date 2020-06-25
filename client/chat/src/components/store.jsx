import React, { createContext, useContext, useReducer } from "react";

const StoreContext = createContext();
const initialState = {
  registered: false,
  message: "",
  errorMessage: "",
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "RegistrationSucceeded":
      return {
        message: "You have successfully registered! Please login.",
      };
    case "PasswordsDontMatch":
      return {
        errorMessage: "Passwords did not match, please try again.",
      };
    case "InvalidUsername":
      return {
        errorMessage: "Username is already taken, please try again.",
      };
    case "LoginSucceeded":
      return {
        errorMessage: "Username is already taken, please try again.",
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
