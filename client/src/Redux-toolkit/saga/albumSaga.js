import {
  getAllAlbumsAPI,
  getSingleAlbum,
  createAlbumAPI,
  editAlbumAPI,
  deleteAlbumAPI,
} from "../Apis/albumApi";
import {
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
} from "../slice/albumSlice";
import {
  FETCH_ALL_ALBUM,
  GET_SINGLE_ALBUM,
  CREATE_ALBUM_START,
  UPDATE_ALBUM_START,
  DELETE_ALBUM_START,
} from "../types/albumType";
import { call, put, takeEvery } from "redux-saga/effects";

export function* fetchAllAlbumSaga(action) {
  try {
    yield put(allAlbumFetchStart());
    const response = yield call(getAllAlbumsAPI);
    yield put(allAlbumFetchSuccess(response.data));
  } catch (error) {
    yield put(allAlbumFetchFail(error.response.data.msg));
  }
}

export function* getSingleAlbumSaga(action) {
  try {
    yield put(getSingleAlbumStart());
    const response = yield call(getSingleAlbum, action.albumForEdit);
    yield put(getSingleAlbumSuccess(response.data));
  } catch (error) {
    yield put(getSingleAlbumFail());
  }
}
export function* createSingleAlbumSaga(action) {
  try {
    yield put(createAlbumStart());
    const album = yield call(createAlbumAPI, action.album);
    yield put(createAlbumSuccess(album.data));
  } catch (error) {
    yield put(createAlbumFail());
  }
}
export function* updateAlbumSaga(action) {
  try {
    yield put(editAlbumStart());
    const album = yield call(editAlbumAPI, action.editAlbum);
    yield put(editAlbumSuccess(album.data));
  } catch (error) {
    yield put(editAlbumFail());
  }
}
export function* deleteAlbumSaga(action) {
  try {
    yield put(deleteAlbumStart());
    const album = yield call(deleteAlbumAPI, action.deleteId);
    yield put(deleteAlbumSuccess(album.data));
  } catch (error) {
    yield put(deleteAlbumFail());
  }
}

export function* watchAlbumAsync() {
  yield takeEvery(FETCH_ALL_ALBUM, fetchAllAlbumSaga);
  yield takeEvery(GET_SINGLE_ALBUM, getSingleAlbumSaga);
  yield takeEvery(CREATE_ALBUM_START, createSingleAlbumSaga);
  yield takeEvery(UPDATE_ALBUM_START, updateAlbumSaga);
  yield takeEvery(DELETE_ALBUM_START, deleteAlbumSaga);
}
