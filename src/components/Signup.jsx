import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css'; // New CSS file for Signup

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'reader',
  });

  const [error, setError] = useState('');

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // Perform sign-up logic (e.g., API call)
    console.log('Form data submitted:', formData);
  };

  // Handler for form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handler for social signup buttons
  const handleSocialSignup = (provider) => {
    console.log(`${provider} signup successful`);
    // Perform actions after successful social signup (e.g., redirect, set user data)
  };

  return (
    <div className="signup-container">
      <div className="left-container">
        <h1>Welcome!</h1>
        <p>Join NepNews today to get real-time updates, breaking news, and exclusive reports tailored to your interests.</p>
      </div>
      <div className="right-container">
        <img className="logo" src="/image.png" alt="Logo" />
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} className="signup-page">
          <div className="input-wrapper">
            <i className="material-symbols-outlined">person</i>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="input-field"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-wrapper">
            <i className="material-symbols-outlined">mail</i>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input-field"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-wrapper">
            <i className="material-symbols-outlined">lock</i>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input-field"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-wrapper">
            <i className="material-symbols-outlined">lock</i>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="input-field"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-wrapper">
            <i className="material-symbols-outlined">assignment_ind</i>
            <select
              name="role"
              className="input-field"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="reader">Reader</option>
              <option value="author">Author</option>
              <option value="editor">Editor</option>
            </select>
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="signup-button">Sign Up</button>

          <div className="or-container">
            <span>OR</span>
          </div>

          <div className="social-login">
            {/* Social signup buttons */}
            <button
              type="button"
              className="facebook-btn"
              onClick={() => handleSocialSignup('Facebook')}
            >
              <i className="fab fa-facebook-f"></i> Sign Up with Facebook
            </button>
            <button
              type="button"
              className="google-btn"
              onClick={() => handleSocialSignup('Google')}
            >
              <i className="fab fa-google"></i> Sign Up with Google
            </button>
          </div>

          <p className="login-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
