import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    user: {},
    allOtherUsers: [],
    loadingUser: false,
    errorUser: false,
  },
  reducers: {
    registerUserStart: (state) => {
      state.loadingUser = true;
      state.errorUser = false;
      state.user = {};
      return state;
    },
    registerUserSuccess: (state, action) => {
      state.loadingUser = false;
      state.user = action.payload;
      state.errorUser = false;
      return state;
    },
    registerUserFail: (state, action) => {
      state.errorUser = action.payload;
      state.loadingUser = false;
      state.user = {};
      return state;
    },
    loginUserStart: (state) => {
      state.loadingUser = true;
      state.errorUser = false;
      state.user = {};
      return state;
    },
    loginUserSuccess: (state, action) => {
      state.loadingUser = false;
      state.user = action.payload;
      state.errorUser = false;
      return state;
    },
    loginUserFail: (state, action) => {
      state.errorUser = action.payload;
      state.loadingUser = false;
      state.user = {};
      return state;
    },
    verifyEmailStart: (state, action) => {
      state.errorUser = false;
      state.loadingUser = true;
      state.user = {};
      return state;
    },
    verifyEmailSuccess: (state, action) => {
      state.errorUser = false;
      state.loadingUser = false;
      state.user = action.payload;
      return state;
    },
    verifyEmailFail: (state) => {
      state.errorUser = true;
      state.loadingUser = false;
      state.user = {};
      return state;
    },
    getAllOtherUserStart: (state) => {
      state.errorUser = false;
      state.allOtherUsers = [];
      state.loadingUser = true;
    },
    getAllOtherUserSuccess: (state, action) => {
      state.errorUser = false;
      state.allOtherUsers = action.payload;
      state.loadingUser = false;
    },
    getAllOtherUserFail: (state) => {
      state.errorUser = true;
      state.allOtherUsers = [];
      state.loadingUser = false;
    },
    removeUserError: (state) => {
      state.errorUser = false;
    },
  },
});
export const {
  registerUserStart,
  registerUserSuccess,
  registerUserFail,
  loginUserStart,
  loginUserSuccess,
  loginUserFail,
  verifyEmailStart,
  verifyEmailSuccess,
  verifyEmailFail,
  getAllOtherUserStart,
  getAllOtherUserSuccess,
  getAllOtherUserFail,
  removeUserError,
} = user.actions;
export default user.reducer;
