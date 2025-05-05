import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Managedata from "../managedata/Managedata";
import DropdownManage from "../../components/DropdownManage";
import Profile from "../setting/Profile";
import AddSchool from "../managedata/AddSchool";
import ViewData from "../managedata/ViewData";
import { useNavigate } from "react-router-dom";
import Login from "../login/Login";

export const PrivateRoute = ({ element }) => {
  const token = localStorage.getItem("token");
  return token ? element : <Navigate to="/" replace />;
};

const Landing = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(!token){
      navigate(<PrivateRoute elements={<Login/>}/>)
    }
  })


  return (
    <div className="min-h-screen">
      <Sidebar />
      <div className="md:ml-64 transition-all duration-300">
        <Routes>
          <Route path="/dashboard"element={<PrivateRoute element={<Dashboard />} />}/>
          <Route path="/managedata" element={<PrivateRoute element={<Managedata />} />}/>
          <Route path="/managedata" element={<PrivateRoute element={<DropdownManage />} />}/>
          <Route path="/view-data" element={<PrivateRoute element={<ViewData/>} />}/>
          <Route path="/add_school" element={<PrivateRoute element={<AddSchool/>} />}/>
          <Route path="/setting" element={<PrivateRoute element={<Profile />} />}/>
         <Route path="*" element={<Navigate to="dashboard" />} />
        </Routes>
      </div>
    </div>
  );
};

export default Landing;
