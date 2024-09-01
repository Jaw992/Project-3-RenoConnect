import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import ProjectTrackingCard from "../components/ProjectTrackingCard";

const ContractorProjectDetails = () => {
  const [formData, setFormData] = useState({
    projectId: "",
    projectAddress: "",
    totalPhases: "",
    downPaymentPercent: "",
    downPaymentReceived: "",
    totalProjectCost: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="contractor-bg pages-pad">
      <Container className="pages-custom-container">
        <h4 className="h3-custom">Project Details</h4>
        <div className="pages-box-shadow p-3 p-projectTracking">
          ADD PROJECT DETAILS CARD
        </div>
        <div className="pages-box-shadow p-3 mt-3">
          <h5 className="h3-custom">Create/Edit</h5>

          <Form onSubmit={handleSubmit} className="formLabel mt-2 p-3">
            <Form.Group controlId="formProjectId">
              <Form.Label>Project ID</Form.Label>
              <Form.Control
                type="text"
                name="projectId"
                placeholder="Enter your project ID"
                value={formData.projectId}
                onChange={handleChange}
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
              />
            </Form.Group>

            <Form.Group controlId="formTotalPhases" className="mt-3">
              <Form.Label>Total Phases</Form.Label>
              <Form.Control
                type="number"
                name="totalPhases"
                placeholder="Enter total phases"
                value={formData.totalPhases}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formDownPaymentPercent" className="mt-3">
              <Form.Label>Down Payment (%)</Form.Label>
              <Form.Control
                type="number"
                name="downPaymentPercent"
                placeholder="Enter down payment percentage"
                value={formData.downPaymentPercent}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formDownPaymentReceived" className="mt-3">
              <Form.Label>Down Payment Received ($)</Form.Label>
              <Form.Control
                type="number"
                name="downPaymentReceived"
                placeholder="Enter down payment received"
                value={formData.downPaymentReceived}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formTotalProjectCost" className="mt-3">
              <Form.Label>Total Project Cost ($)</Form.Label>
              <Form.Control
                type="number"
                name="totalProjectCost"
                placeholder="Enter total project cost"
                value={formData.totalProjectCost}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <div className="button-container mt-3">
              <Button type="submit" className="custom-button-primary">
                Save
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default ContractorProjectDetails;
