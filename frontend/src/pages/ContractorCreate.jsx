import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import PhaseDetailsCard from "../components/PhaseDetailsCard";

const ContractorCreate = () => {
  const [formData, setFormData] = useState({
    phase: "",
    task: "",
    taskDescription: "",
    startDate: "",
    endDate: "",
    cost: "",
  });

  const [appendPhase, setAppendPhase] = useState({
    phase: "",
    task: "",
    taskDescription: "",
    startDate: "",
    endDate: "",
    cost: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAppend = (e) => {
    e.preventDefault();
    setAppendPhase(formData);
    // setFormData({
    //   phase: "",
    //   task: "",
    //   taskDescription: "",
    //   startDate: "",
    //   endDate: "",
    //   cost: "",
    // });
  };

  const handleCreate = (e) => {
    e.preventDefault();
    console.log("Phases created:", appendPhase);
  };

  return (
    <div className="contractor-bg pages-pad">
      <Container className="pages-custom-container">
        <h4 className="h3-custom">Create New Phase</h4>
        <div className="pages-box-shadow p-3 mt-3">
          <Form className="formLabel p-3">
            <Form.Group controlId="formPhase">
              <Form.Label>Enter Phase</Form.Label>
              <Form.Control
                type="text"
                name="phase"
                placeholder="Enter phase name"
                value={formData.phase}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formTask" className="mt-3">
              <Form.Label>Enter Task</Form.Label>
              <Form.Control
                type="text"
                name="task"
                placeholder="Enter task"
                value={formData.task}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formTaskDescription" className="mt-3">
              <Form.Label>Enter Task Description</Form.Label>
              <Form.Control
                type="text"
                name="taskDescription"
                placeholder="Enter task description"
                value={formData.taskDescription}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formStartDate" className="mt-3">
              <Form.Label>Enter Start Date</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formEndDate" className="mt-3">
              <Form.Label>Enter End Date</Form.Label>
              <Form.Control
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formCost" className="mt-3">
              <Form.Label>Enter Cost</Form.Label>
              <Form.Control
                type="number"
                name="cost"
                placeholder="Enter cost"
                value={formData.cost}
                onChange={handleChange}
              />
            </Form.Group>

            <div className="button-container mt-4">
              <Button onClick={handleAppend} className="custom-button-primary">
                Append
              </Button>{" "}
              <span className="ms-3">Click to show details.</span>
            </div>
          </Form>
        </div>

        <div className="pages-box-shadow p-3 mt-3">
          <PhaseDetailsCard phase={appendPhase} viewMode="create" />
        </div>

        <div className="button-container mt-3">
          <Button onClick={handleCreate} className="custom-button-primary">
            Create
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default ContractorCreate;
