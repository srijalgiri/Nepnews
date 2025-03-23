import { Link } from "react-router-dom";
import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <ul className="nav-links">
      <li>Homepage</li>
      <li>News</li>
      <li>Business</li>
      <li>Sports</li>
      <li>Entertainment</li>  
      <li>Others</li>
    </ul>
    <button className="logins-button"><Link to="/Login">Login</Link></button>
  </nav>
);

export default Navbar;
