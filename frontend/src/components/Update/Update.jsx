import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function Update() {

  const navigate = useNavigate();


  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [roll, setRoll] = useState(0);
  const [city, setCity] = useState("");

  useEffect(() => {
      setId(localStorage.getItem("id"));
      setName(localStorage.getItem("name"));
      setRoll(localStorage.getItem("roll"));
      setCity(localStorage.getItem("city"));
      
  },[]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(id + " " + name + " " + roll + " " + city);

     axios
          .put(`http://127.0.0.1:8000/api/student-api/${id}`, {
            name: name,
            roll: roll,
            city: city,
          })
          .then((response) => {
            alert("Success response");
            console.log(response);

            // After getting response redicted to dashboard.
            navigate("/dashboard");
          });


  };

  return (
    <div>
      <h1>Update Student Data</h1>

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
            setCity(e.target.value)}}
          name="city"
          value={city}
        /> <br />
        <button onClick={handleSubmit}>Update</button>
      </form>
    </div>
  );
}
