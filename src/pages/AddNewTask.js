import React, { useState } from "react";
import { useGetProjectsQuery } from "../features/projects/projectsApi";
import { useAddTaskMutation } from "../features/tasks/tasksApi";
import { useGetTeamMembersQuery } from "../features/team/teamApi";

export default function AddNewTask() {
  const [taskName, setTaskName] = useState("");
  const [teamMember, setTeamMember] = useState("");
  const [projectName, setProjectName] = useState("");
  const [deadline, setDeadline] = useState("");

  const [addTask, { isLoading }] = useAddTaskMutation();

  const {
    data: teamMembersData,
    isLoading: isLoadingTeamMembers,
    error: errorTeamMembers,
  } = useGetTeamMembersQuery();

  const {
    data: projectsData,
    isLoading: isLoadingProjects,
    error: errorProjects,
  } = useGetProjectsQuery();

  if (isLoadingTeamMembers || isLoadingProjects) {
    return <div>Loading...</div>;
  }

  if (errorTeamMembers || errorProjects) {
    return <div>Error loading data</div>;
  }

  const teamMembers = teamMembersData;
  const projects = projectsData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedTeamMember = teamMembers.find(
      (member) => member.name === teamMember
    );
    const selectedProject = projects.find(
      (project) => project.projectName === projectName
    );

    // console.log(selectedTeamMember);
    // console.log(selectedProject);

    const newTask = {
      taskName,
      teamMember: selectedTeamMember,
      project: selectedProject,
      deadline,
    };

    // console.log(newTask);

    try {
      await addTask(newTask).unwrap();
      // Clear the form fields after successful submission
      setTaskName("");
      setTeamMember("");
      setProjectName("");
      setDeadline("");
    } catch (error) {
      console.error("Failed to add task:", error);
    }
  };

  return (
    <>
      <div className="container relative">
        <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
          <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">
            Create Task for Your Team
          </h1>

          <div className="justify-center mb-10 space-y-2 md:flex md:space-y-0">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="fieldContainer">
                <label htmlFor="lws-taskName">Task Name</label>
                <input
                  type="text"
                  name="taskName"
                  id="lws-taskName"
                  required
                  placeholder="Implement RTK Query"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                />
              </div>

              <div className="fieldContainer">
                <label>Assign To</label>
                <select
                  name="teamMember"
                  id="lws-teamMember"
                  required
                  value={teamMember}
                  onChange={(e) => setTeamMember(e.target.value)}
                >
                  <option value="" hidden defaultValue>
                    Select Job
                  </option>
                  {teamMembers.map((member) => (
                    <option key={member.id} value={member.name}>
                      {member.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="fieldContainer">
                <label htmlFor="lws-projectName">Project Name</label>
                <select
                  id="lws-projectName"
                  name="projectName"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  required
                >
                  <option value="" hidden defaultValue>
                    Select Project
                  </option>
                  {projects.map((project) => (
                    <option key={project.id} value={project.projectName}>
                      {project.projectName}
                    </option>
                  ))}
                </select>
              </div>

              <div className="fieldContainer">
                <label htmlFor="lws-deadline">Deadline</label>
                <input
                  type="date"
                  name="deadline"
                  id="lws-deadline"
                  required
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                />
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="lws-addnew lws-submit"
                  disabled={isLoading}
                >
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
