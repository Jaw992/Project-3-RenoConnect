import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomerLogin = () => {
  return (
    <div className="customer-bg">
      <Container className="login-container">
        <h3 className="h3-custom">Customer Login</h3>
        <Form className="formLabel mt-4">
          <Form.Group controlId="formEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="email" placeholder="Enter Username" />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" />
          </Form.Group>

          <Button type="submit" className="mt-3 custom-button-primary">
            Login
          </Button>
        </Form>

        <h3 className="h3-custom mt-5">New Here? Sign Up!</h3>
        <div className="button-container mt-2">
          <Link to="/customer/signup">
            <Button className="custom-button-primary me-2">Sign Up</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default CustomerLogin;
