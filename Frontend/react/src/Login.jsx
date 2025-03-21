import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      {/* ✅ Logo Section */}
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>

      <h2 className="form-title">Log in</h2>

      <div className="social-login">
        <button className="social-button">
          <img src="google.png" alt="Google" className="social-icon" />
        </button>
      </div>   

      <p className="separator"><span>or</span></p>

      <form action="#" className="login-page">
        <div className="input-wrapper">
          <i className="material-symbols-outlined">mail</i>
          <input type="email" placeholder="Email Address" className="input-field" required />
        </div>

        <div className="input-wrapper">
          <i className="material-symbols-outlined">lock</i>
          <input type="password" placeholder="Password" className="input-field" required />
        </div>

        <Link to="/forgotpassword" className="forgot-password">Forgot Password?</Link> {/* Update the link */}
        <button className="login-button">Log In</button>
      </form>

      <p className="sign-up">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
