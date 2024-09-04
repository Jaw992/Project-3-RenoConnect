import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projectDetailsLoad } from "../services/apiProject";

export default function ProjectsList() {
  const [projects, setProjects] = useState({ project: [] }); //reminder: api is an object with drinks array in it

  useEffect(() => {
    const loadProjects = async () => {
      const dataProjects = await projectDetailsLoad();
      setProjects(dataProjects);
    };
    loadProjects();
  }, []);

  return (
    <>
      <h1>Projects List</h1>
      <div>
        {projects.length === 0 ? (
          <p>No projects available.</p>
        ) : (
          projects.project.map((projects) => (
            <div key={projects._id}>
              <h2>{projects.projectAddress}</h2>
              <p>Project ID: {projects.projectId}</p>
              <p>Total Phases: {projects.projectPhaseCount}</p>
              <p>Down Payment: ${projects.projectDownPayment}</p>
              <p>Payment Received: ${projects.projectPaymentReceived}</p>
              <p>Total Cost: ${projects.projectTotalCost}</p>
              <Link to={`/projects/${projects.projectId}`}>
                <button>Edit</button>
              </Link>
            </div>
          ))
        )}
      </div>
    </>
  );
}
