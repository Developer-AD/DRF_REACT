import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const submitForm = (e) => {
    // alert('Submit form called');
    e.preventDefault();

    alert("Username :" + username + ", Password :" + password);

    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    // for (let [name, value] of formData) {
      // alert(`${name} = ${value}`);}

        // axios
        //   .post("http://127.0.0.1:8000/api/student-api/", {
        //     username: username,
        //     password: password,
        //   })
        //   .then((response) => {
        //     alert("Success response");
        //     console.log(response.data);
        //     setStudent(response.data);

        //     // After getting response redicted to dashboard.
        //     navigate("/dashboard");
        //   })
        //   .catch((error) => alert("Error Occured"));


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
                value={username}
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
                value={password}
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