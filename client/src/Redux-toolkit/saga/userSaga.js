import {
  createUserAPI,
  loginUserAPI,
  verifyEmailAPI,
  getAllOtherUsersAPI,
} from "../Apis/userApi";
import {
  registerUserStart,
  registerUserSuccess,
  registerUserFail,
  loginUserStart,
  loginUserSuccess,
  loginUserFail,
  verifyEmailStart,
  verifyEmailSuccess,
  getAllOtherUserStart,
  getAllOtherUserSuccess,
  getAllOtherUserFail,
  verifyEmailFail,
} from "../slice/userSlice";
import {
  LOGIN_USER_START,
  CREATE_USER_START,
  VERIFY_EMAIL,
  GET_ALL_OTHER_USERS,
} from "../types/userType";
import { call, put, takeEvery } from "redux-saga/effects";

export function* createUserSaga(action) {
  try {
    yield put(registerUserStart());
    const user = yield call(createUserAPI, action.user);
    yield put(registerUserSuccess(user.data));
  } catch (error) {
    yield put(registerUserFail(error.response.data.msg));
  }
}
export function* loginUserSaga(action) {
  try {
    yield put(loginUserStart());
    const user = yield call(loginUserAPI, action.user);
    yield put(loginUserSuccess(user.data));
  } catch (error) {
    yield put(loginUserFail(error.response.data.msg));
  }
}
export function* verifyEmailSaga(action) {
  try {
    yield put(verifyEmailStart());
    const params = {
      id: action.id,
      token: action.token,
    };
    const response = yield call(verifyEmailAPI, params);
    yield put(verifyEmailSuccess(response.data));
  } catch (error) {
    yield put(verifyEmailFail(error.response.data.msg));
  }
}
export function* getAllOtherUsersSaga(action) {
  try {
    yield put(getAllOtherUserStart());
    const currentUserId = { currentUserId: action.currentUserId };
    const otherUsers = yield call(getAllOtherUsersAPI, currentUserId);
    yield put(getAllOtherUserSuccess(otherUsers.data));
  } catch (error) {
    yield put(getAllOtherUserFail());
  }
}

export function* watchUsersAsync() {
  yield takeEvery(CREATE_USER_START, createUserSaga);
  yield takeEvery(LOGIN_USER_START, loginUserSaga);
  yield takeEvery(VERIFY_EMAIL, verifyEmailSaga);
  yield takeEvery(GET_ALL_OTHER_USERS, getAllOtherUsersSaga);
}
