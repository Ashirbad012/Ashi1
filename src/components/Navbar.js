// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#0066ff' }}>
      <div className="container">
        <Link className="navbar-brand" to="/">PERTOSOFT</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link className="nav-link text-white" style={{ fontSize: '20px' }} to="/">Home</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li> */}
            {/* <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link text-light"style={{ fontSize: '20px' }} to="/upload">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light"style={{ fontSize: '20px' }} to="/display">Registration</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
