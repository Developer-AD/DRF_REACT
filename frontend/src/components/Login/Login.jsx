import React, { useState } from 'react'
import './Login.css'

export default function Login() {

  // const [formData, setFormData] = useState({
  //   username:'',
  //   password:''
  // });

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const handleChange = (e) => {
  //   const { key, value } = e.target;
  //   // setFormData({...formData, [key]: value})
  //   // alert('FormData : ', setFormData);
  // }

  const submitForm = (e) => {
    e.preventDefault();
    alert("Username :" + username + ", Password :" + password);
  }


  return (
    <>
      <div className="form-design-login">
        <div className="form-box">
          <h2>Login</h2>
          <form method="post">
            <div className="input-box">
              <span className="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input
                type="text"
                maxlength="28"
                required
                onChange={(e)=>{setUsername(e.target.value)}}
              />
              <label>Email</label>
            </div>

            <div className="input-box">
              <span className="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input
                type="password"
                maxlength="28"
                onChange={(e)=>{setPassword(e.target.value)}}
                required
              />
              <label>Password</label>
            </div>

            <div className="forgot-password">
              <a href="">Forgot Password?</a>
            </div>

            <button onClick={submitForm} className="btn" type="submit">
              Login
            </button>

            <div className="login-register">
              <p>
                Don't have an account? <a href="">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}