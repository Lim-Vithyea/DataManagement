import React, { useState } from "react";
import { NavLink } from "react-router-dom";


const BuilderDropdown = ({ title, items = [] }) => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);

  return (
    <div className="dropdown">
      <button
        onClick={toggleDropdown}
        className={`dropdown-button flex items-center justify-between w-full px-4 py-2 rounded-t-sm transition-colors hover:bg-gray-700 khmer-text ${open ? "bg-gray-600 border-b-2 border-green-500" : ""}`}
      >
        {title}
        <span className="">{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div className="dropdown-content text-[15px] rounded-lg">
          {items.length > 0 ? (
            items.map((item, index) => (
              <NavLink
                key={index}
                to={item.to}
                className="dropdown-item block px-4 py-2 hover:bg-gray-600 rounded-sm khmer-text">
                {item.label}
              </NavLink>
            ))
          ) : (
            <div className="px-4 py-2">No items available</div>
          )}
        </div>
      )}
    </div>
  );
};

export default BuilderDropdown;
