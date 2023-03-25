import React, { useState, useEffect } from "react";
import {
  useGetTaskQuery,
  useUpdateTaskMutation,
} from "../features/tasks/tasksApi";
import { useNavigate, useParams } from "react-router-dom";
import { useGetTeamMembersQuery } from "../features/team/teamApi";
import { useGetProjectsQuery } from "../features/projects/projectsApi";

export default function EditTask() {
  const { taskId } = useParams();
  const navigate = useNavigate();

  const [updateTask, { isLoading: updateTaskLoading }] =
    useUpdateTaskMutation();

  const {
    data: task,
    isLoading,
    isError,
    error,
  } = useGetTaskQuery(taskId);

  const {
    data: teamMembersData,
    isLoading: isLoadingTeamMembers,
    error: errorTeamMembers,
  } = useGetTeamMembersQuery();

  // console.log(teamMembersData);

  const {
    data: projectsData,
    isLoading: isLoadingProjects,
    error: errorProjects,
  } = useGetProjectsQuery();

  // console.log(projectsData);

  const [formValues, setFormValues] = useState({
    taskName: "",
    teamMember: "",
    projectName: "",
    deadline: "",
  });

  useEffect(() => {
    if (task && teamMembersData && projectsData) {
      const teamMember = task.teamMember
        ? teamMembersData.find(
            (member) => member.id === task.teamMember.id
          )
        : null;
      const projectName = task.project
        ? projectsData.find((project) => project.id === task.project.id)
        : null;

      setFormValues({
        taskName: task.taskName,
        teamMember: teamMember ? teamMember.id : "",
        projectName: projectName ? projectName.id : "",
        deadline: task.deadline,
      });
    }
  }, [task, teamMembersData, projectsData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const teamMember = teamMembersData.find(
      (member) => member.id === parseInt(formValues.teamMember)
    );

    const project = projectsData.find(
      (proj) => proj.id === parseInt(formValues.projectName)
    );

    const updatedTask = {
      taskName: formValues.taskName,
      teamMember: teamMember,
      project: project,
      deadline: formValues.deadline,
      id: task.id, // Include the task ID
      status: task.status,
    };

    // console.log(updatedTask);

    try {
      await updateTask(updatedTask).unwrap();

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading || isLoadingTeamMembers || isLoadingProjects) {
    return <div>Loading...</div>;
  }

  if (isError || errorTeamMembers || errorProjects) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="container relative">
        <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
          <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">
            Edit Task for Your Team
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
                  value={formValues.taskName}
                  onChange={handleChange}
                />
              </div>

              <div className="fieldContainer">
                <label>Assign To</label>
                <select
                  name="teamMember"
                  id="lws-teamMember"
                  required
                  value={formValues.teamMember}
                  onChange={handleChange}
                >
                  <option value="" hidden defaultValue>
                    Select Job
                  </option>
                  {teamMembersData.map((teamMember) => (
                    <option key={teamMember.id} value={teamMember.id}>
                      {teamMember.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="fieldContainer">
                <label htmlFor="lws-projectName">Project Name</label>
                <select
                  id="lws-projectName"
                  name="projectName"
                  required
                  value={formValues.projectName}
                  onChange={handleChange}
                >
                  <option value="" hidden defaultValue>
                    Select Project
                  </option>
                  {projectsData.map((project) => (
                    <option key={project.id} value={project.id}>
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
                  value={formValues.deadline}
                  onChange={handleChange}
                />
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="lws-addnew lws-submit"
                  disabled={updateTaskLoading}
                >
                  Update Task
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
