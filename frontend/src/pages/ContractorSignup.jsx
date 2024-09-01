import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const ContractorSignup = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    contactNumber: "",
    email: "",
    companyRegistrationNumber: "",
    username: "",
    password: "",
  });

  // Step 2: Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="contractor-bg">
      <Container className="login-container">
        <h3 className="h3-custom">Contractor Sign Up</h3>
        <Form
          onSubmit={handleSubmit}
          className="formLabel mt-4 pages-box-shadow p-3"
        >
          <h4>Company Details</h4>
          <Form.Group controlId="formCompanyName" className="mt-3">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your company name"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formName" className="mt-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formContactNumber" className="mt-3">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your contact number"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mt-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group
            controlId="formCompanyRegistrationNumber"
            className="mt-3"
          >
            <Form.Label>Company Registration Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your company registration number"
              name="companyRegistrationNumber"
              value={formData.companyRegistrationNumber}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
        <Form
          onSubmit={handleSubmit}
          className="formLabel mt-4 pages-box-shadow p-3"
        >
          <h4>Account Details</h4>

          <Form.Group controlId="formUsername" className="mt-3">
            <Form.Label>Create Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Create a username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Label>Create Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Create a password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Form.Group>

          <div className="button-container mt-3">
            <Button type="submit" className="custom-button-primary">
              Sign Up
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default ContractorSignup;
