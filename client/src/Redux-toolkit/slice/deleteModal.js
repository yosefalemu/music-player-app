import { createSlice } from "@reduxjs/toolkit";

const deleteModal = createSlice({
  name: "deleteModal",
  initialState: {
    isOpenDeleteModal: false,
  },
  reducers: {
    openDeleteModal: (state) => {
      state.isOpenDeleteModal = true;
      return state;
    },
    closeDeleteModal: (state) => {
      state.isOpenDeleteModal = false;
      return state;
    },
  },
});
export const { openDeleteModal, closeDeleteModal } = deleteModal.actions;
export default deleteModal.reducer;
