import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState([]);

  const showData = () => {
    // alert('Show Data Called');
    axios.get("http://127.0.0.1:8000/api/student-api/")
    .then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  };

  const handleUpdate = (id) => {
    alert('Handle Update Clicked');
    // axios.put("http://127.0.0.1:8000/api/student-api/", )
    // .then((response) => {
    //   console.log(response.data);
    //   setData(response.data);
    // });
  };

  const handleDelete = (id) => {
    // alert('Handle Delete Clicked');
    axios.delete(`http://127.0.0.1:8000/api/student-api/${id}`)
     .then((response) => {
        console.log(response);
        showData();
      });
  };

  useEffect(() => {
    // alert('Use Effect is running...');
    showData();
  }, []);


  const storeLocally = (id, name, roll, city) => {
    alert('Store Locally Clicked');
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("roll", roll);
    localStorage.setItem("city", city);
  };


  return (
    <div>
      <Navbar />
      <div>
        <Link to="/">Home</Link>
      </div>
      <center>
        <h2>Welcome to student dashboard.</h2> <hr />
      </center>
      <h2 onClick={showData}>Show Data</h2>

      <div>
        <table>
          <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Roll No</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
          {data.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.roll}</td>
                <td>{item.city}</td>
                <td>
                  <Link to="/update">
                  <button onClick={() => storeLocally(item.id, item.name, item.roll, item.city)}>edit</button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => handleDelete(item.id)}>delete</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
