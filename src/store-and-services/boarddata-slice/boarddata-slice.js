import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  boardList: [],
  languages: [],
};
export const boardDataSlice = createSlice({
  name: "boardData_SLICE",
  initialState,
  reducers: {
    addUsersToBoard: (state, { payload }) => {
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
} = boardDataSlice.actions;
export default boardDataSlice.reducer;
