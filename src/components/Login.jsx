import React, { useState } from "react";
import { FaUser, FaLock, FaArrowLeft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase"; 
import './login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = e.target[0].value.trim();
    const password = e.target[1].value.trim();

    try {
      await signInWithEmailAndPassword(auth, username, password);
      navigate("/dashboard"); 
    } catch (error) {
      console.error("Error logging in:", error.message);
      alert(error.message);
    }
  };

  const goToSignup = () => {
    navigate("/signup");
  };

  const goToForgotPassword = () => {
    navigate("/forgot-password");
  };

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Logged in with Google:", user);
      navigate("/dashboard");
    } catch (error) {
      console.error("Google sign-in error:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Welcome.</h1>
        <p>
          Welcome to NepNews, your gateway to real-time updates, in-depth
          analysis, and breaking news from around the world. Stay informed with
          trusted journalism, curated stories, and exclusive reports tailored to
          your interests.
        </p>
      </div>

      <div className="login-right">
        <button className="back-btn" onClick={handleBack}>
          <FaArrowLeft /> Back to Home
        </button>

        <img src="NepnewsLogo.png" alt="NepNews Logo" className="logo" />
        <h2>USER LOGIN</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <FaUser className="icon" />
            <input type="text" placeholder="Username" required />
          </div>

          <div className="input-box">
            <FaLock className="icon" />
            <input type="password" placeholder="Password" required />
          </div>

          <div className="forgot">
            <a href="#" onClick={goToForgotPassword}>Forgot Password?</a>
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

        <p className="signup">
          Don't have an account? <a href="#" onClick={goToSignup}>Signup</a>
        </p>

        <div className="google-login">
          <span>Or Login with:</span>
          <div className="google-icon-container">
            <FcGoogle className="social-icon" onClick={handleGoogleSignup} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
