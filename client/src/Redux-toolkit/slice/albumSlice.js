import { createSlice } from "@reduxjs/toolkit";

const album = createSlice({
  name: "album",
  initialState: {
    albums: [],
    album: {},
    loadingAlbum: false,
    errorAlbum: false,
    albumForEdit: "",
    albumForDelete: "",
  },
  reducers: {
    allAlbumFetchStart: (state, action) => {
      state.albums = [];
      state.errorAlbum = false;
      state.loadingAlbum = true;
      return state;
    },
    allAlbumFetchSuccess: (state, action) => {
      state.albums = action.payload;
      state.errorAlbum = false;
      state.loadingAlbum = false;
      return state;
    },
    allAlbumFetchFail: (state, action) => {
      state.albums = [];
      state.errorAlbum = true;
      state.loadingAlbum = false;
      return state;
    },
    getSingleAlbumStart: (state) => {
      state.loadingAlbum = true;
      state.errorAlbum = false;
      state.album = {};
      return state;
    },
    getSingleAlbumSuccess: (state, action) => {
      state.loadingAlbum = false;
      state.errorAlbum = false;
      state.album = action.payload;
      return state;
    },
    getSingleAlbumFail: (state) => {
      state.loadingAlbum = false;
      state.errorAlbum = true;
      state.album = {};
      return state;
    },
    createAlbumStart: (state) => {
      state.loadingAlbum = true;
      state.album = {};
      state.errorAlbum = false;
    },
    createAlbumSuccess: (state, action) => {
      state.loadingAlbum = false;
      state.album = action.payload;
      state.errorAlbum = false;
    },
    createAlbumFail: (state) => {
      state.loadingAlbum = false;
      state.album = {};
      state.errorAlbum = true;
    },
    editAlbumStart: (state) => {
      state.loadingAlbum = true;
      state.errorAlbum = false;
      state.album = {};
    },
    editAlbumSuccess: (state, action) => {
      state.loadingAlbum = false;
      state.errorAlbum = false;
      state.album = action.payload;
    },
    editAlbumFail: (state) => {
      state.loadingAlbum = false;
      state.errorAlbum = true;
      state.album = {};
    },
    deleteAlbumStart: (state) => {
      state.loadingAlbum = true;
      state.errorAlbum = false;
      state.album = {};
    },
    deleteAlbumSuccess: (state, action) => {
      state.loadingAlbum = false;
      state.errorAlbum = false;
      state.album = action.payload;
    },
    deleteAlbumFail: (state) => {
      state.loadingAlbum = false;
      state.album = {};
      state.errorAlbum = true;
    },
    setAlbumForEdit: (state, action) => {
      state.albumForEdit = action.payload;
    },
    setAlbumForDelete: (state, action) => {
      state.albumForDelete = action.payload;
    },
    removeAlbumUpdateError: (state) => {
      state.errorAlbum = false;
    },
  },
});
export const {
  allAlbumFetchStart,
  allAlbumFetchSuccess,
  allAlbumFetchFail,
  getSingleAlbumStart,
  getSingleAlbumSuccess,
  getSingleAlbumFail,
  createAlbumStart,
  createAlbumSuccess,
  createAlbumFail,
  editAlbumStart,
  editAlbumSuccess,
  editAlbumFail,
  deleteAlbumStart,
  deleteAlbumSuccess,
  deleteAlbumFail,
  setAlbumForEdit,
  setAlbumForDelete,
  removeAlbumUpdateError,
} = album.actions;
export default album.reducer;
