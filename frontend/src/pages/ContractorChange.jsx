import React, { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const dummyPhases = [
  {
    id: 1,
    phase: "Phase 1",
    task: "Task 1",
    taskDescription: "Description 1",
    startDate: "2024-01-01",
    endDate: "2024-01-10",
    cost: 100,
  },
  {
    id: 2,
    phase: "Phase 2",
    task: "Task 2",
    taskDescription: "Description 2",
    startDate: "2024-02-01",
    endDate: "2024-02-10",
    cost: 200,
  },
];

const ChangePhaseDetails = () => {
  const [phases, setPhases] = useState(dummyPhases);
  const [selectedPhaseId, setSelectedPhaseId] = useState(null);
  const [formData, setFormData] = useState({
    phase: "",
    task: "",
    taskDescription: "",
    startDate: "",
    endDate: "",
    cost: "",
  });

  const [updatedPhase, setUpdatedPhase] = useState(null);

  useEffect(() => {
    if (selectedPhaseId !== null) {
      const selectedPhase = phases.find(
        (phase) => phase.id === selectedPhaseId
      );
      setFormData(
        selectedPhase || {
          phase: "",
          task: "",
          taskDescription: "",
          startDate: "",
          endDate: "",
          cost: "",
        }
      );
    }
  }, [selectedPhaseId]);

  const handleSelectChange = (e) => {
    setSelectedPhaseId(parseInt(e.target.value));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAppend = (e) => {
    e.preventDefault();
    setUpdatedPhase(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated phase:", formData);
  };

  const selectedPhase = phases.find((p) => p.id === selectedPhaseId);

  return (
    <div className="contractor-bg pages-pad">
      <Container className="pages-custom-container">
        <h4 className="h3-custom">Change Phase Details</h4>
        <div className="pages-box-shadow p-3 mt-3">
          <div className="formLabel p-3">
            <Form.Group controlId="formPhaseSelect">
              <Form.Label>
                Select Phase to Change (Submission Required)
              </Form.Label>
              <Form.Control
                as="select"
                value={selectedPhaseId || ""}
                onChange={handleSelectChange}
              >
                <option value="">Select a phase</option>
                {phases.map((phase) => (
                  <option key={phase.id} value={phase.id}>
                    {phase.phase}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            {selectedPhaseId && (
              <>
                <Form.Group className="mt-3">
                  <Form.Label>Task</Form.Label>
                  <Form.Control
                    type="text"
                    name="task"
                    value={formData.task}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mt-3">
                  <Form.Label>Task Description</Form.Label>
                  <Form.Control
                    type="text"
                    name="taskDescription"
                    value={formData.taskDescription}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mt-3">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mt-3">
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mt-3">
                  <Form.Label>Cost</Form.Label>
                  <Form.Control
                    type="number"
                    name="cost"
                    value={formData.cost}
                    onChange={handleChange}
                  />
                </Form.Group>

                <div className="button-container mt-4 d-flex align-items-center">
                  <Button
                    onClick={handleAppend}
                    className="custom-button-primary"
                  >
                    Append
                  </Button>
                  <span className="ms-3">Click to show change details.</span>
                </div>
              </>
            )}
          </div>
        </div>

        {updatedPhase && (
          <div className="pages-box-shadow formLabel p-3 mt-3">
            <Container>
              <Row>
                <Col>
                  <h5 className="h3-custom mb-4">Changes</h5>
                  <div>
                    {selectedPhase && (
                      <>
                        {selectedPhase.task !== updatedPhase.task && (
                          <div className="changes-text-thin">
                            <h6 className="h3-custom mb-4">Task:</h6>
                            <p className="ms-3">Before: {selectedPhase.task}</p>
                            <p className="ms-3">After: {updatedPhase.task}</p>
                          </div>
                        )}

                        {selectedPhase.taskDescription !==
                          updatedPhase.taskDescription && (
                          <div className="changes-text-thin mt-4">
                            <h6 className="h3-custom mb-4">
                              Task Description:
                            </h6>
                            <p className="ms-3">
                              Before: {selectedPhase.taskDescription}
                            </p>
                            <p className="ms-3">
                              After: {updatedPhase.taskDescription}
                            </p>
                          </div>
                        )}

                        {selectedPhase.startDate !== updatedPhase.startDate && (
                          <div className="changes-text-thin mt-4">
                            <h6 className="h3-custom mb-4">Start Date:</h6>
                            <p className="ms-3">
                              Before: {selectedPhase.startDate}
                            </p>
                            <p className="ms-3">
                              After: {updatedPhase.startDate}
                            </p>
                          </div>
                        )}

                        {selectedPhase.endDate !== updatedPhase.endDate && (
                          <div className="changes-text-thin mt-4">
                            <h6 className="h3-custom mb-4">End Date:</h6>
                            <p className="ms-3">
                              Before: {selectedPhase.endDate}
                            </p>
                            <p className="ms-3">
                              After: {updatedPhase.endDate}
                            </p>
                          </div>
                        )}

                        {selectedPhase.cost !== updatedPhase.cost && (
                          <div className="changes-text-thin mt-4">
                            <h6 className="h3-custom mb-4">Cost:</h6>
                            <p className="ms-3">
                              Before: ${selectedPhase.cost}
                            </p>
                            <p className="ms-3">After: ${updatedPhase.cost}</p>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        )}

        <div className="button-container mt-3">
          <Button onClick={handleSubmit} className="custom-button-primary">
            Submit
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default ChangePhaseDetails;
