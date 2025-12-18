import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div className="body-login">
      <div className={`container ${isActive ? 'active' : ''}`}>
        <div className="form-box login">
          <form action="">
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <i className='bx bx-envelope'></i>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <i class='bx  bx-lock-keyhole'></i>
            </div>
            <div className="forgetlink">
              <a href="/">Forgot Password?</a>
            </div>
            <button type="submit" className="btn">Login</button>
            <p>or Login with social platforms</p>
            <div className="socialicons">
              <a href="https://accounts.google.com.my/" target="_blank" rel="noopener noreferrer"><i class='bxl  bx-google'></i> </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i class='bxl  bx-facebook-square'></i> </a>
              <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><i class='bxl bx-github'></i></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i class='bxl  bx-linkedin-square'></i> </a>
            </div>
          </form>
        </div>

        <div className="form-box register">
          <form action="">
            <h1>Registration</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <i className='bx bx-user'></i>
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" required />
              <i className='bx bx-envelope'></i>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <i class='bx  bx-lock-keyhole'></i>
            </div>
            <button type="submit" className="btn">Register</button>
            <p>or register with social platforms</p>
            <div className="socialicons">
              <a href="https://accounts.google.com.my/" target="_blank" rel="noopener noreferrer"><i class='bxl  bx-google'></i> </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i class='bxl  bx-facebook-square'></i> </a>
              <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><i class='bxl  bx-github'></i> </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i class='bxl  bx-linkedin-square'></i> </a>
            </div>
          </form>
        </div>

        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            <h1>Hello! Welcome!</h1>
            <p>Don't have an account?</p>
            <button type="button" className="btn register-btn" onClick={handleRegisterClick}>Register</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Welcome Back!</h1>
            <p>Already have an account?</p>
            <button type="button" className="btn login-btn" onClick={handleLoginClick}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );

}

