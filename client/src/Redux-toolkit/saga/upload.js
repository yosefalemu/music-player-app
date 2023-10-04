import { uploadImageApI } from "../../Apis/index";
import { setUploadSlice } from "../slice/uploadSlice";
import { UPLOAD_IMAGE } from "../types/upload";
import { put, takeEvery } from "redux-saga/effects";

export function* uploadImageSaga(action) {
  console.log(action.payload);

  console.log(yield uploadImageApI(action.payload));
}

export function* watchUploadAsync() {
  yield takeEvery(UPLOAD_IMAGE, uploadImageSaga);
}
