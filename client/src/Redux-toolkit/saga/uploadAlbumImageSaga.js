import { call, put, takeEvery } from "redux-saga/effects";
import { uploadAlbumImageAPI } from "../Apis/uploadAlbumImageApi";
import { UPLOAD_ALBUM_IMAGE_START } from "../types/uploadAlbumImageType";
import {
  uploadAlbumImageStart,
  uploadAlbumImageSuccess,
  uploadAlbumImageFail,
} from "../slice/uploadAlbumImageSlice";

export function* uploadAlbumImageSaga(action) {
  try {
    yield put(uploadAlbumImageStart());
    const image = yield call(uploadAlbumImageAPI, action.sendImage);
    yield put(uploadAlbumImageSuccess(image.data));
  } catch (error) {
    yield put(uploadAlbumImageFail(error.response.data));
  }
}

export function* watchAlbumImageUploadAsync() {
  yield takeEvery(UPLOAD_ALBUM_IMAGE_START, uploadAlbumImageSaga);
}
