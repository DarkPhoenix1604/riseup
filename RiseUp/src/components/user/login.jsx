import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import logo from "/src/assets/logo.jpg";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const navigate = useNavigate();

  // Handles input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Login Data:", formData); // Ready to send to backend
    // Add your authentication logic here
    
    // Redirect to home page after successful login
    navigate("/home");
  };

  return (
    <div className="login-container">
      {/* Logo Section */}
      <div className="login-logo">
        <img src={logo} alt="Rise Up" />
      </div>

      {/* Login Form */}
      <div className="login-form">
        <div className="login-header">
          <h2>Login</h2>
          <p>Welcome back! Please login to continue.</p>
        </div>

        <form onSubmit={handleSubmit}>
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
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="options">
            <label>
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />{" "}
              Remember Me
            </label>
            <Link to="/forgot-password" className="forgot-password">
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          <div className="social-login">
            <p>Or login with</p>
            <div className="social-icons">
              <button type="button" className="social-btn google">
                G
              </button>
              <button type="button" className="social-btn facebook">
                f
              </button>
              <button type="button" className="social-btn linkedin">
                in
              </button>
            </div>
          </div>

          <p className="signup-text">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;