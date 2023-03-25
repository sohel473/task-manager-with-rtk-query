import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../features/api/apiSlice";
import projectSlice from "../features/projects/projectSlice";
import searchSlice from "../features/search/searchSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    projects: projectSlice,
    search: searchSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
