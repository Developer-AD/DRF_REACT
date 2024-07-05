import React, { useState } from "react";
import "./Sidebar.css";

const menuItems = [
  {
    name: "Dashboard",
    subMenu: [],
  },
  {
    name: "Introduction",
    subMenu: ["History", "Features of python", "Realtime applications"],
  },
  {
    name: "Data Types",
    subMenu: [
      "Int",
      "Float",
      "Bool",
      "Complex",
      "Str",
      "Bytes",
      "Bytearray",
      "Range",
      "List",
      "Tuple",
    ],
  },
  {
    name: "Operators",
    subMenu: ["Assignment Operator", "Comparison Operator", "Logical Operator"],
  },
  {
    name: "Conditionals",
    subMenu: ["If", "Else If", "Else If Ladder"],
  },
  {
    name: "Loopings",
    subMenu: ["While", "For", "Else If Ladder"],
  },
];

const Sidebar = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="navbar-left">
      <div className="sidebar">
        <ul>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <li
                className={`menu-item ${expandedItems[index] ? "active" : ""}`}
                onClick={() => toggleItem(index)}
              >
                <a href="#">
                  {item.name}
                  {item.subMenu.length > 0 && (
                    <span
                      className={`fas fa-caret-down ${
                        expandedItems[index] ? "rotate" : ""
                      }`}
                    ></span>
                  )}
                </a>
              </li>
              <ul className={`submenu ${expandedItems[index] ? "show" : ""}`}>
                {item.subMenu.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <a href="#">{subItem}</a>
                  </li>
                ))}
              </ul>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
