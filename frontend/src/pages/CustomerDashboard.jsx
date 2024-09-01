import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import PhaseDetailsCard from "../components/PhaseDetailsCard";
import ProjectTrackingCard from "../components/ProjectTrackingCard";

const CustomerDashboard = () => {
  const [selectedPhase, setSelectedPhase] = useState("Phase 1");

  const handleChange = (e) => {
    selectedPhase(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Phase deleted: ", selectedPhase);
  };
  return (
    <div className="customer-bg pages-pad">
      <Container className="pages-custom-container">
        <h4 className="h3-custom">Dashboard</h4>
        <div className=" pages-box-shadow p-3">
          <h5 className="h3-custom mb-4">Project Tracking</h5>
          <div>
            <ProjectTrackingCard />
          </div>
        </div>

        <div className=" pages-box-shadow p-3 mt-3">
          <h5 className="h3-custom">Change Requests: Pending Approval</h5>
          <p style={{ color: "white" }}>* Add ChangeRequestCard here</p>
          <p style={{ color: "white" }}>* Add approve and reject button</p>
        </div>

        <Form onSubmit={handleSubmit} className="pages-box-shadow p-3 mt-3">
          <h5 className="h3-custom">View Phase</h5>
          <Form.Group controlId="formPhaseSelect" className="mt-1">
            <Form.Label className="pages-form-labels">
              Select a phase:
            </Form.Label>
            <Form.Control
              as="select"
              value={selectedPhase}
              onChange={handleChange}
            >
              <option>Phase 1</option>
              <option>Phase 2</option>
              <option>Phase 3</option>
            </Form.Control>
            <div className="mt-4">
              <PhaseDetailsCard phase={selectedPhase} />
            </div>
          </Form.Group>
          <div className="button-container mt-3">
            <Button type="submit" className="custom-button-primary">
              Delete
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default CustomerDashboard;
