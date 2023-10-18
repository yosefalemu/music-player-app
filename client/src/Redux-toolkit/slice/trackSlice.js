import { createSlice } from "@reduxjs/toolkit";

const track = createSlice({
  name: "track",
  initialState: {
    allTrack: [],
    singleTrack: {},
    newSingleTrack: {},
    currentTrack: {},
    currentImageUrl: "",
    currentTrackName: "",
    currentTrackArtist: "",
    loadingSingleTrack: false,
    errorSingleTrack: false,
    trackForEdit: "",
    trackForDelete: "",
  },
  reducers: {
    allTrackFetchStart: (state, action) => {
      state.allTrack = [];
      state.errorSingleTrack = false;
      state.loadingSingleTrack = true;
      return state;
    },
    allTrackFetchSuccess: (state, action) => {
      state.allTrack = action.payload;
      state.errorSingleTrack = false;
      state.loadingSingleTrack = false;
      return state;
    },
    allTrackFetchFail: (state, action) => {
      state.allTrack = [];
      state.errorSingleTrack = true;
      state.loadingSingleTrack = false;
      return state;
    },
    getSingleTrackStart: (state) => {
      state.loadingSingleTrack = true;
      state.errorSingleTrack = false;
      state.singleTrack = {};
      return state;
    },
    getSingleTrackSuccess: (state, action) => {
      state.loadingSingleTrack = false;
      state.errorSingleTrack = false;
      state.singleTrack = action.payload;
      return state;
    },
    getSingleTrackFail: (state) => {
      state.loadingSingleTrack = false;
      state.errorSingleTrack = true;
      state.singleTrack = {};
      return state;
    },
    createSingleTrackStart: (state) => {
      state.loadingSingleTrack = true;
      state.errorSingleTrack = false;
      state.newSingleTrack = {};
    },
    createSingleTrackSuccess: (state, action) => {
      state.loadingSingleTrack = false;
      state.errorSingleTrack = false;
      state.newSingleTrack = action.payload;
    },
    createSingleTrackFail: (state, action) => {
      state.loadingSingleTrack = false;
      state.errorSingleTrack = true;
      state.newSingleTrack = {};
    },
    updateSingleTrackStart: (state) => {
      state.loadingSingleTrack = true;
      state.errorSingleTrack = false;
      state.singleTrack = {};
    },
    updateSingleTrackSuccess: (state, action) => {
      state.loadingSingleTrack = false;
      state.errorSingleTrack = false;
      state.singleTrack = action.payload;
    },
    updateSingleTrackFail: (state, action) => {
      state.loadingSingleTrack = false;
      state.errorSingleTrack = true;
      state.singleTrack = {};
    },
    deleteSingleTrackStart: (state) => {
      state.loadingSingleTrack = true;
      state.errorSingleTrack = false;
      state.singleTrack = {};
    },
    deleteSingleTrackSuccess: (state, action) => {
      state.loadingSingleTrack = false;
      state.errorSingleTrack = false;
      state.singleTrack = action.payload;
    },
    deleteSingleTrackFail: (state, action) => {
      state.loadingSingleTrack = false;
      state.errorSingleTrack = true;
      state.singleTrack = {};
    },
    removeCreateSingleTrackError: (state) => {
      state.errorSingleTrack = false;
    },
    setTrackForEdit: (state, action) => {
      state.trackForEdit = action.payload;
    },
    setTrackForDelete: (state, action) => {
      state.trackForDelete = action.payload;
    },
    setCurrentImageUrl: (state, action) => {
      state.currentImageUrl = action.payload;
    },
    setCurrentArtistName: (state, action) => {
      state.currentTrackArtist = action.payload;
    },
    setCurrentTrackName: (state, action) => {
      state.currentTrackName = action.payload;
    },
  },
});
export const {
  allTrackFetchStart,
  allTrackFetchSuccess,
  allTrackFetchFail,
  getSingleTrackStart,
  getSingleTrackSuccess,
  getSingleTrackFail,
  createSingleTrackStart,
  createSingleTrackSuccess,
  createSingleTrackFail,
  updateSingleTrackStart,
  updateSingleTrackSuccess,
  updateSingleTrackFail,
  deleteSingleTrackStart,
  deleteSingleTrackSuccess,
  deleteSingleTrackFail,
  removeCreateSingleTrackError,
  setTrackForEdit,
  setTrackForDelete,
  setCurrentImageUrl,
  setCurrentArtistName,
  setCurrentTrackName,
} = track.actions;
export default track.reducer;
