import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  // name of the api
  reducerPath: "api",
  // base url for the api
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
  // endpoints for the api
  endpoints: (builder) => ({}),
});

export default apiSlice;
