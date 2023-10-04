import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
  error: null,
  isSuccesfullLogIn: false,
};
const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserSlice: (state, action) => {
      console.log("authsliceset");
      state.user = action.payload;
      delete state.user.password;
      state.error = null;
    },
    succesfullLogIn: (state) => {
      console.log("authslice login");
      state.isSuccesfullLogIn = true;
    },
    logInError: (state, action) => {
      console.log("authSlice err");
      state.user = null;
      state.error = action.payload;
      state.isSuccesfullLogIn = false;
    },
    registerError: (state) => {
      state = null;
    },
  },
});

export const { setUserSlice, logInError, registerError, succesfullLogIn } =
  authSlice.actions;
export default authSlice.reducer;
