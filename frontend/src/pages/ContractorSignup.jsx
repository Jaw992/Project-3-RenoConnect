import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const ContractorSignup = () => {
  return (
    <div className="contractor-bg">
      <Container className="login-container">
        <h3 className="h3-custom">Contractor Sign Up</h3>
        <Form className="formLabel mt-4 pages-box-shadow p-3">
          <h4>Company Details</h4>
          <Form.Group controlId="formCompanyName" className="mt-3">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your company name"
              value="Marvel"
            />
          </Form.Group>

          <Form.Group controlId="formName" className="mt-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value="Iron Man"
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

          <Form.Group
            controlId="formCompanyRegistrationNumber"
            className="mt-3"
          >
            <Form.Label>Company Registration Number</Form.Label>
            <Form.Control
              type="string"
              placeholder="Enter your company registration number"
              value="RSG123456"
            />
          </Form.Group>
        </Form>
        <Form className="formLabel mt-4  pages-box-shadow p-3 ">
          <h4>Account Details</h4>

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
        </Form>
        <div className="button-container mt-3">
          <Button type="submit" className="custom-button-primary">
            Sign Up
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default ContractorSignup;
