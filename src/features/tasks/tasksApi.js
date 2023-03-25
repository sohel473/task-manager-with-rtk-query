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
      // Pessimistic update using onQueryStarted
      async onQueryStarted(newTask, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            tasksApi.util.updateQueryData(
              "getTasks",
              undefined,
              (draft) => {
                draft.push(result.data);
              }
            )
          );
        } catch (error) {
          console.error("Failed to add task:", error);
        }
      },

      // pessimistic update end
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
      // optimistic update
      async onQueryStarted(id, { dispatch, queryFulfilled, getState }) {
        // optimistic update start
        const previousTasks = apiSlice.endpoints.getTasks.select()(
          getState()
        ).data;
        console.log("previousTasks:", previousTasks);

        dispatch(
          apiSlice.util.updateQueryData("getTasks", undefined, (draft) => {
            // console.log("draft:", draft);
            const filteredTasks = draft.filter((task) => task.id !== id);
            return filteredTasks;
          })
        );
        // optimistic update end

        // actual delete start
        try {
          await queryFulfilled;
        } catch (error) {
          // actual delete end
          // if delete fails, revert to previous state
          dispatch(
            tasksApi.util.updateQueryData(
              "getTasks",
              previousTasks,
              () => {
                return previousTasks;
              }
            )
          );
        }
      },
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
