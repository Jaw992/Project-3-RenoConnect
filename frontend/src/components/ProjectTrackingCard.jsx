import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import GanttChart from "./GanttChart";

const ProjectTrackingCard = ({ token }) => {
  const totalPhases = 5;
  const completedPhases = 3;

  return (
    <div>
      <Container className="pages-custom-container">
        <div>
          {/* <h5 className="h3-custom mb-4">Tracking</h5> */}
          <Row className="mt-2">
            <Col className="d-flex flex-column align-items-center">
              <h5 className="h3-custom">ADD PROGRESS CIRCLE</h5>
            </Col>
            <Col className="d-flex flex-column align-items-center">
              <h5 className="p-projectTracking">Total Phases</h5>
              <h2 className="h2-projectTracking">{totalPhases}</h2>
            </Col>
            <Col className="d-flex flex-column align-items-center">
              <h5 className="p-projectTracking">Completed</h5>
              <h2 className="h2-projectTracking">{completedPhases}</h2>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex flex-column align-items-center">
              {/* <h5 className="h3-custom gantt-chart-pad">ADD GANTT CHART</h5> */}
              <GanttChart token={token} />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ProjectTrackingCard;
