import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoutAlert from "./Alert";
// import Usermangedata from "../pages/userdashboard/Usermangedata";
import UserDropdown from "./UserDropdown";
import dashboardIcon from "../asset/dashboard.svg";
import BuilderDropdown from "./BuilderDropdown";


const Usersidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setShowAlert(true);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  //  user page items
  const userPageItems2 = [
    { to: "/user/add-student-class", label: "បញ្ជូលទិន្នន័យសិស្ស " },
    { to: "/user/infrastructure", label: "ហេដ្ឋារចនាសម្ព័ន្ធ" },
    { to: "/user/add-staff",label: "បញ្ចូលចំនួនបុគ្គលិក",},
    
  ];
  const builderItem1 = [
    { to: "/user/data-display", label: "មើលទិន្នន័យ" },
    { to: "/user/infrastructure", label: "ហេដ្ឋារចនាសម្ព័ន្ធ" }
  ];
  return (
    <>
    <div className="overflow-y-auto">
      <button
        onClick={toggleSidebar}
        className="fixed top-2 left-2 z-0 md:hidden p-2 text-white rounded-md font-bold bg-blue-500 text-xl">
        ☰
      </button>
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen bg-[#1B1B69] text-white transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-[15%]`}>
        <div className="h-full px-4 pt-6 overflow-y-auto">
          <div className="flex justify-center h-[15%]">
            <img
              src="/P10.ico"
              alt="Emblem"
              className="w-[100px] h-[100px]"
            />
          </div>
          <p className="text-lg font-bold text-center khmer-text pb-3">
            នាយកដ្ឋានបឋមសិក្សា
          </p>
          <div className="">
          <ul className="space-y-4 font-medium ">
            <li>
              <NavLink
                to="/user/userdashboard"
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-t-sm transition-colors
                  ${
                    isActive
                      ? "bg-gray-600 border-b-2 border-green-500"
                      : "hover:bg-gray-700"
                  }`
                }>
                <img
                  src={dashboardIcon}
                  alt="Dashboard Icon"
                  className="w-6 h-6"
                />
                <span className="ms-3 khmer-text">តារាង</span>
              </NavLink>
            </li>
            <UserDropdown
              className="ms-3 khmer-text"
              title="📁 ទិន្នន័យ"
              items={userPageItems2}
            />
            <BuilderDropdown
              className="ms-3 khmer-text"
              title="📁​ មើលទិន្នន័យ"
              items={builderItem1}
            />
          </ul>
          </div>
          <div className="flex justify-center h-[15%]">
            <div className="fixed bottom-6 text-center">
              <p className="text-xs text-gray-300 font-semibold">
                Created by Chea
              </p>
              <button
                onClick={handleLogout}
                className="text-red-500 font-normal hover:underline">
                Log out
              </button>
              {showAlert && <LogoutAlert />}
            </div>
          </div>
        </div>
      </aside>
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 backdrop-blur-sm md:hidden"
          onClick={toggleSidebar}></div>
      )}
      </div>
    </>
  );
};

export default Usersidebar;
