import { createSlice } from "@reduxjs/toolkit";

const upload = createSlice({
  name: "upload",
  initialState: {
    image: "",
    loadingUploadingImage: false,
    errorImage: false,
  },
  reducers: {
    uploadImageStart: (state) => {
      state.loadingUploadingImage = true;
      state.errorImage = false;
      state.image = "";
      return state;
    },
    uploadImageSuccess: (state, action) => {
      state.loadingUploadingImage = false;
      state.image = action.payload;
      state.errorImage = false;
      return state;
    },
    uploadImageFail: (state, action) => {
      state.errorImage = action.payload;
      state.loadingUploadingImage = false;
      state.image = "";
      return state;
    },
    removeUploadError: (state) => {
      state.errorImage = false;
    },
    setUploadIntially: (state) => {
      state.image = "";
    },
  },
});
export const {
  uploadImageStart,
  uploadImageSuccess,
  uploadImageFail,
  removeUploadError,
  setUploadIntially,
} = upload.actions;
export default upload.reducer;
