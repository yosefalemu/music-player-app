import { createSlice } from "@reduxjs/toolkit";

const adminModal = createSlice({
  name: "adminModal",
  initialState: {
    isOpenAdminModal: false,
  },
  reducers: {
    openAdminModal: (state) => {
      state.isOpenAdminModal = true;
      return state;
    },
    closeAdminModal: (state) => {
      state.isOpenAdminModal = false;
      return state;
    },
  },
});
export const { openAdminModal, closeAdminModal } = adminModal.actions;
export default adminModal.reducer;
