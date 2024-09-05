import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projectDetailsLoad } from "../services/apiProject";
import { format, parseISO } from "date-fns";

export default function ProjectsList({ projectId, setProjectId, token }) {
  // const [projects, setProjects] = useState({ project: [] }); //reminder: api is an object with drinks array in it
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");

  // useEffect(() => {
  //   const loadProjects = async () => {
  //     try {
  //       const dataProjects = await projectDetailsLoad(token);
  //       setProjects(dataProjects);
  //       setProjectId(dataProjects.project.map((p) => p._id));
  //     } catch (error) {
  //       console.error("Error loading projects: ", error);
  //     }
  //   };
  //   loadProjects();
  // }, [setProjectId, token]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const projectsData = await projectDetailsLoad(token);
        console.log("Projects data:", projectsData);

        if (Array.isArray(projectsData)) {
          setProjects(projectsData);
          if (projectsData.length > 0) {
            setProjectId(projectsData.map((p) => p._id));
          }
        } else {
          setError("Invalid data format received.");
        }
      } catch (error) {
        setError("Failed to load projects.");
        console.error("Error fetching projects:", error);
      }
    };

    loadProjects();
  }, [setProjectId, token]);

  return (
    <>
      <h1 className="mb-5">Projects List</h1>
      <div>
        {error && <p>{error}</p>}
        {projects.length === 0 ? (
          <p>No projects available.</p>
        ) : (
          projects.map((project) => (
            <div key={project._id}>
              <h2>Project ID: {project.projectId}</h2>
              <p>Project Address: {project.projectAddress}</p>
              <p>Total Phases: {project.projectPhaseCount}</p>
              <p>
                Start Date:{" "}
                {project.startDate
                  ? format(parseISO(project.startDate), "dd/MM/yy")
                  : "N/A"}
              </p>
              <p>
                End Date:{" "}
                {project.endDate
                  ? format(parseISO(project.endDate), "dd/MM/yy")
                  : "N/A"}
              </p>
              <p>Down Payment: ${project.projectDownPayment}</p>
              <p>Payment Received: ${project.projectPaymentReceived}</p>
              <p>Total Cost: ${project.projectTotalCost}</p>
              <div className="button-container mt-3 mb-5">
                <Link to={`/projectdetails/edit/${project._id}`}>
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

//   return (
//     <>
//       <h1 className="mb-5">Projects List</h1>
//       <div>
//         {projects.length === 0 ? (
//           <p>No projects available.</p>
//         ) : (
//           projects.map((project) => (
//             <div key={project._id}>
//               <h2>Project ID: {project.projectId}</h2>
//               <p>Project Address: {project.projectAddress}</p>
//               <p>Total Phases: {project.projectPhaseCount}</p>
//               <p>
//                 Start Date:{" "}
//                 {project.startDate
//                   ? format(parseISO(project.startDate), "dd/MM/yy")
//                   : "N/A"}
//               </p>
//               <p>
//                 End Date:{" "}
//                 {project.endDate
//                   ? format(parseISO(project.endDate), "dd/MM/yy")
//                   : "N/A"}
//               </p>
//               <p>Down Payment: ${project.projectDownPayment}</p>
//               <p>Payment Received: ${project.projectPaymentReceived}</p>
//               <p>Total Cost: ${project.projectTotalCost}</p>
//               <div className="button-container mt-3 mb-5">
//                 <Link to={`/projectdetails/edit/${project._id}`}>
//                   <button className="custom-button-primary">Edit</button>
//                 </Link>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </>
//   );
// }
