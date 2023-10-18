import { uploadImageAPI } from "../Apis/uploadApi";
import {
  uploadImageStart,
  uploadImageSuccess,
  uploadImageFail,
} from "../slice/uploadSlice";
import { UPLOAD_IMAGE_START } from "../types/uploadType";
import { call, put, takeEvery } from "redux-saga/effects";

export function* imageUploadSaga(action) {
  try {
    yield put(uploadImageStart());
    const image = yield call(uploadImageAPI, action.sendImage);
    yield put(uploadImageSuccess(image.data));
  } catch (error) {
    yield put(uploadImageFail(error.response.data));
  }
}

export function* watchImageUploadAsync() {
  yield takeEvery(UPLOAD_IMAGE_START, imageUploadSaga);
}
