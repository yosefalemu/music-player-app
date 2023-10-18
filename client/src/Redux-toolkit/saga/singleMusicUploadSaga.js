import { uploadSingleMusicAPI } from "../Apis/uploadSingleMusicAPI";
import {
  uploadSingleMusicStart,
  uploadSingleMusicSuccess,
  uploadSingleMusicFail,
} from "../slice/uploadSingleMusicSlice";
import { UPLOAD_SINGLE_MUSIC_START } from "../types/uploadSingleMusic";
import { call, put, takeEvery } from "redux-saga/effects";

export function* uploadSingleMusicSaga(action) {
  try {
    yield put(uploadSingleMusicStart());
    const music = yield call(uploadSingleMusicAPI, action.sendMusic);
    yield put(uploadSingleMusicSuccess(music.data));
  } catch (error) {
    yield put(uploadSingleMusicFail(error.response.data));
  }
}

export function* watchSingleMusicUploadAsync() {
  yield takeEvery(UPLOAD_SINGLE_MUSIC_START, uploadSingleMusicSaga);
}
