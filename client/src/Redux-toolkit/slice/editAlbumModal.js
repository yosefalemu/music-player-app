import { createSlice } from "@reduxjs/toolkit";

const editAlbumModal = createSlice({
  name: "editAlbumModal",
  initialState: {
    editAlbumModalOpen: false,
  },
  reducers: {
    openEditAlbumModal: (state) => {
      state.editAlbumModalOpen = true;
    },
    closeEditAlbumModal: (state) => {
      state.editAlbumModalOpen = false;
    },
  },
});
export const { openEditAlbumModal, closeEditAlbumModal } =
  editAlbumModal.actions;
export default editAlbumModal.reducer;
