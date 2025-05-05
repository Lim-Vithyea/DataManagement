
import React, {  useEffect, useState } from "react";
import axios from "axios";
import { getSchool } from "../../Services/Getschool";
import "../../index.css"

const ViewData = () => {
  const [studentData, setStudent] = useState([]);
  const [sid, setSid] = useState('');
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    const fetchStudentData = async () => {
      setLoading(true);  
      try {
        const token = localStorage.getItem("token");
        const API = import.meta.env.VITE_API_URL;
        const response = await axios.get(
          `${API}showstudentdataforadmin`,
          {
            params: { sid },  
            headers: { Authorization: `Bearer ${token}` }
          }
        );
        setStudent(response.data);
        console.log(response.data)
      } catch (err) {
        console.log("Error fetching data: " + err.message);
      } finally {
        setLoading(false);  
      }
    };
  
    const getSchoolData = async () => {
      try {
        const data = await getSchool();
        setSchools(data);
      } catch {
        console.log("Can't fetch school data");
      }
    };
    fetchStudentData(); 
    getSchoolData();  
  }, [sid]);  

  const handleSearchChange = (e) => {
    setSid(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="w-full bg-white flex items-center justify-center border-b-1">
        <img src="/P10.ico" alt="Emblem" className="w-6 h-6" />
        <h1 className="text-start pt-3 pb-3 font-bold text-xs">Manage Data</h1>
      </div>
      <div className="w-[98%] mx-auto my-6 bg-white p-6 rounded-xl shadow-lg">
        <h1 className="font-bold text-2xl text-blue-700 khmer-text">មើលទិន្នន័យ</h1>
        <div className="w-[30%] py-5 ">
        <div>
            <label htmlFor="schoolid" className="block text-sm font-medium text-gray-700 khmer-text">សាលារៀន</label>
            <input 
              list="schoolList" 
              name="schoolid" 
              id="schoolid" 
              onChange={handleSearchChange} 
              value={sid} 
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="ជ្រើសរើសសាសារៀន" />
            <datalist id="schoolList">
              {schools.map((school) => (
                <option key={school.id} value={school.sid}>
                  {school.schoolname}
                </option>
              ))}
            </datalist>
          </div>
        </div>
        <div className="w-full  rounded-lg overflow-hidden">
          <h2 className="p-2 font-bold text-blue-600 khmer-text text-center sm:text-xs md:text-xl lg:text-xl">
            ទិន្នន័យសិស្សសាលា
          </h2>
          {/* Loading Indicator */}
          {loading && <p className="text-center text-gray-500">Loading...</p>}
          <div className="overflow-x-auto sm:text-xs md:text-xs lg:text-lg">
            <table className="min-w-max w-full bg-white">
              <thead className="bg-gray-100">
                {/* <tr className="khmer-text text-gray-700">
                  <th className="px-2 py-3 border-2 border-blue-300 text-center text-blue-500 khmer-text">កម្រិត</th>
                  <th className="px-2 py-3 border-2 border-blue-300 text-center text-blue-500 khmer-text">ចំនួនថ្នាក់</th>
                  <th className="px-2 py-3 border-2 border-blue-300 text-center text-blue-500 khmer-text">ចំនួនសិស្សសរុប</th>
                  <th className="px-2 py-3 border-2 border-blue-300 text-center text-blue-500 khmer-text">ចំនួនសិស្សស្រី</th>
                  <th className="px-2 py-3 border-2 border-blue-300 text-center text-blue-500 khmer-text">សរុប</th>
                </tr> */}
              </thead>
              <tbody>
                {studentData.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-3 py-2 text-center text-gray-500 khmer-text">No data available</td>
                  </tr>
                ) : (
                  studentData.map((data) => (
                    <React.Fragment key={data.id}>
                      <tr>
                        <td className="px-2  border-blue-300 khmer-text text-center pt-4" colSpan="7">
                            <strong className="khmer-text text-blue-500">{data.school_name}</strong>
                        </td>
                        </tr>
                      {/* Kindergarten Row */}
                      <tr className="khmer-text text-gray-700 bg-gray-200">
                        <th className="px-2 py-3 border-2 border-blue-300 text-center text-blue-500 khmer-text">កម្រិត</th>
                        <th className="px-2 py-3 border-2 border-blue-300 text-center text-blue-500 khmer-text">ចំនួនថ្នាក់</th>
                        <th className=" border-2 border-blue-300 text-center text-blue-500 khmer-text">ចំនួនសិស្សសរុប</th>
                        <th className=" border-2 border-blue-300 text-center text-blue-500 khmer-text">ចំនួនសិស្សស្រី</th>
                        <th className=" border-2 border-blue-300 text-center text-blue-500 khmer-text">សរុប</th>
                        <th className=" border-2 border-blue-300 text-center text-blue-500 khmer-text">បន្ទប់សរុប</th>
                        <th className=" border-2 border-blue-300 text-center text-blue-500 khmer-text">ថ្ងៃបង្កើត</th>
                        </tr>
                      <tr className="hover:bg-gray-50 text-center sm:text-xs md:text-xs lg:text-lg">
                        <td className="px-2 py-3 border-2 border-blue-300 khmer-text">ថ្នាក់មត្តេយ្យ</td>
                        <td className="px-2 py-3 border-2 border-blue-300 khmer-text">{data.kindergarten} បន្ទប់</td>
                        <td className=" border-2 border-blue-300 text-blue-500 khmer-text">{data.total_kindergarten_students} នាក់</td>
                        <td className=" border-2 border-blue-300 text-pink-500 khmer-text">{data.female_kindergarten_students} នាក់</td>
                        <td className=" border-2 border-blue-300 text-blue-500 khmer-text" rowSpan="7">
                          {data.total_kindergarten_students + 
                           data.total_grade1 + 
                           data.total_grade2 + 
                           data.total_grade3 + 
                           data.total_grade4 + 
                           data.total_grade5 + 
                           data.total_grade6
                          }
                          <span className="khmer-text text-blue-500"> នាក់</span>
                        </td>
                        <td className=" border-2 border-blue-300 text-blue-500 khmer-text" rowSpan="7">
                          {
                            data.grade1 + 
                            data.grade2 + 
                            data.grade3 + 
                            data.grade4 +
                            data.grade5 + 
                            data.grade6 + 
                            data.kindergarten
                          } បន្ទប់</td>
                        <td className=" border-2 border-blue-300 text-blue-500 khmer-text" rowSpan="7">
                      	  {new Date(data.created_date).toLocaleDateString('en-GB')}
                        </td>
                      </tr>

                      {/* Grades Rows */}
                      {[1, 2, 3, 4, 5, 6].map((grade) => (
                        <tr key={grade} className="hover:bg-gray-50 text-center khmer-text">
                          <td className="px-2 py-3 border-2 border-blue-300 khmer-text">ថ្នាក់ទី{grade}</td>
                          <td className="px-2 py-3 border-2 border-blue-300 khmer-text">{data[`grade${grade}`]} បន្ទប់</td>
                          <td className="px-2 py-3 border-2 border-blue-300 text-blue-500 khmer-text">{data[`total_grade${grade}`]} នាក់</td>
                          <td className="px-2 py-3 border-2 border-blue-300 text-pink-500 khmer-text">{data[`female_grade${grade}`]} នាក់</td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewData;

