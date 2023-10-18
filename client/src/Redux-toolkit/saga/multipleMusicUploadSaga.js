import { uploadMultipleMusicAPI } from "../Apis/uploadMultipleMusic";
import {
  uploadMultipleMusicStart,
  uploadMultipleMusicSuccess,
  uploadMultipleMusicFail,
} from "../slice/uploadMultipleMusicSlice";
import { UPLOAD_MULTIPLE_MUSIC_START } from "../types/uploadMultipleMusicType";
import { call, put, takeEvery } from "redux-saga/effects";

export function* uploadMultipleMusicSaga(action) {
  try {
    yield put(uploadMultipleMusicStart());
    const music = yield call(uploadMultipleMusicAPI, action.musicFiles);
    yield put(uploadMultipleMusicSuccess(music.data));
  } catch (error) {
    yield put(uploadMultipleMusicFail(error));
  }
}

export function* watchMultipleMusicUploadAsync() {
  yield takeEvery(UPLOAD_MULTIPLE_MUSIC_START, uploadMultipleMusicSaga);
}
