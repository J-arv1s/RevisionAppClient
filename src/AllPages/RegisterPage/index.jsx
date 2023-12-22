import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../index.css';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://revision-app-2b5p.onrender.com/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Account successfully created! Redirecting to login...');
        setTimeout(() => {
          navigate('/');
        }, 3000); 
      } else {
        console.error('Registration failed:', data.error);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <>
      <section id="main">
        <section id="middleRegister">
          <div className="registerForm">
            <h2>Register an account</h2>
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            <form onSubmit={handleRegister}>
              <label htmlFor="username">Username: </label>
              <input 
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label htmlFor="password">Password: </label>
              <input 
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input 
                id="buttonSubmit"
                type="submit" 
                value="Sign up"
              />
            </form>
          </div>
        </section>
      </section>
    </>
  );
};

export default RegisterPage;





// import React from "react"
// import '../index.css'

// const RegisterPage = () => {
//   return (
//     <>
//     <section id="main">
//       <section id="middle">
//         <div>
//           <h2>Register an account</h2>
//           <form>
//             <label htmlFor="">Email: </label>
//             <input type="text"/>
//             <label htmlFor="">Username: </label>
//             <input type="text"/>
//             <label htmlFor="">Password: </label>
//             <input type="text"/>
//             <input id="buttonSubmit"type="submit" value="Sign up"/>
//           </form>
//         </div>
//       </section>
//     </section>
//     </>
//   )
// }

// export default RegisterPage
