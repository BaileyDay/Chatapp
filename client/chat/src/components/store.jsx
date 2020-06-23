import React, { createContext, useContext, useReducer } from "react";

const StoreContext = createContext();
const initialState = { registered: false, message: "" };

const reducer = (state, action) => {
  switch (action.type) {
    case "RegistrationSucceeded":
      return {
        registered: true,
        message: "You have successfully registered! Please login.",
      };
    case "RegistrationCleared":
      return {
        count: state.count - 1,
        message: action.message,
      };
    case "reset":
      return {
        count: 0,
        message: action.message,
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
