import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./pass.css"; // Assuming you have an external CSS file for styling

const ForgotPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    // Simulate password change and navigate back to the login page
    alert("Password changed successfully!");
    navigate("/login"); // Navigate back to login page
  };

  return (
    <div className="forgot-password-container">
      {/* Circular Back Button */}
      <button className="back-button" onClick={() => navigate("/login")}>
        <i className="material-symbols-outlined">arrow_back</i>
      </button>

      <h2 className="form-title">Forgot Password</h2>

      <p className="description">
        Enter a new password and confirm it. Make sure it's at least 8 characters long and secure.
      </p>

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

        <div className="input-wrapper">
          <i className="material-symbols-outlined">lock</i>
          <input
            type="password"
            placeholder="Confirm New Password"
            className="input-field"
            value={confirmPassword}
            onChange={handleConfirmChange}
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
