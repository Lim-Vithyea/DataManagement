
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../index.css"
const DropdownManage = ({ title, items }) => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);

  return (
    <div className="dropdown">
      <button
        onClick={toggleDropdown} 
        className="dropdown-button flex items-center justify-between w-full px-4 py-3 rounded-lg transition-colors hover:bg-gray-700 khmer-text">
        {title}
        <span className=''>{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div className="dropdown-content text-[15px] rounded-lg ">
          {items.map((item, index) => (
            <NavLink key={index}
              to={item.to}
              className="dropdown-item block px-4 py-2 hover:bg-gray-600 rounded-lg khmer-text">
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownManage;
