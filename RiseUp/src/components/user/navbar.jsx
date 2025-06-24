import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import red from "/src/assets/red.png"; // Import logo

const Navbar = () => {
  return (
    <nav className="user-navbar">
      <div className="navbar-logo">
        <img src={red} alt="Logo"className="red-logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/home" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/courses" activeClassName="active">Courses</NavLink>
        </li>
        <li>
          <NavLink to="/self-assessment" activeClassName="active">Self Assessment</NavLink>
        </li>
        <li>
          <NavLink to="/mock-interview" activeClassName="active">Mock Interview</NavLink>
        </li>
        <li>
          <NavLink to="/beyond-tech" activeClassName="active">Beyond Tech</NavLink>
        </li>
        <li>
          <NavLink to="/job" activeClassName="active">Job Search</NavLink>
        </li>
        <li>
          <NavLink to="/jobPosting" activeClassName="active">Job Posting</NavLink>
        </li>
        <li>
          <NavLink to="/community" activeClassName="active">Community</NavLink>
        </li>
    
        <li>
            <NavLink to="/login"  activeClassName="active">Login</NavLink>
        </li>
        <li>
            <NavLink to="/signup" activeClassName="active">Signup</NavLink>
        </li>
        

      </ul>
      <div className="hamburger-menu">
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          ☰
        </label>
        <div className="mobile-menu">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/self-assessment">Self Assessment</NavLink>
          <NavLink to="/mock-interview">Mock Interview</NavLink>
          <NavLink to="/beyond-tech">Beyond Tech</NavLink>
          <NavLink to="/job">Job</NavLink>
          <NavLink to="/community">Community</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
