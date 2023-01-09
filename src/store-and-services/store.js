import { configureStore } from "@reduxjs/toolkit";
import boardDataReducer from "./boarddata-slice/boarddata-slice";
import authReducer from "./auth-slice/auth-slice";

export const store = configureStore({
  reducer: {
    boardDataSlice: boardDataReducer,
    authSlice: authReducer,
  },
});
