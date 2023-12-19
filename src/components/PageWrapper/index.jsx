import React from 'react';
import { NavLink } from 'react-router-dom';

const linkStyle = ({ isActive }) => ({
  color: isActive ? '#2B061E' : '#4A4A4A', // Active link in a darker color
  textDecoration: 'none',
  padding: '10px 15px',
  fontSize: '16px',
  fontWeight: isActive ? 'bold' : 'normal', // Bold for active link
});

const navBarStyle = {
  display: 'flex',
  justifyContent: 'space-evenly', // Spreads out the links more evenly
  alignItems: 'center',
  backgroundColor: '#f8f8f8', // A light background for the nav bar
  padding: '10px 0',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // A subtle shadow for depth
};

const PageWrapper = () => {
  return (
    <header style={{ marginBottom: '20px' }}>
      <nav style={navBarStyle}>
        <NavLink to="/" style={linkStyle}>Home</NavLink>
        <NavLink to="/leaderboard" style={linkStyle}>Leaderboard</NavLink>
        <NavLink to="/logout" style={linkStyle}>Logout</NavLink>
        <NavLink to="/profile" style={linkStyle}>Profile</NavLink>
      </nav>
    </header>
  );
};

export default PageWrapper;
