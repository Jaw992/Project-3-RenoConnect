import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const CustomerSignup = () => {
  return (
    <div className="customer-bg">
      <Container className="login-container">
        <h3 className="h3-custom">Customer Sign Up</h3>
        <Form className="formLabel mt-4  border p-3 ">
          <h4>Personal Particulars</h4>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value="Spiderman"
            />
          </Form.Group>

          <Form.Group controlId="formContactNumber" className="mt-3">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your contact number"
              value="88888888"
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mt-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value="spiderman@example.com"
            />
          </Form.Group>
        </Form>
        <Form className="formLabel mt-4  border p-3 ">
          <h4>Account Details</h4>
          <Form.Group controlId="formProjectId">
            <Form.Label>Project ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your project ID"
              value="PROJECT12345"
            />
          </Form.Group>

          <Form.Group controlId="formUsername" className="mt-3">
            <Form.Label>Create Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Create a username"
              value="spiderman"
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Label>Create Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Create a password"
              value="password123"
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
