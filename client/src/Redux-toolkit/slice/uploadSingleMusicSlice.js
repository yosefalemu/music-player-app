import { createSlice } from "@reduxjs/toolkit";

const uploadSingleMusic = createSlice({
  name: "uploadSingleMusic",
  initialState: {
    singleMusic: "",
    loadingSingleTrackUpload: false,
    errorUploadingSingleTrack: false,
  },
  reducers: {
    uploadSingleMusicStart: (state) => {
      state.loadingSingleTrackUpload = true;
      state.errorUploadingSingleTrack = false;
      state.singleMusic = "";
      return state;
    },
    uploadSingleMusicSuccess: (state, action) => {
      state.loadingSingleTrackUpload = false;
      state.singleMusic = action.payload;
      state.errorUploadingSingleTrack = false;
      return state;
    },
    uploadSingleMusicFail: (state, action) => {
      state.errorUploadingSingleTrack = action.payload;
      state.loadingSingleTrackUpload = false;
      state.singleMusic = "";
      return state;
    },
    removeUploadingSingleMusicError: (state) => {
      state.errorUploadingSingleTrack = false;
    },
    setIntialMusicUpload: (state) => {
      state.singleMusic = "";
    },
  },
});
export const {
  uploadSingleMusicStart,
  uploadSingleMusicSuccess,
  uploadSingleMusicFail,
  removeUploadingSingleMusicError,
  setIntialMusicUpload,
} = uploadSingleMusic.actions;
export default uploadSingleMusic.reducer;
