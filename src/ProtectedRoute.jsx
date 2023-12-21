import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from './auth'; // adjust the import path as needed

const ProtectedRoute = ({ children }) => {
  if (!isLoggedIn()) {
    // Redirect to the login page if not logged in
    return <Navigate to="/" />;
  }

  return children;
};
export default ProtectedRoute