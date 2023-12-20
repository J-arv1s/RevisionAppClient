import React from 'react';
import { NavLink } from 'react-router-dom';

const linkStyle = ({ isActive }) => ({
  color: isActive ? '#2B061E' : '#4A4A4A', // Active link in a darker color
  textDecoration: 'none',
  padding: '10px 15px',
  fontSize: '22px',
  fontWeight: isActive ? 'bold' : 'normal', // Bold for active link
});

const navBarStyle = {
  display: 'flex',
  justifyContent: 'space-evenly', // Spreads out the links more evenly
  alignItems: 'center', // A light background for the nav bar, // A subtle shadow for depth
};

const PageWrapper = () => {
  return (
    <header style={{ marginBottom: '20px' }}>
      <nav style={navBarStyle}>
        <NavLink to="/register" style={linkStyle}>Register</NavLink>
        <NavLink to="/profile" style={linkStyle}>Profile</NavLink>
        <NavLink to="/leaderboard" style={linkStyle}>Leaderboard</NavLink>
        <NavLink to="/quiz" style={linkStyle}>Quiz</NavLink>
        <NavLink to="/teacherHome" style={linkStyle}>Teacher</NavLink>
        <NavLink to="/" style={linkStyle}>Logout</NavLink>
      </nav>
    </header>
  );
};

export default PageWrapper;
