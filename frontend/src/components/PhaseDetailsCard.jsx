import React from "react";
import { Card } from "react-bootstrap";

const PhaseDetailsCard = ({ phase, viewMode }) => {
  const isEmptyPhase =
    !phase ||
    Object.values(phase).every(
      (value) => value === "" || value === null || value === undefined
    );

  const hasEmptyField =
    phase &&
    Object.values(phase).some(
      (value) => value === "" || value === null || value === undefined
    );

  if (isEmptyPhase) {
    console.log("PHASE IS EMPTY");
    return (
      <Card
        className="mb-3"
        style={{
          backgroundColor: "transparent",
          color: "white",
        }}
      >
        <Card.Body>
          <Card.Text className="mb-1" style={{ fontWeight: "500" }}>
            Please enter phase details and click append button to show details
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }

  if (hasEmptyField) {
    console.log("PHASE HAS EMPTY FIELDS");
    return (
      <Card
        className="mb-3"
        style={{
          backgroundColor: "transparent",
          color: "white",
        }}
      >
        <Card.Body>
          <Card.Text className="mb-3" style={{ fontWeight: "500" }}>
            Incomplete Entries
          </Card.Text>
          <Card.Text>
            Please enter all fields to view complete details.
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }

  console.log("PHASE IS COMPLETE");
  return (
    <Card
      className="mb-3"
      style={{
        backgroundColor: "transparent",
        color: "white",
        border: "none",
      }}
    >
      <Card.Body>
        <Card.Title className="mb-3" style={{ fontWeight: "700" }}>
          Phase {phase.phase}
        </Card.Title>

        {viewMode !== "create" && (
          <>
            <Card.Subtitle className="mb-3">
              <strong>
                ** ** Add condition for completed/in-progress using start and
                end date.
              </strong>
              <strong>
                **{" "}
                {new Date(phase.startDate) <= new Date() &&
                new Date(phase.endDate) >= new Date()
                  ? "In Progress"
                  : "Completed"}
              </strong>
            </Card.Subtitle>
          </>
        )}

        <Card.Text>
          <strong>Task:</strong> {phase.task}
        </Card.Text>
        <Card.Text>
          <strong>Task Description:</strong> {phase.taskDescription}
        </Card.Text>
        <Card.Text>
          <strong>Start Date:</strong>{" "}
          {new Date(phase.startDate).toLocaleDateString()}
        </Card.Text>
        <Card.Text>
          <strong>End Date:</strong>{" "}
          {new Date(phase.endDate).toLocaleDateString()}
        </Card.Text>
        <Card.Text>
          <strong>Cost:</strong> ${phase.cost}
        </Card.Text>
        <Card.Text>
          <strong>Show Phase Status:</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PhaseDetailsCard;
