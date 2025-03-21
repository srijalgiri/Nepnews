import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    setError("");

    // Simulate password change success
    alert("Password changed successfully!");
    
    // Redirect back to login page
    navigate("/");
  };

  return (
    <div className="forgot-password-container">
      <h2 className="form-title">Reset Password</h2>

      <form onSubmit={handleSubmit} className="forgot-password-page">
        <div className="input-wrapper">
          <i className="material-symbols-outlined">lock</i>
          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            className="input-field"
            value={newPassword}
            onChange={handlePasswordChange}
            required
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="reset-button">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
