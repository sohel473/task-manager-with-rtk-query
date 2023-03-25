import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetProjectsQuery } from "../../features/projects/projectsApi";
import { addProject } from "../../features/projects/projectSlice";
import Project from "./Project";

export default function Projects() {
  const { data: projects, error, isLoading } = useGetProjectsQuery();

  const dispatch = useDispatch();

  useEffect(() => {
    if (projects) {
      dispatch(addProject(projects));
    }
  }, [projects, dispatch]);

  let content = null;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (error) {
    console.log("Error object:", error); // Log the error object
    content = <div>Error: {error.error}</div>;
  } else if (projects) {
    // console.log(projects);
    content = projects.map((project) => (
      <Project key={project.id} project={project} />
    ));
  }

  return (
    <>
      <div>
        <h3 className="text-xl font-bold">Projects</h3>
        <div className="mt-3 space-y-4">{content}</div>
      </div>
    </>
  );
}
