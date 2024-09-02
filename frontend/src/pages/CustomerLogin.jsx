import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

// login data customer
async function customerLogin(data) {
  const url = "http://localhost:3000/api/customers/login"; //can change
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

const CustomerLogin = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate(); // For navigation

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");
    setSuccessMessage("");

    try {
      const token = await customerLogin({ username, password });
      setToken(token); // Set the token in your app's state
      setSuccessMessage("Login Successful!");
      navigate("/customer"); // Redirect to customer dashboard
    } catch (error) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="customer-bg">
      <Container className="login-container">
        <h3 className="h3-custom">Customer Login</h3>
        <Form onSubmit={handleLogin} className="formLabel mt-4">
          <Form.Group controlId="formEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control 
            type="email" 
            placeholder="Enter Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            required 
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type="password" 
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
            />
          </Form.Group>

          <Button type="submit" className="mt-3 custom-button-primary">
            Login
          </Button>
          {error && <p className="error mt-3">{error}</p>}
          {successMessage && <p className="success mt-3">{successMessage}</p>}
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
