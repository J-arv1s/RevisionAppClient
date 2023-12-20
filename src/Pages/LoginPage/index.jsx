import React, { useState } from 'react';
import "./index.css"

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); 

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login with:', email, password);
    setIsSubmitted(true);
  };
  

  const pageStyle = {
    display: 'flex',
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-evenly', 
    height: '100vh',
    width: '100%',
    backgroundColor: 'rgb(238, 153, 234)',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', 
    maxWidth: '500px', 
    padding: '20px',
    boxSizing: 'border-box',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    margin: '0 20px', 
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

  
  const additionalContentStyle = {
    width: '40%', 
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };



  return (
    <div style={pageStyle}>
      <div className="login" style={additionalContentStyle}>
        <h2>Login to Get Started!</h2>
        <p>Enter your Email and Password</p>
      </div>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h1 style={{ marginBottom: '20px' }}>Login</h1>
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

