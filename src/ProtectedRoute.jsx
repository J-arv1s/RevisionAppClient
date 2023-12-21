import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from './auth'; 

const ProtectedRoute = ({ children }) => {
  if (!isLoggedIn()) {
    
    return <Navigate to="/" />;
  }

  return children;
};
export default ProtectedRoute