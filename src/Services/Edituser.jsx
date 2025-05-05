import axios from "axios";

// Update user
export const updateUser = async (userId, updatedUserData) => {
  try {
    const token = localStorage.getItem("token");
    const API = import.meta.env.VITE_API_URL;
    const res = await axios.put(`${API}/updateUser/${userId}`, updatedUserData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    console.error("Error updating user:", err.response?.data || err.message);
    throw err;
  }
};
