import React from "react";

import Task from "./Task";

export default function Tasks() {
  return (
    <>
      <div className="lws-task-list">
        <h3 className="text-xl font-bold">Tasks</h3>
        {/* <!-- task --> */}
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </>
  );
}
