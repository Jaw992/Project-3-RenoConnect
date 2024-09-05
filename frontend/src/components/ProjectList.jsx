import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projectDetailsLoad } from "../services/apiProject";
import { format, parseISO } from "date-fns";

export default function ProjectsList({ projectId, setProjectId, token }) {
  const [projects, setProjects] = useState({ project: [] }); //reminder: api is an object with drinks array in it

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const dataProjects = await projectDetailsLoad(token);
        setProjects(dataProjects);
        setProjectId(dataProjects.project.map((p) => p._id));
      } catch (error) {
        console.error("Error loading projects: ", error);
      }
    };
    loadProjects();
  }, [setProjectId, token]);

  return (
    <>
      {/* <h1 className="mb-5">Projects List</h1> */}
      <div>
        {projects.length === 0 ? (
          <p>No projects available.</p>
        ) : (
          projects.project.map((projects) => (
            <div key={projects._id}>
              <h2>Project ID: {projects.projectId}</h2>
              <p>Project Address: {projects.projectAddress}</p>
              <p>Total Phases: {projects.projectPhaseCount}</p>
              <p>
                Start Date:{" "}
                {projects.startDate
                  ? format(parseISO(projects.startDate), "dd/MM/yy")
                  : "N/A"}
              </p>
              <p>
                End Date:{" "}
                {projects.endDate
                  ? format(parseISO(projects.startDate), "dd/MM/yy")
                  : "N/A"}
              </p>
              <p>Down Payment: ${projects.projectDownPayment}</p>
              <p>Payment Received: ${projects.projectPaymentReceived}</p>
              <p>Total Cost: ${projects.projectTotalCost}</p>
              <div className="button-container mt-3 mb-5">
                <Link to={`/projectdetails/edit/${projects._id}`}>
                  <button className="custom-button-primary">Edit</button>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
