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
  const { payload } = action;
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
    case "loginSucceeded":
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case "getUserData":
      return {
        ...state,
        ...payload,
        user: payload,
        message: "hello",
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
