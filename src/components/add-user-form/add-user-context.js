import React from "react";
import { useState } from "react";

const AddUserContext = React.createContext();
export const AddUserProvider = ({ children }) => {
  const [viewAddUser, setViewAddUser] = useState(true);

  const [addUserState, setAddUserState] = useState({
    state: false,
    message: undefined,
    response: undefined,
    callBack: () => {
      console.log("addUser response");
    },
  });
  const showAddUser = (message, callBack) => {
    setViewAddUser(true);
    setAddUserState({
      state: true,
      message: message,
      callBack,
    });
  };
  const closeAddUser = (response) => {
    addUserState.callBack(response);
    setViewAddUser(false);
    setAddUserState({
      state: false,
      message: undefined,
      response: response,
    });
  };
  return (
    <AddUserContext.Provider
      value={{
        addUserState,
        showAddUser,
        closeAddUser,
        setViewAddUser,
        viewAddUser,
      }}
    >
      {children}
    </AddUserContext.Provider>
  );
};
export const useAddUser = () => React.useContext(AddUserContext);
