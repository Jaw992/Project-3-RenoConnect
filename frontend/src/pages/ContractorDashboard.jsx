import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const ContractorDashboard = () => {
  const [phase, setPhase] = useState("Phase 1");

  const handleChange = (e) => {
    setPhase(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Phase deleted", phase);
  };
  return (
    <div className="contractor-bg pages-pad">
      <Container className="pages-custom-container">
        <h4 className="h3-custom">Dashboard</h4>
        <div className=" pages-box-shadow p-3">
          <h5 className="h3-custom">Project Tracking</h5>
          <p style={{ color: "white" }}>
            * Add Progress Circle, Total Phases, Completed here
          </p>
          <p style={{ color: "white" }}>* Add Gantt Chart here</p>
        </div>

        <div className=" pages-box-shadow p-3 mt-3">
          <h5 className="h3-custom">Change Requests: Pending Approval</h5>
          <p style={{ color: "white" }}>* Add ChangeRequestCard here</p>
        </div>

        <Form onSubmit={handleSubmit} className="pages-box-shadow p-3 mt-3">
          <h5 className="h3-custom">View/Delete</h5>
          <Form.Group controlId="formPhaseSelect" className="mt-1">
            <Form.Label className="pages-form-labels">
              Select a phase:
            </Form.Label>
            <Form.Control as="select" value={phase} onChange={handleChange}>
              <option>Phase 1</option>
              <option>Phase 2</option>
              <option>Phase 3</option>
            </Form.Control>
            <p className="mt-3" style={{ color: "white" }}>
              * Add PhaseDetailsCard here | Can't delete phase that is
              approved/rejected?
            </p>
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

export default ContractorDashboard;
