import { createSlice } from "@reduxjs/toolkit";

const uploadMultipleMusic = createSlice({
  name: "uploadMultipleMusic",
  initialState: {
    multipleMusic: [],
    loadingMultipleTrackUpload: false,
    errorUploadingMultipleTrack: false,
  },
  reducers: {
    uploadMultipleMusicStart: (state) => {
      state.loadingMultipleTrackUpload = true;
      state.errorUploadingMultipleTrack = false;
      state.multipleMusic = [];
      return state;
    },
    uploadMultipleMusicSuccess: (state, action) => {
      state.loadingMultipleTrackUpload = false;
      state.multipleMusic = action.payload;
      state.errorUploadingMultipleTrack = false;
      return state;
    },
    uploadMultipleMusicFail: (state, action) => {
      state.errorUploadingMultipleTrack = action.payload;
      state.loadingMultipleTrackUpload = false;
      state.multipleMusic = [];
      return state;
    },
    removeUploadingMultipleMusicError: (state) => {
      state.errorUploadingMultipleTrack = false;
    },
  },
});
export const {
  uploadMultipleMusicStart,
  uploadMultipleMusicSuccess,
  uploadMultipleMusicFail,
  removeUploadingMultipleMusicError,
} = uploadMultipleMusic.actions;
export default uploadMultipleMusic.reducer;
