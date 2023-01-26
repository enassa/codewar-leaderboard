import { createSlice } from "@reduxjs/toolkit";
import { dummyDataHonor } from "../../constants/app-data";
import { mockMode } from "./../../config/config";
const initialState = {
  boardList: [],
  languages: [],
  userFormState: false,
};
export const boardDataSlice = createSlice({
  name: "boardData_SLICE",
  initialState,
  reducers: {
    addUsersToBoard: (state, { payload }) => {
      console.log(payload);
      state.boardList = payload;
    },
    deleteUserFromBoard: (state, { payload }) => {
      // code goes here
    },
    updateUserOnData: (state, { payload }) => {
      // code goes here
    },
    deleteCommentFromUser: (state, { payload }) => {
      state.boardData.push(payload);
    },
    addCommentToUser: (state, { payload }) => {
      // code goes here
    },
    setLanguages: (state, { payload }) => {
      state.languages = payload;
    },
    changeUserFormState: (state, { payload }) => {
      state.userFormState = payload;
    },
  },
});
export const {
  addUsersToBoard,
  boardList,
  deleteUserFromBoard,
  updateUserOnData,
  addCommentToUser,
  deleteCommentFromUser,
  setLanguages,
  changeUserFormState,
} = boardDataSlice.actions;
export default boardDataSlice.reducer;
