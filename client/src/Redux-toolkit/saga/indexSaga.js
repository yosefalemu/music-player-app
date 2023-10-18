import { all } from "redux-saga/effects";
import { watchUsersAsync } from "./userSaga";
import { watchImageUploadAsync } from "./uploadSaga";
import { watchAlbumAsync } from "./albumSaga";
import { watchTrackAsync } from "./trackSaga";
import { watchSingleMusicUploadAsync } from "./singleMusicUploadSaga";
import { watchMultipleMusicUploadAsync } from "./multipleMusicUploadSaga";
import { watchAlbumImageUploadAsync } from "./uploadAlbumImageSaga";

export function* rootSaga() {
  yield all([
    watchUsersAsync(),
    watchImageUploadAsync(),
    watchAlbumAsync(),
    watchTrackAsync(),
    watchSingleMusicUploadAsync(),
    watchMultipleMusicUploadAsync(),
    watchAlbumImageUploadAsync(),
  ]);
}
