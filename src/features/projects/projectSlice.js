import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    // action creators
    // action creator for adding a project
    addProject(state, action) {
      if (Array.isArray(action.payload)) {
        state.projects.push(...action.payload);
      } else {
        state.projects.push(action.payload);
      }
    },
    removeProject(state, action) {
      state.projects = state.projects.filter(
        (project) => project.id !== action.payload.id
      );
    },
  },
});

export const { addProject, removeProject } = projectSlice.actions;
export default projectSlice.reducer;
