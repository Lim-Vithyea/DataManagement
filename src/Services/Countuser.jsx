
import axios from 'axios';
export const countUser = async () => {
  try {
    const token = localStorage.getItem('token');
    const API = import.meta.env.VITE_API_URL;
    if (!token) throw new Error('No token found');
    const res = await axios.get(`${API}countuser`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    console.error('Error fetching user data:', err);
    throw err;
  }
};
