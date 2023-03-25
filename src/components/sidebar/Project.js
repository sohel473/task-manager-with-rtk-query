import React from "react";
import { useDispatch } from "react-redux";
import {
  addProject,
  removeProject,
} from "../../features/projects/projectSlice";

export default function Project({ project }) {
  const { projectName, colorClass } = project;

  const dispatch = useDispatch();

  const handleToggleProject = (e) => {
    if (e.target.checked) {
      dispatch(addProject(project));
    } else {
      dispatch(removeProject(project));
    }
  };

  return (
    <>
      <div className="checkbox-container">
        <input
          type="checkbox"
          className={colorClass}
          defaultChecked
          onChange={handleToggleProject}
        />
        <p className="label">{projectName}</p>
      </div>
    </>
  );
}
