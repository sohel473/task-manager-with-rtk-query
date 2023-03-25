import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../features/api/apiSlice";
import projectSlice from "../features/projects/projectSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    projects: projectSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
