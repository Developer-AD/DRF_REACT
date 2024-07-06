import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";


export default function Student() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [roll, setRoll] = useState(0);
  const [city, setCity] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(" " + name + " " + roll + " " + city);

    const formData = new FormData();
    
    formData.append("name", name);
    formData.append("roll", roll);
    formData.append("city", city);


    axios
      .post("http://127.0.0.1:8000/api/student-api/", formData)
      .then((response) => {
        // alert("Success response");
        console.log(response.data);

        // After getting response redicted to dashboard.
        navigate("/dashboard");
      });
  };

  return (
    <div>
      <div>
        <Link to="/dashboard">Student Dashboard</Link>
      </div>

      <h1>Add Student Data</h1>

      <form action="">
        Name :
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          name="name"
          value={name}
        />
        <br />
        Roll No :
        <input
          type="number"
          onChange={(e) => {
            setRoll(e.target.value);
          }}
          name="roll"
          value={roll}
        />
        <br />
        City :
        <input
          type="text"
          onChange={(e) => {
            setCity(e.target.value);
          }}
          name="city"
          value={city}
        />{" "}
        <br />
        <button onClick={handleSubmit}>ADD</button>
      </form>
    </div>
  );
}
