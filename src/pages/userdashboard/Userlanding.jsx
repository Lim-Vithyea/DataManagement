import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Usersidebar from "../../components/Usersidebar";
import Userdashboard from "./Userdashboard";
import Header from "../../components/Header";
import { fetchUserData } from "../setting/Serviceuser";
import { PrivateRoute } from "../dashboard/Landing";
import AddStudentClass from "./AddStudentClass";
import DisplayData from "./DisplayData";
import InfrastructureForm from "./InfrastructureForm";
import Addstaff from "./build/Addstaff";

const Userlanding = () => {
  const [user, setUser] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const [dropdownData, setDropdownData] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await fetchUserData();
        setUser(data);
        // setDropdownData(data.dropdownData || []);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    getUserData();
  }, []);

  return (
    <div className="min-h-screen ">
      {/* Sidebar */}
      <div
        className={`fixed md:relative bg-gray-800 text-white transition-all duration-300 h-full 
        ${isSidebarOpen ? "left-0 w-2/3 sm:w-1/3" : "-left-full md:w-[15%]"} md:block`}>
        <Usersidebar />
      </div>
      {/* Main Content */}
      <div className="md:ml-60 m-1 min-w-[80%] transition-all duration-300">
        <Header schoolname={user.schoolname} image={user.image} username={user.username} onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}/>
        <div className=" transition-all duration-300 min-w-[80%]">
          <Routes>
            <Route path="/userdashboard" element={<PrivateRoute element={<Userdashboard />} />}/>
            <Route path="/add-student-class" element={<PrivateRoute element={<AddStudentClass />}/>}/>
            <Route path="/infrastructure" element={<PrivateRoute element={<InfrastructureForm/>}/>}/>
            <Route path ="/add-staff" element={<PrivateRoute element={<Addstaff/>}/>}/>
            <Route path="/data-display" element={<PrivateRoute element={<DisplayData />}/>}/>
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Userlanding;