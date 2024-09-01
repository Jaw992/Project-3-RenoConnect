import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const CustomerSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    projectId: "",
    username: "",
    password: "",
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
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="customer-bg">
      <Container className="login-container">
        <h3 className="h3-custom">Customer Sign Up</h3>
        <Form
          onSubmit={handleSubmit}
          className="formLabel mt-4 pages-box-shadow p-3"
        >
          <h4>Personal Particulars</h4>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formContactNumber" className="mt-3">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="text"
              name="contactNumber"
              placeholder="Enter your contact number"
              value={formData.contactNumber}
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
        </Form>
        <Form
          onSubmit={handleSubmit}
          className="formLabel mt-4 pages-box-shadow p-3"
        >
          <h4>Account Details</h4>
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

          <Form.Group controlId="formUsername" className="mt-3">
            <Form.Label>Create Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Create a username"
              value={formData.username}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Label>Create Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Create a password"
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

export default CustomerSignup;
