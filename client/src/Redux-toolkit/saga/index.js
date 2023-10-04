import { all } from "redux-saga/effects";
import { watchUsersAsync } from "./auth";

export function* rootSaga() {
  yield all([watchUsersAsync()]);
}
