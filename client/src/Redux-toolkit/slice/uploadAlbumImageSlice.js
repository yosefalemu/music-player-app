import { createSlice } from "@reduxjs/toolkit";

const uploadAlbumImage = createSlice({
  name: "uploadAlbumImage",
  initialState: {
    albumImage: "",
    loadingAlbumImageUpload: false,
    errorUploadingAlbumImage: false,
  },
  reducers: {
    uploadAlbumImageStart: (state) => {
      state.loadingAlbumImageUpload = true;
      state.errorUploadingAlbumImage = false;
      state.albumImage = "";
      return state;
    },
    uploadAlbumImageSuccess: (state, action) => {
      state.loadingAlbumImageUpload = false;
      state.albumImage = action.payload;
      state.errorUploadingAlbumImage = false;
      return state;
    },
    uploadAlbumImageFail: (state, action) => {
      state.errorUploadingAlbumImage = action.payload;
      state.loadingAlbumImageUpload = false;
      state.albumImage = "";
      return state;
    },
    removeUploadingAlbumImageError: (state) => {
      state.errorUploadingAlbumImage = false;
    },
    setIntialAlbumImageUpload: (state) => {
      state.albumImage = "";
    },
    removeAlbumImageUploadError: (state) => {
      state.errorUploadingAlbumImage = false;
    },
  },
});
export const {
  uploadAlbumImageStart,
  uploadAlbumImageSuccess,
  uploadAlbumImageFail,
  removeUploadingAlbumImageError,
  setIntialAlbumImageUpload,
  removeAlbumImageUploadError,
} = uploadAlbumImage.actions;
export default uploadAlbumImage.reducer;
