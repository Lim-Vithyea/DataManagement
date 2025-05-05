import React, { useState } from 'react'
import axios from 'axios';
import Schooltable from '../../components/Schooltable';

const AddSchool = () => {

const [message,setMessage] = useState("");
const [schoolData, setSchoolData] = useState({
  school_code: "",
  schoolname: ""
});

const handleChange = (e) =>{
    const { name, value } = e.target;
    setSchoolData({ ...schoolData, [name]: value });
} 

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const token = localStorage.getItem('token');
    const API = process.env.REACT_APP_API_URL;
    const response = await axios.post(`${API}add_school`, schoolData, {
      headers: { Authorization:  `Bearer ${token}` },
    });
    setMessage(response.data.message);
    setSchoolData({ school_code: "", schoolname: ""});
  } catch (error) {
    console.error("Error submitting data:", error);
    const errorMsg = error.response?.data?.error || error.response?.data?.details || "Unknown error";
    setMessage(`Failed to add school or School code already exist: ${errorMsg}`);
  }
};
  return (
    <div>
      <div className="w-full bg-white flex items-center justify-center border-b-1">
        <img src="/P10.ico" alt="Emblem" className="w-6 h-6" />
        <h1 className="text-start pt-3 pb-3 font-bold text-xs">Manage Data</h1>
      </div>
      <div className='w-[98%] mx-auto mt-4 bg-white rounded-xl p-6 sm:p-8 lg:p-10 shadow-lg'>
        <h1 className='text-start pt-3 pb-3 font-bold text-blue-500 text-xl khmer-text'>គ្រប់គ្រងសាលារៀន</h1>
        {message && (<div className="mt-4 p-2 bg-blue-100 text-blue-700 rounded">{message}</div>)}
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className='flex gap-10'>
          <div>
            <label className="block text-sm font-medium text-gray-700 khmer-text">លេខកូតសាលារៀន (10ខ្ទង់)</label>
            <input type="number" name="school_code" id="school_code"  required  placeholder="Enter school code"
                max="9999999999"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm" 
                onChange={handleChange} value={schoolData.school_code}/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 khmer-text">ឈ្មោះសាលារៀន</label>
            <input type="text" name="schoolname" id="schoolname" placeholder="Enter school name"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                required onChange={handleChange} value={schoolData.schoolname}/>
          </div>
          </div>
          <div className="flex justify-end mt-5 mr-3 ">
          <button type="submit"
            className="w-[180px] h-[50px] bg-blue-700 rounded-xl hover:bg-blue-400 transition-all duration-300 shadow-lg text-white font-bold khmer-text">
            បញ្ចូល
          </button>
        </div>
    </form>
    </div>
    <Schooltable/>
    </div>
  )
}

export default AddSchool
