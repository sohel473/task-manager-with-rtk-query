import React from "react";
import { useSelector } from "react-redux";
import { useGetTasksQuery } from "../../features/tasks/tasksApi";
import Task from "./Task";

export default function Tasks() {
  const { data: tasks, isLoading, error } = useGetTasksQuery();

  const projects = useSelector((state) => state.projects.projects);

  // console.log(projects);

  const selectedProjectIds = projects.map((project) => project.id);

  // console.log(selectedProjectIds);

  const filteredTasks = tasks
    ? tasks.filter((task) => selectedProjectIds.includes(task.project.id))
    : [];

  // console.log("Tasks:", tasks);
  // console.log("Projects:", projects);
  // console.log(filteredTasks);

  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>{error}</div>;
  } else if (filteredTasks.length === 0) {
    content = <div>No tasks found</div>;
  } else {
    // console.log(tasks);
    content = filteredTasks.map((task) => (
      <Task key={task.id} task={task} />
    ));
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
