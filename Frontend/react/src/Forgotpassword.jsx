import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    setError("");
    // Simulate password change and navigate back to the login page
    alert("Password changed successfully!");
    navigate("/"); // Navigate back to login page
  };

  return (
    <div className="forgot-password-container">
      {/* Circular Back Button */}
      <button className="back-button" onClick={() => navigate("/")}>
        <i className="material-symbols-outlined">arrow_back</i>
      </button>

      <h2 className="form-title">Forgot Password</h2>

      <form onSubmit={handleSubmit} className="forgot-password-form">
        <div className="input-wrapper">
          <i className="material-symbols-outlined">lock</i>
          <input
            type="password"
            placeholder="Enter New Password"
            className="input-field"
            value={newPassword}
            onChange={handleChange}
            required
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="submit-button">Change Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
