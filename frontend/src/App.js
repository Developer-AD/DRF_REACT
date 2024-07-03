import logo from './logo.svg';
import './App.css';

import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Nav old';
import ContentArea from './components/ContentArea/ContentArea';

function App() {
  return (
    <>
      {/* <Login/> */}
      {/* <Register/> */}
      <Navbar/>
      <Home />
      {/* <ContentArea /> */}
    </>
  );
}

export default App;
