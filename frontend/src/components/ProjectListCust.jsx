import { useEffect, useState } from "react";
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
      <h1 className="mb-5">Projects List</h1>
      <div>
        {projects.length === 0 ? (
          <p>No projects available.</p>
        ) : (
          projects.project.map((projects) => (
            <div key={projects._id}>
              <h2>Project ID: {projects.projectId}</h2>
              <p>Project Address: {projects.projectAddress}</p>
              <p>Total Phases: {projects.projectPhaseCount}</p>
              <p>Down Payment: ${projects.projectDownPayment}</p>
              <p>Payment Received: ${projects.projectPaymentReceived}</p>
              <p>Total Cost: ${projects.projectTotalCost}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}