import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projectDetailsLoad } from "../services/apiProject";

export default function ProjectsList() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      // const url = `http://localhost:3000/api/projects`;
      try {
        const response = await projectDetailsLoad;
        console.log('Response:', response); // Debugging line

        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        console.log("Data: ", data);
        setProjects(data)
      } catch (error) {
        setError(error.message || "Failed to load projects");
      }
    };

    loadProjects();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <h1>Projects List</h1>
      <div>
        {projects.length === 0 ? (
          <p>No projects available.</p>
        ) : (
          projects.map((project) => (
            <div key={project._id}>
              <h2>{project.projectAddress}</h2>
              <p>Project ID: {project.projectId}</p>
              <p>Total Phases: {project.projectPhaseCount}</p>
              <p>Down Payment: ${project.projectDownPayment}</p>
              <p>Payment Received: ${project.projectPaymentReceived}</p>
              <p>Total Cost: ${project.projectTotalCost}</p>
              <Link to={`/projects/${project.projectId}`}>
                <button>View Details</button>
              </Link>
            </div>
          ))
        )}
      </div>
    </>
  );
}
