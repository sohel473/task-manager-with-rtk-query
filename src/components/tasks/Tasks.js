import React from "react";
import { useGetTasksQuery } from "../../features/tasks/tasksApi";
import Task from "./Task";

export default function Tasks() {
  const { data: tasks, isLoading, error } = useGetTasksQuery();

  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>{error}</div>;
  } else if (tasks.length === 0) {
    content = <div>No tasks found</div>;
  } else {
    // console.log(tasks);
    content = tasks.map((task) => <Task key={task.id} task={task} />);
  }

  return (
    <>
      <div className="lws-task-list">
        <h3 className="text-xl font-bold">Tasks</h3>
        {/* <!-- task --> */}
        {content}
      </div>
    </>
  );
}
