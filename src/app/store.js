import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../features/api/apiSlice";
import tasksSlice from "../features/tasks/tasksSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    tasks: tasksSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
