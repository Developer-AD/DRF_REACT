import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from 'axios'

export default function Update() {
  let params = useParams();
  let navigate = useNavigate();

  const [student, setStudent] = useState({id: 0, name: "", roll:0, city: ""})



  useEffect(() => {
      const loadStudent = () => {
        axios
          .get(`http://127.0.0.1:8000/api/student-api/${params.id}`)
          .then((response) => {
            setStudent(response.data);
          });
      };
    loadStudent();
  }, [params.id]);

  const handleInputs = (event) => {
    const { name, value } = event.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value, // Update the specific field in student state
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();

     axios
       .put(`http://127.0.0.1:8000/api/student-api/${params.id}`, student)
       .then((response) => {
        //  alert("Success response");
         console.log(response);

         // After getting response redicted to dashboard.
         navigate("/dashboard");
       });

  };

  return (
    <div>
      <div>
        <Link to="/dashboard">Student Dashboard</Link>
      </div>

      <h1>Update Student Data</h1>

      <form action="">
        Name :
        <input
          type="text"
          onChange={handleInputs}
          name="name"
          value={student.name}
        />
        <br />
        Roll No :
        <input
          type="number"
          onChange={handleInputs}
          name="roll"
          value={student.roll}
        />
        <br />
        City :
        <input
          type="text"
          onChange={handleInputs}
          name="city"
          value={student.city}
        />{" "}
        <br />
        <button onClick={handleSubmit}>Update</button>
      </form>
    </div>
  );
}
