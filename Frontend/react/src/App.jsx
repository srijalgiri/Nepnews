const App=() => {
  return(
        <div className="login-container">
          <h2 className="form-title">Log in with </h2>
            <div className="social-login">
              <button className="social-button">
              <img src="" alt="Google" className="social-icon" /> 
              </button>
              </div>   

                <p className="seperator"><span>or</span></p>
                <form action="#" className="login-page">
                  <div className="input-wrapper">
                  <i className="material-symbols-outlined">mail</i>
                    <input type="email" placeholder="Email Address " 
                    className="input-field" required />
                    
                  </div>

                  <div className="input-wrapper">
                  <i className="material-symbols-outlined">lock</i>
                    <input type="password" placeholder="Password " 
                    className="input-field" required />
                    
                  </div>
                  <a href="#" className="forgot-password">Forgot Password?</a>
                  <button className="login-button">Log In</button>
                </form>
                <p className="sign-up">Don&apos; t have an account? <a href="#"> Sign up</a></p> 
        </div>
  )
}

export default App