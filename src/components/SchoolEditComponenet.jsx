

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../index.css"

const SchoolEditComponent = ({ school, onClose, refreshData }) => {
  const [formData, setFormData] = useState({
    school_code: school.school_code,
    schoolname: school.schoolname,
  });

  useEffect(() => {
    setFormData({
      school_code: school.school_code,
      schoolname: school.schoolname,
    });
  }, [school]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData); // Add this line to check the form data
    try {
      const token = localStorage.getItem("token");
      const API = import.meta.env.VITE_API_URL;
      const res = await axios.patch(
        `${API}/schools/${school.sid}`,formData,
        { headers: { Authorization: `Bearer ${token}` }}
      );
      console.log(res);
      alert("School updated successfully");
      refreshData();
      onClose();
    } catch (error) {
      console.error("Update failed:", error);
      alert("Update failed. Please try again.");
    }
  };
  return (
    <div className="fixed inset-0 flex items-center bg-black/30 backdrop-blur-sm justify-center">
      <div className="bg-white p-5 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Edit School</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 khmer-text">លេខកូតសាលារៀន</label>
            <input
              type="text"
              name="school_code"
              value={formData.school_code}
              onChange={handleChange}
              className="w-full p-2 border rounded"/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 khmer-text">ឈ្មោះសាលារៀន</label>
            <input
              type="text"
              name="schoolname"
              value={formData.schoolname}
              onChange={handleChange}
              className="w-full p-2 border rounded khmer-text"/>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SchoolEditComponent;

