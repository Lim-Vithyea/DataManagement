import React, { useState, useEffect } from "react";
import axios from "axios";

function DisplayData() {
  const [studentData, setStudentData] = useState([]);
  const [error, setError] = useState(null);
 
  // Function to fetch data from the API
  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const token = localStorage.getItem("token");
        const API = import.meta.env.VITE_API_URL;
        const response = await axios.get(
          `${API}showstudentdata`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setStudentData(response.data);
        console.log(response.data);
        
      } catch (err) {
        setError("Error fetching data: " + err.message);
      } 
    };
    try{
      fetchStudentData();
    } catch (err){
      console.log(error)
    }
  }, [error]);


  const handleExportCSV = (e) =>{
    e.preventDefault();
    console.log("it's worked");
  }


  return (
    <div className="w-full p-1">
      <div className="flex justify-between items-center mb-1">
        <h2 className="p-2 font-bold text-blue-700 khmer-text sm:text-xs md:text-xl lg:text-2xl">
          ទិន្នន័យសិស្សតាមថ្នាក់
        </h2>
        <button 
        className="px-5 py-3 bg-green-500 text-white font-medium rounded-md"
        onClick={handleExportCSV}
        >Export to CSV</button>
      </div>
      <div className="w-full shadow-lg rounded-lg overflow-hidden">
        <h2 className=" p-2 font-bold text-blue-600 khmer-text text-center sm:text-xs md:text-xl lg:text-xl">
          ទិន្នន័យសិស្សតាមថ្នាក់
        </h2>
  {/* Responsive Wrapper */}
  <div className="overflow-x-auto sm:text-xs md:text-xs lg:text-lg">
    <table className="min-w-max w-full bg-white ">
      <thead className="bg-gray-100">
        <tr className="khmer-text text-gray-700 ">
          <th className="px-2 py-3 border-2 border-blue-300 text-center text-blue-500 khmer-text">កម្រិត</th>
          <th className="px-2 py-3 border-2 border-blue-300 text-center text-blue-500 khmer-text">ចំនួនថ្នាក់</th>
          <th className=" border-2 border-blue-300 text-center text-blue-500 khmer-text">ចំនួនសិស្សសរុប</th>
          <th className=" border-2 border-blue-300 text-center text-blue-500 khmer-text">ចំនួនសិស្សស្រី</th>
          <th className=" border-2 border-blue-300 text-center text-blue-500 khmer-text">សរុប</th>
          <th className=" border-2 border-blue-300 text-center text-blue-500 khmer-text">បន្ទប់សរុប</th>
          <th className=" border-2 border-blue-300 text-center text-blue-500 khmer-text">ថ្ងៃបង្កើត</th>
        </tr>
      </thead>
      <tbody>
        {studentData.length === 0 ? (
          <tr>
            <td colSpan="6" className="px-3 py-2 text-center text-gray-500 khmer-text">
              កំពុងដំណើរការ
            </td>
          </tr>
        ) : (
          studentData.map((data) => (
            <React.Fragment key={data.id}>
              {/* Kindergarten Row */}
              <tr className="hover:bg-gray-50 text-center sm:text-xs md:text-xs lg:text-lg">
                <td className="px-2 py-3 border-2 border-blue-300 khmer-text">ថ្នាក់មត្តេយ្យ</td>
                <td className="px-2 py-3 border-2 border-blue-300 khmer-text">{data.kindergarten} បន្ទប់</td>
                <td className="px-2 py-3 border-2 border-blue-300 text-blue-500 khmer-text">{data.total_kindergarten_students} នាក់</td>
                <td className="px-2 py-3 border-2 border-blue-300 text-pink-500 khmer-text">{data.female_kindergarten_students} នាក់</td>
                <td className="px-2 py-3 border-2 border-blue-300 text-blue-500 khmer-text" rowSpan="7">
                  {data.total_kindergarten_students + 
                   data.total_grade1 + 
                   data.total_grade2 + 
                   data.total_grade3 + 
                   data.total_grade4 + 
                   data.total_grade5 + 
                   data.total_grade6
                   }
                  <span className="khmer-text text-blue-500 khmer-text"> នាក់</span>
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
  );
}

export default DisplayData;


