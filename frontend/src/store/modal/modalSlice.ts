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
      state.openPost = actions.payload;
      state.isViewPostModalOpen = true;
    },
    closeViewPostModal(state) {
      state.openPost = 0;
      state.isViewPostModalOpen = false;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
