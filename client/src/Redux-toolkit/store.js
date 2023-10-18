import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from "./slice/userSlice";
import uploadReducer from "./slice/uploadSlice";
import albumReducer from "./slice/albumSlice";
import trackReducer from "./slice/trackSlice";
import modalReducer from "./slice/modalSlice";
import adminModalReducer from "./slice/adminModal";
import singleTrackUploadReducer from "./slice/uploadSingleMusicSlice";
import editModalReducer from "./slice/editModal";
import deleteModalReducer from "./slice/deleteModal";
import multipleTrackUploadReducer from "./slice/uploadMultipleMusicSlice";
import uploadAlbumImageReducer from "./slice/uploadAlbumImageSlice";
import albumEditModalReducer from "./slice/editAlbumModal";
import deleteAlbumModalReducer from "./slice/deleteAlbumModal";
import playingMusicReducer from "./slice/playingSlice";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./saga/indexSaga";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  upload: uploadReducer,
  album: albumReducer,
  track: trackReducer,
  modal: modalReducer,
  adminModal: adminModalReducer,
  uploadSingleMusic: singleTrackUploadReducer,
  uploadMultipleMusic: multipleTrackUploadReducer,
  uploadAlbumImage: uploadAlbumImageReducer,
  editAlbumModal: albumEditModalReducer,
  editModal: editModalReducer,
  deleteModal: deleteModalReducer,
  deleteAlbumModal: deleteAlbumModalReducer,
  playingMusic: playingMusicReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export let persistor = persistStore(store);

export default store;
