import React from 'react'
import './Register.css'

export default function Register() {
  return (
    <div className="form-design-register">
      <div className="form-box">
        <h2>Register</h2>
        <form method="post">
          <div className="input-box">
            <span className="icon">
              <ion-icon name="person"></ion-icon>
            </span>
            <input type="text" maxlength="25" required />
            <label>Full Name</label>
          </div>

          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail"></ion-icon>
            </span>
            <input type="text" maxlength="25" required />
            <label>Email</label>
          </div>

          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input type="password" maxlength="28" required />
            <label>Password</label>
          </div>

          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input type="password" maxlength="28" required />
            <label>Confirm Password</label>
          </div>

          <button className="btn" type="submit" onclick="closePopup()">
            Register
          </button>

          <div className="login-register">
            <p>
              Already have an account? <a href="">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
