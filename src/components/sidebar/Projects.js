import React from "react";
import { useGetProjectsQuery } from "../../features/projects/projectsApi";
import Project from "./Project";

export default function Projects() {
  const { data: projects, error, isLoading } = useGetProjectsQuery();

  let content = null;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>Error: {error}</div>;
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
