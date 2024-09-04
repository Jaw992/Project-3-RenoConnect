import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import ProjectTrackingCard from "../components/ProjectTrackingCard";
import ProjectDetailsCard from "../components/ProjectDetailsCard";
import ProjectsList from "../components/ProjectList";


const CustomerProjectDetails = () => {
  const [formData, setFormData] = useState({
    projectId: "",
    projectAddress: "",
    projectPhaseCount: "",
    projectDownPayment: "",
    projectPaymentReceived: "",
    projectTotalCost: "",
  });

  return (
    <div className="customer-bg pages-pad">
      <Container className="pages-custom-container">
        <h4 className="h3-custom">Project Details</h4>
        <div className="pages-box-shadow p-3 p-projectTracking">
          <ProjectsList />
        </div>
      </Container>
    </div>
  );
};

export default CustomerProjectDetails;
