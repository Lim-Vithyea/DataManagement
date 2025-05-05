import axios from "axios";

export const showSchoolData = async () => {
    try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error("No token found");
        const API = import.meta.env.VITE_API_URL;
        const res = await axios.get(`${API}show_schools`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return res.data;  
    } catch (err) {
        console.error("Can't fetch the data", err);
        throw err; 
    }
};
