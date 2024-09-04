import { showProjectDetails } from "../services/apiProject";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function EditProjectDetails({token}) {
  const { id } = useParams();
  const [projects, setProjects] = useState(null);

//   const handleEdit = async (
//     projectId,
//     projectAddress,
//     projectPhaseCount,
//     projectDownPayment,
//     projectPaymentReceived,
//     projectTotalCost,
//   ) => {
//     try {
//       await addProjects(
//         projectId,
//         projectAddress,
//         projectPhaseCount,
//         projectDownPayment,
//         projectPaymentReceived,
//         projectTotalCost,
//       );
//     } catch (error) {
//       console.error(error.message);
//     }
//   };

  useEffect(() => {
    const loadProjectsDetails = async () => {
      const data = await showProjectDetails(id, token);
      console.log(data);

      if (data && data.project) {
        setProjects(data.project);
      }
    };
    loadProjectsDetails();
  }, [id, token]);

  if (!projects) return <div>Loading...</div>;
  return (
    <div>
      <h1>Project Details</h1>
      <div key={projects._id}>
        <h2>{projects.projectAddress}</h2>
        <p>Project ID: {projects.projectId}</p>
        <p>Total Phases: {projects.projectPhaseCount}</p>
        <p>Down Payment: ${projects.projectDownPayment}</p>
        <p>Payment Received: ${projects.projectPaymentReceived}</p>
        <p>Total Cost: ${projects.projectTotalCost}</p>
        <Link to={`/projects/${projects._id}`}>
          <button>Edit</button>
        </Link>
      </div>
      
    </div>
  );
}
