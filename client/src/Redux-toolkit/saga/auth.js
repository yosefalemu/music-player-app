import { registerUserAPI, loginUserAPI } from "../../Apis/index";
import { setUserSlice, logInError, registerError } from "../slice/authSlice";
import { REGISTER_USER, LOGIN_USER } from "../types/auth";
import { put, takeEvery, call } from "redux-saga/effects";

export function* registerUserSaga(action) {
  try {
    const registeruser = yield registerUserAPI(action.payload);
    yield put(setUserSlice(registeruser));
  } catch (error) {
    yield put(registerError(error));
  }
}

export function* loginUserSaga(action) {
  const { response, error } = yield call(loginUserAPI, action.payload);
  if (response) {
    const { response } = yield call(loginUserAPI, action.payload);
    yield put(setUserSlice(response));
  } else {
    yield put(logInError(error.response.data));
  }
}

export function* watchUsersAsync() {
  yield takeEvery(LOGIN_USER, loginUserSaga);
  yield takeEvery(REGISTER_USER, registerUserSaga);
}
