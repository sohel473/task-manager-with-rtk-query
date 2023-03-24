import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "pending",
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // action creators
    // action creator for adding a task
    changeStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { changeStatus } = tasksSlice.actions;
