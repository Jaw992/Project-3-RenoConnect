import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

// sign up data customer
async function customerSignup(data) {
  const url = "http://localhost:3000/api/customers/signup"; // can change
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json.token;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

const CustomerSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = await customerSignup(formData);
      setSuccess("Sign up successful!");
      setError("");
      console.log("Token:", token); // For debugging or storing token
      navigate("/customer/login");
    } catch (err) {
      setError(err.message);
      setSuccess("");
    }
  };

  return (
    <div className="customer-bg">
      <Container className="login-container">
        <h3 className="h3-custom">Customer Sign Up</h3>
        <Form
          onSubmit={handleSubmit}
          className="formLabel mt-4  pages-box-shadow p-3 "
        >
          <h4>Personal Particulars</h4>
          <Form.Group controlId="formName">
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
              name="contact"
              value={formData.contact}
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

        {/* <Form className="formLabel mt-4  pages-box-shadow p-3 ">
          <h4>Account Details</h4>
          <Form.Group controlId="formProjectId">
            <Form.Label>Project ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your project ID"
              onChange={handleChange}
            />
          </Form.Group> */}

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
          {error && <p className="mt-3">{error}</p>}
          {success && <p className="mt-3">{success}</p>}
        </Form>
      </Container>
    </div>
  );
};

export default CustomerSignup;
