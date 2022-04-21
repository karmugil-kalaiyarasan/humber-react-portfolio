import React from 'react';
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
    <ul>
      <li><a href="#myHome">Home</a></li>
      <li><a href="#myAbout">About</a></li>
      <li><a href="#myEducation">Education</a></li>
      <li><a href="#myPortfolio">Portfolio</a></li>
      <li><a href="#myContact">Contact</a></li>
    </ul>
  </nav>
  )
}

export default Navbar