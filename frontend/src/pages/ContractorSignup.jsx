import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

// sign up data contractor
async function contractorSignup(data) {
  const url = "http://localhost:3000/api/contractors/signup"; // can change
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

const ContractorSignup = ({ setToken }) => {
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [companyUEN, setCompanyUEN] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    setError("");
    setSuccessMessage("");

    const signUpData = {
      company,
      name,
      contact,
      email,
      companyUEN,
      username,
      password,
    };
    try {
      const token = await contractorSignup(signUpData);
      setToken(token);
      setSuccessMessage("Sign Up Successful!");
      console.log("Signup successful, token:", token);
      // navigate("/contractor/login");
    } catch (error) {
      setError("Sign Up Unsuccessful");
    }
  };

  return (
    <div className="contractor-bg">
      <Container className="login-container">
        <h3 className="h3-custom">Contractor Sign Up</h3>
        <Form
          onSubmit={handleSignup}
          className="formLabel mt-4 pages-box-shadow p-3"
        >
          <h4>Company Details</h4>
          <Form.Group controlId="formCompanyName" className="mt-3">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your company name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formName" className="mt-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formContactNumber" className="mt-3">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your contact number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mt-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
              value={companyUEN}
              onChange={(e) => setCompanyUEN(e.target.value)}
              required
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Label>Create Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <div className="button-container mt-3">
            <Button type="submit" className="custom-button-primary">
              Sign Up
            </Button>
            {error && <p className="error mt-3">{error}</p>}
            {successMessage && <p className="success mt-3">{successMessage}</p>}
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default ContractorSignup;
