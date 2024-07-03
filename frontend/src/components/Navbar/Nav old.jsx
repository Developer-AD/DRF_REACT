import React from "react";
import "./Navbar.css";

// import { Link } from "react-router-dom";

// NavItem Component
function NavItems({ item, url }) {
  return (
    <li>
      <a href={url}>{item}</a>
    </li>
  );
}

// UserIcon Component
function UserIcon() {
  return (
    <div className="user">
      <i className="fa-solid fa-user-tie"></i>
    </div>
  );
}

export default function Navbar() {
  return (
    <div className="navbar-top">
      <div className="logo">LearnPy</div>
      <div className="items">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />

          <a href="#">
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
        </div>
        <ul>
          <NavItems url="#" item="Home" />
          <NavItems url="#" item="Blog" />
          <NavItems url="#" item="About" />
          <NavItems url="#" item="Contact" />
          <NavItems url="#" item="Login" />
          <NavItems url="#" item="Register" />
        </ul>
        
        <UserIcon/>
      </div>
    </div>
  );
}
