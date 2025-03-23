import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './signup.css';
import './social.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "reader", // Default role
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    
    // ✅ Redirect to login page after signup
    navigate("/");
  };

  return (
    <div className="signup-container">
      <div className="logo">
        <img src="image.png" alt="Logo" />
      </div>

      <h2 className="form-title">Sign Up</h2>

      <div className="social-login">
        <button className="social-button">
          <img src="/google.png" alt="Google" className="social-icon" />
        </button>
      </div>

      <p className="seperator"><span>or</span></p>

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
      </form>

      <p className="sign-in">
        Already have an account? <Link to="/" className="link-text">Log in</Link>
      </p>
    </div>
  );
};

export default Signup;
