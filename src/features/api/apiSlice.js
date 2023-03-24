import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  // name of the api
  reducerPath: "api",
  // base url for the api
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
  // endpoints for the api
  endpoints: (builder) => ({
    // get all projects
    getProjects: builder.query({
      // query url
      query: () => "/projects",
    }),
    // get team members
    getTeamMembers: builder.query({
      // query url
      query: () => "/team",
    }),
    // get all tasks
    getTasks: builder.query({
      // query url
      query: () => "/tasks",
    }),
    // get a single task
    getTask: builder.query({
      // query url
      query: (id) => `/tasks/${id}`,
    }),
    // add a new task
    addTask: builder.mutation({
      // query url
      query: (newTask) => ({
        url: "/tasks",
        method: "POST",
        body: newTask,
      }),
    }),
    // update a task
    updateTask: builder.mutation({
      // query url
      query: (updatedTask) => ({
        url: `/tasks/${updatedTask.id}`,
        method: "PUT",
        body: updatedTask,
      }),
    }),
    // delete a task
    deleteTask: builder.mutation({
      // query url
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// export the api
export const {
  useGetProjectsQuery,
  useGetTeamMembersQuery,
  useGetTasksQuery,
  useGetTaskQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = apiSlice;

export default apiSlice;
