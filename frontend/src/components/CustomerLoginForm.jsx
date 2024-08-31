import { useState } from "react";
import { useNavigate } from "react-router-dom";

async function customerLogin(data) {
  const url = "/api/customers/login";
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
  }
}

export default function CustomerLogin({ setToken }) {
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
      setSuccessMessage("Login successful!");
      navigate("/dashboard"); // Redirect to a protected route or dashboard
    } catch (error) {
      setError("Invalid username or password");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <fieldset>
        <legend>Customer Login</legend>
        <div>
          <label>Username: </label>
          <input
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
      </fieldset>
      <div>
        <button type="button" onClick={() => navigate("/customers/signup")}>
          New Sign Up
        </button>
      </div>
    </form>
  );
}
