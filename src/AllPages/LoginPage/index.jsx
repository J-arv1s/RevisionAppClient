import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
 

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://revision-app-2b5p.onrender.com/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", username);
        localStorage.setItem("isAdmin", data.isAdmin);
        setLoginMessage("Login successful. Redirecting...");
        setTimeout(() => {
          if (data.isAdmin === true) {
            navigate("/teacherHome");
          } else navigate("/profile");
        }, 3000);
      } else {
        console.error("Login failed:", data.error);
        setLoginMessage("Login failed. Please try again.");

        setTimeout(() => {
          setLoginMessage("");
        }, 3000);
      }
    } catch (error) {
      console.error("Network error:", error);
      setLoginMessage("Network error. Please try again.");
      setTimeout(() => {
        setLoginMessage("");
      }, 3000);
    }
  };

  const pageStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "100vh",
    width: "100%",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "500px",
    padding: "20px",
    boxSizing: "border-box",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    margin: "0 20px",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ddd",
    fontSize: "16px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#9605af",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  };

  const additionalContentStyle = {
    width: "40%",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={pageStyle}>
      <div className="login" style={additionalContentStyle}>
        <div className="landingText">
        <header>
          <h1>MindMingle - Where Revision Meets Innovation! 🚀</h1>
        </header>

        <section id='landingSection'>
          <p>
            Supercharge your studies with dynamic quizzes tailored for student
            success. 🧠✨
          </p>
          <ul className="landingList">
            <li>🌐 Anywhere Access</li>
            <li>👥 Collaborative Learning</li>
            <li>📊 Real-Time Progress Tracking</li>
          </ul>
          <p>
            Join MindMingle for a smarter, more engaging study experience.🚀📚
          </p>
         
        </section>
        </div>
        <p></p>
      </div>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h1 style={{ marginBottom: "20px" }}>Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
        <button type="submit" style={buttonStyle}>
          Login
        </button>
        <p>Don't have an account yet? <Link to='/register'>Register here</Link></p>
        {loginMessage && (
  <div
    style={{
      color: loginMessage === "Login successful. Redirecting..." ? 'green' : 'red'
    }}
  >
    {loginMessage}
  </div>
)}
      </form>
    </div>
  );
};

export default LoginPage;
