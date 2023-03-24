import apiSlice from "../api/apiSlice";

export const tasksApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
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

export const {
  useGetTasksQuery,
  useGetTaskQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = tasksApi;
