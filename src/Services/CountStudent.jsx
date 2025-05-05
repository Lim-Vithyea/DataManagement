import axios from "axios";

export const countStudent = async ()=>{
    try{
        const token = localStorage.getItem('token');
        const API = import.meta.env.VITE_API_URL;
        if (!token) throw new Error('No token found');
        const res = await axios.get(`${API}countedstudent`, {
        headers: { Authorization: `Bearer ${token}` },
        });
        return res.data;
    } catch (err) {
        console.error('Error fetching user data:', err);
        throw err;
    }
}