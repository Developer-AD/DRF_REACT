import React from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";

// HomeItem Component
function HomeItem({ item, url }) {
  return (
    <li className="home-items">
      <a href={url}>
        <span className="text nav-text">{item}</span>
      </a>
    </li>
  );
}

// Logo Component
function Logo() {
  return <div className="logo">LearnPy</div>;
}

// SearchBar Component
function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
      <a href="/">
        <i className="fa-solid fa-magnifying-glass"></i>
      </a>
    </div>
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

// Navbar Component Export.
export default function Navbar() {
  return (
    <header>
      <div className="navbar-top">
        <Logo />
        <div className="items">
          <SearchBar />
          <ul>
            <HomeItem item="Home" url="/" />
            <HomeItem item="Blog" url="/blog" />
            <HomeItem item="Contact" url="/contact" />
            <HomeItem item="Login" url="/login" />
          </ul>
          <UserIcon />
        </div>
      </div>
    </header>
  );
}
