import React, { useState } from "react";
import "./signup.css";
import { FaUser, FaLock, FaEnvelope, FaArrowLeft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [role, setRole] = useState("reader");
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const username = e.target[0].value.trim();
    const email = e.target[1].value.trim();
    const password = e.target[2].value.trim();
    const confirmPassword = e.target[3].value.trim();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      alert("Account created successfully!");
      navigate("/login");
    }
  };

  const handleGoogleSignup = () => {
    alert("Sign up with Google");
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <h1>Join NepNews</h1>
        <p>
          Become a part of our community by signing up to access real-time
          news, in-depth articles, and exclusive content.
        </p>
      </div>

      <div className="signup-right">
        <button className="back-btn" onClick={handleBack}>
          <FaArrowLeft /> Back to Home
        </button>

        <img src="NepnewsLogo.png" alt="NepNews Logo" className="logo" />
        <h2>SIGN UP</h2>

        <form onSubmit={handleSubmit}>
          <div className="role-select">
            <label>Role:</label>
            <select value={role} onChange={(e) => setRole(e.target.value)} required>
              <option value="editor">Editor</option>
              <option value="author">Author</option>
              <option value="reader">Reader</option>
            </select>
          </div>

          <div className="input-box">
            <FaUser className="icon" />
            <input type="text" placeholder="Username" required />
          </div>

          <div className="input-box">
            <FaEnvelope className="icon" />
            <input type="email" placeholder="Email" required />
          </div>

          <div className="input-box">
            <FaLock className="icon" />
            <input type="password" placeholder="Password" required />
          </div>

          <div className="input-box">
            <FaLock className="icon" />
            <input type="password" placeholder="Confirm Password" required />
          </div>

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>

        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>

        <div className="google-signup">
          <span>Or Sign Up with:</span>
          <div className="google-icon-container">
            <FcGoogle className="social-icon" onClick={handleGoogleSignup} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
