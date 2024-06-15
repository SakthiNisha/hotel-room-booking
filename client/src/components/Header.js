import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file for styling

const Header = () => (
  <header className="royal-header">
    <div className="logo">
      <Link to="/">Hotel Logo</Link>
    </div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/booking" className="book-now">Book Now</Link>
    </nav>
  </header>
);

export default Header;
