import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams and useNavigate
import { Container, Form, Button } from "react-bootstrap";
import ProjectDetailsCard from "../components/ProjectDetailsCard";
import { projectDetailsLoad } from "../services/apiProject";
// import ProjectTrackingCard from "../components/ProjectTrackingCard";
import { contractorProjectDetailsEdit } from "../services/apiProject";
import { contractorProjectDetails } from "../services/apiProject";
import ProjectsList from "../components/ProjectList";
import { Link } from "react-router-dom";

const ContractorProjectDetails = ({ token }) => {
  // const { projectId } = useParams();
  const [formData, setFormData] = useState({
    projectId: "",
    projectAddress: "",
    projectPhaseCount: "",
    projectDownPayment: "",
    projectPaymentReceived: "",
    projectTotalCost: "",
  });

  const [successMessage, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [mode, setMode] = useState("create");

  const [create, setCreate] = useState({
    projectId: "",
    projectAddress: "",
    projectPhaseCount: 0,
    projectDownPayment: 0,
    projectPaymentReceived: 0,
    projectTotalCost: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (mode === "edit") {
        await contractorProjectDetailsEdit(formData, token);
        setSuccess("Project Details Updated!");
      } else {
        await contractorProjectDetails(formData, token);
        setSuccess("Project Details Created!");
      }
      setError("");
      setCreate(formData);
      setMode("create");
    } catch (error) {
      setError(error.message);
      setSuccess("");
    }
  };

  return (
    <div className="contractor-bg pages-pad">
      <Container className="pages-custom-container">
        <h4 className="h3-custom">Project Details</h4>
        <div className="pages-box-shadow p-3 p-projectTracking">
          {/* <ProjectDetailsCard phase={formData} viewMode={mode} /> */}
          <ProjectsList token={token}></ProjectsList>
        </div>
        <div className="pages-box-shadow p-3 mt-3">
          <h5 className="h3-custom">Create Project </h5>
          <Form onSubmit={handleSubmit} className="formLabel mt-2 p-3">
            <Form.Group controlId="formProjectId">
              <Form.Label>Project ID</Form.Label>
              <Form.Control
                type="text"
                name="projectId"
                placeholder="Enter your project ID"
                value={formData.projectId}
                onChange={handleChange}
                disabled={mode === "edit"} // Disable input in edit mode
                required="true"
              />
            </Form.Group>

            <Form.Group controlId="formProjectAddress" className="mt-3">
              <Form.Label>
                Project Address / Property under renovation
              </Form.Label>
              <Form.Control
                type="text"
                name="projectAddress"
                placeholder="Enter your project address"
                value={formData.projectAddress}
                onChange={handleChange}
                required="true"
              />
            </Form.Group>

            <Form.Group controlId="formTotalPhases" className="mt-3">
              <Form.Label>Total Phases</Form.Label>
              <Form.Control
                type="number"
                name="projectPhaseCount"
                placeholder="Enter total phases"
                value={formData.projectPhaseCount}
                onChange={handleChange}
                required="true"
              />
            </Form.Group>

            <Form.Group controlId="formDownPaymentPercent" className="mt-3">
              <Form.Label>Down Payment (%)</Form.Label>
              <Form.Control
                type="number"
                name="projectDownPayment"
                placeholder="Enter down payment percentage"
                value={formData.projectDownPayment}
                onChange={handleChange}
                required="true"
              />
            </Form.Group>

            <Form.Group controlId="formDownPaymentReceived" className="mt-3">
              <Form.Label>Down Payment Received ($)</Form.Label>
              <Form.Control
                type="number"
                name="projectPaymentReceived"
                placeholder="Enter down payment received"
                value={formData.projectPaymentReceived}
                onChange={handleChange}
                required="true"
              />
            </Form.Group>

            <Form.Group controlId="formTotalProjectCost" className="mt-3">
              <Form.Label>Total Project Cost ($)</Form.Label>
              <Form.Control
                type="number"
                name="projectTotalCost"
                placeholder="Enter total project cost"
                value={formData.projectTotalCost}
                onChange={handleChange}
                required="true"
              />
            </Form.Group>
            {/* 
            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group> */}

            <div className="button-container mt-3">
                <Button type="submit" className="custom-button-primary">
                  Create
                </Button>
              {error && <p className="error mt-3">{error}</p>}
              {successMessage && (
                <p className="success mt-3">{successMessage}</p>
              )}
            </div>
          </Form>
        </div>
      </Container>

      <div></div>
    </div>
  );
};

export default ContractorProjectDetails;
