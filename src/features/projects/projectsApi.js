import apiSlice from "../api/apiSlice";

export const projectsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all projects
    getProjects: builder.query({
      // query url
      query: () => "/projects",
    }),
  }),
});

export const { useGetProjectsQuery } = projectsApi;
