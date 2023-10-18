import {
  getSingleTrackAPI,
  getAllTracksAPI,
  createTrackAPI,
  updateTrackAPI,
  deleteTrackAPI,
} from "../Apis/tracksApi";
import {
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
} from "../slice/trackSlice";
import {
  GET_SINGLE_TRACK,
  FETCH_ALL_TRACKS,
  CREATE_SINGLE_TRACK,
  UPDATE_SINGLE_TRACK,
  DELETE_SINGLE_TRACK,
} from "../types/trackType";
import { call, put, takeEvery } from "redux-saga/effects";

export function* fetchAllTrackSaga(action) {
  try {
    yield put(allTrackFetchStart());
    const response = yield call(getAllTracksAPI);
    yield put(allTrackFetchSuccess(response.data));
  } catch (error) {
    yield put(allTrackFetchFail(error));
  }
}

export function* getSingleTrackSaga(action) {
  try {
    yield put(getSingleTrackStart());
    const response = yield call(getSingleTrackAPI, action.trackForEdit);
    yield put(getSingleTrackSuccess(response.data));
  } catch (error) {
    yield put(getSingleTrackFail());
  }
}

export function* createSingleTrackSage(action) {
  try {
    yield put(createSingleTrackStart());
    const track = yield call(createTrackAPI, action.track);
    yield put(createSingleTrackSuccess(track.data));
  } catch (error) {
    yield put(createSingleTrackFail(error.response.data.msg));
  }
}

export function* updateSingleTrackSaga(action) {
  try {
    yield put(updateSingleTrackStart());
    const updatedTrack = yield call(updateTrackAPI, action.updateTrack);
    yield put(updateSingleTrackSuccess(updatedTrack.data));
  } catch (error) {
    yield put(updateSingleTrackFail(error.response.data.error));
  }
}

export function* deleteSingleTrackSaga(action) {
  try {
    yield put(deleteSingleTrackStart());
    const deletedTrack = yield call(deleteTrackAPI, action.deleteId);
    yield put(deleteSingleTrackSuccess(deletedTrack.data));
  } catch (error) {
    yield put(deleteSingleTrackFail(error.response.data.error));
  }
}

export function* watchTrackAsync() {
  yield takeEvery(GET_SINGLE_TRACK, getSingleTrackSaga);
  yield takeEvery(FETCH_ALL_TRACKS, fetchAllTrackSaga);
  yield takeEvery(CREATE_SINGLE_TRACK, createSingleTrackSage);
  yield takeEvery(UPDATE_SINGLE_TRACK, updateSingleTrackSaga);
  yield takeEvery(DELETE_SINGLE_TRACK, deleteSingleTrackSaga);
}
