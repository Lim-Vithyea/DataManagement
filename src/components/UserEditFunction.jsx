import React, { useState,useEffect } from 'react';
import axios from 'axios';

const UserEditFunction = ({ user, onClose, refreshData }) => {
  const [formData, setFormData] = useState({
    username: user.username,
    role: user.role
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      setFormData({
        username: user.username,
        role: user.role,
      });
    }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,[name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      const token = localStorage.getItem("token");
      const API = process.env.REACT_APP_API_URL;
      const res = await axios.patch(
        `${API}edituser/${user.id}`, formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(res);
      alert("User updated successfully");
      refreshData(); 
      onClose(); 
    } catch (error) {
      console.error("Update failed:", error);
      alert(error.response?.data?.error || "Update failed. Please try again.");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center bg-black/30 backdrop-blur-sm items-center z-50 
    ">
      <div className="bg-white p-6 rounded-lg  w-96 
      shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
        <h2 className="text-xl font-bold mb-4 text-center text-blue-600">Edit User Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 khmer-text" htmlFor="username">
              ឈ្មោះអ្នកប្រើប្រាស់
            </label>
            <input type="text" id="username" name="username" value={formData.username}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              required/>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 khmer-text" htmlFor="role">
              ប្រភេទអ្នកប្រើប្រាស់
            </label>
            <select id="role" name="role" value={formData.role}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              required>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          <div className="flex justify-between mt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 text-black rounded-md">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md"disabled={loading}>
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserEditFunction;
