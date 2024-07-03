import React from 'react'
import './Register.css'

export default function Register() {
  return (
    <div class="form-design-register">
      <div class="form-box">
        <h2>Register</h2>
        <form method="post">
          <div class="input-box">
            <span class="icon">
              <ion-icon name="person"></ion-icon>
            </span>
            <input type="text" maxlength="25" required />
            <label>Full Name</label>
          </div>

          <div class="input-box">
            <span class="icon">
              <ion-icon name="mail"></ion-icon>
            </span>
            <input type="text" maxlength="25" required />
            <label>Email</label>
          </div>

          <div class="input-box">
            <span class="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input type="password" maxlength="28" required />
            <label>Password</label>
          </div>

          <div class="input-box">
            <span class="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input type="password" maxlength="28" required />
            <label>Confirm Password</label>
          </div>

          <button class="btn" type="submit" onclick="closePopup()">
            Register
          </button>

          <div class="login-register">
            <p>
              Already have an account? <a href="#">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
