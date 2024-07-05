import logo from './logo.svg';
import './App.css';

import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import ContentArea from './components/ContentArea/ContentArea';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <>
      {/* <Register/> */}
      <Navbar/>
      <Login/>
      {/* <Home /> */}
      {/* <Sidebar /> */}
      {/* <ContentArea /> */}
    </>
  );
}

export default App;
