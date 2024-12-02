import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isCreatePostModalOpen: false,
    isViewPostModalOpen: false,
    openPost: 0,
  },
  reducers: {
    openCreatePostModal(state) {
      state.isCreatePostModalOpen = true;
    },
    closeCreatePostModal(state) {
      state.isCreatePostModalOpen = false;
    },
    openViewPostModal(state, actions) {
      state.isViewPostModalOpen = true;
      state.openPost = actions.payload;
    },
    closeViewPostModal(state) {
      state.isViewPostModalOpen = false;
      state.openPost = 0;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
