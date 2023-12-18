import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // New state to track if the form is submitted


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login with:', email, password);
    setIsSubmitted(true)
  };

  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', // Full width of the parent container
    maxWidth: '400px', // Maximum width of the form
    padding: '20px',
    boxSizing: 'border-box',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '16px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#4A90E2',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
  };

  return (
    <div style={pageStyle}>
      <h1 style={{ marginBottom: '20px' }}>Login</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          required
        />
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
``