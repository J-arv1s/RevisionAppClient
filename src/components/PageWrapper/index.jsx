import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  color: isActive ? "#2B061E" : "#4A4A4A",
  textDecoration: "none",
  padding: "10px 15px",
  fontSize: "22px",
  fontWeight: isActive ? "bold" : "normal",
});

const navBarStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
};

const PageWrapper = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/");
  };

  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <header style={{ marginBottom: "20px" }}>
     <nav style={navBarStyle}>
        {!isLoggedIn && (
          <NavLink to="/register" style={linkStyle}>
            Register
          </NavLink>
        )}
         {isLoggedIn && (
          <NavLink to="/profile" style={linkStyle}>
            Profile
          </NavLink>
        )}
        <NavLink to="/leaderboard" style={linkStyle}>
          Leaderboard
        </NavLink>
        {isLoggedIn && (
        <NavLink to="/quiz" style={linkStyle}>
          Quiz
        </NavLink>
        )}
        {isLoggedIn && (
        <NavLink to="/teacherHome" style={linkStyle}>
          Teacher
        </NavLink>
        )}
        {isLoggedIn ? (
          <NavLink to="/" style={linkStyle} onClick={handleLogout}>
            Logout
          </NavLink>
        ) : (
          <NavLink to="/" style={linkStyle}>
            Login
          </NavLink>
        )}
      </nav>
    </header>
  );
};

export default PageWrapper;
