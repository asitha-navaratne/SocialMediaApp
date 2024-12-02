import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { isCreatePostModalOpen: false, isViewPostModalOpen: false },
  reducers: {
    openCreatePostModal(state) {
      state.isCreatePostModalOpen = true;
    },
    closeCreatePostModal(state) {
      state.isCreatePostModalOpen = false;
    },
    openViewPostModal(state) {
      state.isViewPostModalOpen = true;
    },
    closeViewPostModal(state) {
      state.isViewPostModalOpen = false;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
