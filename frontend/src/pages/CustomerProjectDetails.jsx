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
    <div className="customer-bg pages-pad">
      <Container className="pages-custom-container">
        <h4 className="h3-custom">Project Details</h4>
        <div className="pages-box-shadow p-3 p-projectTracking">
          ADD PROJECT DETAILS CARD
        </div>
      </Container>
    </div>
  );
};

export default ContractorProjectDetails;
