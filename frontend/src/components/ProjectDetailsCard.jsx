import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";


const ProjectDetailsCard = ({ phase, viewMode }) => {
  return (
    <>
      <Container>
        <Row>
        <Col>
          <h5>Contractor</h5>
          <p>Company Name: </p>
          <p>Person In Charge: </p>
          <p>Contact Number: </p>
          <p>Email: </p>
          <p>Registration No.: </p>
        </Col>
        <Col>
          <h5>Customer</h5>
          <p>Name: </p>
          <p>Contact Number: </p>
          <p>Email: </p>
        </Col>
        </Row>
      <Row>
        <h5 className="mt-4"><strong>Project Details</strong></h5>
        <p>Project Details: {phase.projectId}</p>
        <p>Project Address: {phase.projectAddress}</p>
        <p>Total Phases: {phase.projectPhaseCount}</p>
        <p>Down Payment (%): {phase.projectDownPayment}</p>
        <p>Down Payment Received ($): {phase.projectPaymentReceived}</p>
        <p>Total Project Cost ($): {phase.projectTotalCost}</p>
      </Row>
      </Container>

    </>
  );
};

export default ProjectDetailsCard;
