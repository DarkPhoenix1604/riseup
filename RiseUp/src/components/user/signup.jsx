import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css"; // Ensure the filename matches

import logo from "/src/assets/logo.jpg";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "user",
    termsAccepted: false,
  });

  // Handles input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Signup Data:", formData); 
    // alert("Signup details stored! Now connect it with the backend.");

    try {
      const response = await fetch("http://localhost:8000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="signup-container">
      {/* Logo Section */}
      <div className="signup-logo">
        <img src={logo} alt="Rise Up" />
      </div>

      {/* Signup Form */}
      <div className="signup-form">
        <div className="signup-header">
          <h2>Create Account</h2>
          <p color="#FFFFFF">Sign up to get started with our service</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="account-type">
            <label>Account Type</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="accountType"
                  value="user"
                  checked={formData.accountType === "user"}
                  onChange={handleChange}
                />
                User
              </label>
              <label>
                <input
                  type="radio"
                  name="accountType"
                  value="admin"
                  checked={formData.accountType === "admin"}
                  onChange={handleChange}
                />
                Admin
              </label>
            </div>
          </div>

          <div className="terms">
            <label>
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                required
              />{" "}
              I agree to the <Link to="/terms">Terms of Service</Link> and{" "}
              <Link to="/privacy">Privacy Policy</Link>
            </label>
          </div>

          <button type="submit" className="signup-btn">
            Create Account
          </button>

          <div className="social-login">
            <p>Or login with</p>
            <div className="social-icons">
              <button type="button">G</button>
              <button type="button">f</button>
              <button type="button">in</button>
            </div>
          </div>

          <p className="login-text">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
