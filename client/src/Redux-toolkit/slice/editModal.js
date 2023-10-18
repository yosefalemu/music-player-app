import { createSlice } from "@reduxjs/toolkit";

const editModal = createSlice({
  name: "editModal",
  initialState: {
    editModalOpen: false,
  },
  reducers: {
    openEditModal: (state) => {
      state.editModalOpen = true;
    },
    closeEditModal: (state) => {
      state.editModalOpen = false;
    },
  },
});
export const { openEditModal, closeEditModal } = editModal.actions;
export default editModal.reducer;
