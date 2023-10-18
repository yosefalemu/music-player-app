import { createSlice } from "@reduxjs/toolkit";

const playingMusic = createSlice({
  name: "playingMusic",
  initialState: {
    currentPlayingMusic: "",
    currentTime: 0,
  },
  reducers: {
    setPlayingMusic: (state, action) => {
      console.log(action);
      state.currentPlayingMusic = action.payload.currentPlayingMusic;
      state.currentTime = action.payload.currentTime;
    },
  },
});
export const { setPlayingMusic } = playingMusic.actions;
export default playingMusic.reducer;
