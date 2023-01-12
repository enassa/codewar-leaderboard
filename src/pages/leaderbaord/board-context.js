import React from "react";
import { useState } from "react";

const BoardContext = React.createContext();
export const BoardProvider = ({ children }) => {
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

  const [viewAddUserForm, setViewAddUserForm] = useState(false);
  const showAddUserForm = () => {
    setViewAddUserForm(true);
  };
  const hideAddUserForm = () => {
    setViewAddUserForm(false);
  };
  return (
    <BoardContext.Provider
      value={{
        showAddUserForm,
        hideAddUserForm,
        viewAddUserForm,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};
export const useBoardManager = () => React.useContext(BoardContext);
