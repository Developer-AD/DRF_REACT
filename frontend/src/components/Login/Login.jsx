import React from 'react'
import './Login.css'

export default function Login() {
  return (
        <div className="form-design-login">
          <div className="form-box">
            <h2>Login</h2>
            <form method="post">
              <div className="input-box">
                <span className="icon">
                  <ion-icon name="mail"></ion-icon>
                </span>
                <input type="text" maxlength="28" required />
                <label>Email</label>
              </div>

              <div className="input-box">
                <span className="icon">
                  <ion-icon name="lock-closed"></ion-icon>
                </span>
                <input type="password" maxlength="28" required />
                <label>Password</label>
              </div>

              <div className="forgot-password">
                <a href="#">Forgot Password?</a>
              </div>

              <button className="btn" type="submit">
                Login
              </button>

              <div className="login-register">
                <p>
                  Don't have an account? <a href="#">Register</a>
                </p>
              </div>
            </form>
          </div>
        </div>
  );
}