import { createSlice } from "@reduxjs/toolkit";

const deleteAlbumModal = createSlice({
  name: "deleteAlbumModal",
  initialState: {
    isOpenDeleteAlbumModal: false,
  },
  reducers: {
    openDeleteAlbumModal: (state) => {
      state.isOpenDeleteAlbumModal = true;
      return state;
    },
    closeDeleteAlbumModal: (state) => {
      state.isOpenDeleteAlbumModal = false;
      return state;
    },
  },
});
export const { openDeleteAlbumModal, closeDeleteAlbumModal } =
  deleteAlbumModal.actions;
export default deleteAlbumModal.reducer;
