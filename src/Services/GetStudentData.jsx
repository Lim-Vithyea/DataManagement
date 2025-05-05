import axios from "axios";
import { useState } from "react";


export const GetStudentData = async () => {
    const [error,setError] = useState();
    try {
      const token = localStorage.getItem("token");
      const API = import.meta.env.VITE_API_URL;
      const response = await axios.get(
        `${API}showstudentdata`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return response.data;
    } catch (err) {
      setError("Error fetching data: " + err.message);
    } 
}