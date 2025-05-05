import axios from "axios";

export const handleDelete = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      const token = localStorage.getItem("token");
      const API = import.meta.env.VITE_API_URL;
      await axios.delete(`${API}deleteuser/${userId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      console.log("User delected successfully")
    } catch (error) {
      console.error("Delete failed:", error);
      alert(error.response?.data?.error || "Delete failed. Please try again.");
    }
  };
  