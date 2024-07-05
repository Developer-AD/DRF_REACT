import React from 'react'

export default function Menubar() {
  return (
    <div className="navbar-left">
      <div className="sidebar">
        <ul>
          <li>
            <a href="">Dashboard</a>
          </li>

          <li className="menu-item">
            <a href="">
              Introduction
              <span className="fas fa-caret-down"></span>
            </a>
          </li>
          <ul className="submenu">
            <li>
              <a href="">History</a>
            </li>
            <li>
              <a href="">Features of python</a>
            </li>
            <li>
              <a href="">Realtime applications</a>
            </li>
          </ul>

          <li className="menu-item">
            <a href="">
              Data Types
              <span className="fas fa-caret-down"></span>
            </a>
          </li>
          <ul className="submenu">
            <li>
              <a href="">Int</a>
            </li>
            <li>
              <a href="">Float</a>
            </li>
            <li>
              <a href="">Bool</a>
            </li>
            <li>
              <a href="">Complex</a>
            </li>
            <li>
              <a href="">Str</a>
            </li>
            <li>
              <a href="">Bytes</a>
            </li>
            <li>
              <a href="">Bytearray</a>
            </li>
            <li>
              <a href="">Range</a>
            </li>
            <li>
              <a href="">List</a>
            </li>
            <li>
              <a href="">Tuple</a>
            </li>
          </ul>

          <li className="menu-item">
            <a href="">
              Operators
              <span className="fas fa-caret-down"></span>
            </a>
          </li>
          <ul className="submenu">
            <li>
              <a href="">Assignment Operator</a>
            </li>
            <li>
              <a href="">Comparison Operator</a>
            </li>
            <li>
              <a href="">Logical Operator</a>
            </li>
          </ul>

          <li className="menu-item">
            <a href="">
              Conditionals
              <span className="fas fa-caret-down"></span>
            </a>
          </li>
          <ul className="submenu">
            <li>
              <a href="">If</a>
            </li>
            <li>
              <a href="">Else If</a>
            </li>
            <li>
              <a href="">Else If Ladder</a>
            </li>
          </ul>

          <li className="menu-item">
            <a href="">
              Loopings
              <span className="fas fa-caret-down"></span>
            </a>
          </li>
          <ul className="submenu">
            <li>
              <a href="">While</a>
            </li>
            <li>
              <a href="">For</a>
            </li>
            <li>
              <a href="">Else If Ladder</a>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
}
