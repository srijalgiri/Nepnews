import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
const Login = () => {

  const handleSocialLogin = (provider) => {
    console.log(`${provider} login successful`);

  };

  return (
    <div className="login-container">
      <div className="left-container">
        <h1>Welcome!</h1>
        <p>Welcome to NepNews, your gateway to real-time updates, in-depth analysis, and breaking news from around the world. Stay informed with trusted journalism, curated stories, and exclusive reports tailored to your interests.</p>
      </div>
      <div className="right-container">
        <img className="logo" src="/image.png" alt="Logo" />
        <h2>Login</h2>
        <form>
          <div className="input-container">
            <label>Email</label>
            <div className="input-wrapper">
              <i className="material-symbols-outlined">mail</i>
              <input type="email" placeholder="Enter your email" required />
            </div>
          </div>
          <div className="input-container">
            <label>Password</label>
            <div className="input-wrapper">
              <i className="material-symbols-outlined">lock</i>
              <input type="password" placeholder="Enter your password" required />
            </div>
          </div>
          <div className="forgot-password">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <button type="submit" className="login-btn">Login</button>
          <div className="or-container">
            <span>OR</span>
          </div>
          <div className="social-login">
            
            <button
              type="button"
              className="facebook-btn"
              onClick={() => handleSocialLogin('Facebook')}
            >
              <i className="fab fa-facebook-f"></i> Login with Facebook
            </button>
            <button
              type="button"
              className="google-btn"
              onClick={() => handleSocialLogin('Google')}
            >
              <i className="fab fa-google"></i> Login with Google
            </button>
          </div>
          <p className="sign-up">
  Don't have an account? <Link to="/signup">Sign up</Link>
</p>

        </form>
      </div>
    </div>
  );
};

export default Login;
