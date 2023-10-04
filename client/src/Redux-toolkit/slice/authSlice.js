import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
  error: null,
};
const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserSlice: (state, action) => {
      state.user = action.payload;
      delete state.user.password;
      state.error = null;
      // state.error = {};
      // state.user.user = null;
      // state.user.error = null;
      // state.user.response = {};
    },
    logInError: (state, action) => {
      state.user = null;
      state.error = action.payload;
    },
    registerError: (state) => {
      state = null;
    },
  },
});

export const { setUserSlice, logInError, registerError } = authSlice.actions;
export default authSlice.reducer;
