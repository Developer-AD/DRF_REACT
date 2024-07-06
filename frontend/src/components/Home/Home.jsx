import React from 'react'
import './Home.css'
import ContentArea from '../ContentArea/ContentArea'
import Sidebar from '../Sidebar/Sidebar'


import Navbar from '../Navbar/Navbar'
import Login from '../Login/Login'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <Navbar />
        <div>
      <Link to="/dashboard">Dashboard</Link>
        </div>
      <div className="center">
        <Login />
      </div>
    </div>
  );
}


// export default function Home() {
//   return (
//     <>
//     <main>
//         <Sidebar/>
//         <ContentArea/>
        
//     </main>
//     <footer></footer>
//     </>
//   )
// }
