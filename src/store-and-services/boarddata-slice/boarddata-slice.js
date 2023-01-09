import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  boardList: [],
};
export const boardDataSlice = createSlice({
  name: "boardData_SLICE",
  initialState,
  reducers: {
    addUserToBoard: (state, { payload }) => {
      state.boardList.push(payload);
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
  },
});
export const {
  addUserToBoard,
  deleteUserFromBoard,
  updateUserOnData,
  addCommentToUser,
  deleteCommentFromUser,
} = boardDataSlice.actions;
export default boardDataSlice.reducer;
