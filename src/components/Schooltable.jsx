


import React, { useEffect, useState } from "react";
import SchoolEditComponent from "./SchoolEditComponenet";
import { showSchoolData } from "../Services/Showschool";
// import jsPDF from "jspdf";
// import "jspdf-autotable";
import "../index.css";
import { exportToCSV } from "./ExportCSV";
import searchIcon from "../asset/search.svg"

const Schooltable = () => {
  const [schoolData, setSchoolData] = useState([]);
  const [filteredSchool, setFilteredSchool] = useState([]);
  const [err, setErr] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [isEdit, setEdit] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const rowsPerPage = 10;

  useEffect(() => {
    const displaySchoolData = async () => {
      try {
        const fetchedData = await showSchoolData();
        setSchoolData(fetchedData);
        setFilteredSchool(fetchedData);
      } catch (err) {
        setErr(err.response?.data?.error || err.message);
      }
    };
    displaySchoolData();
    const setRefresh = setInterval(() => {
      displaySchoolData();
    }, 30000);
    return () => clearInterval(setRefresh);
  }, []);

  useEffect(() => {
    if (search === "") {
      setFilteredSchool(schoolData);
    } else {
      const lowercasedSearch = search.toLowerCase();
      const filtered = schoolData.filter(
        (school) =>
          school.school_code.toString().includes(lowercasedSearch) ||
          school.schoolname.toLowerCase().includes(lowercasedSearch)
      );
      setFilteredSchool(filtered);
    }
  }, [search, schoolData]);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredSchool.slice(indexOfFirstRow, indexOfLastRow);

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredSchool.length / rowsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleEdit = (school) => {
    setSelectedSchool(school);
    setEdit(true);
  };

  // const exportPDF = () => {
  //   const doc = new jsPDF();
  //   doc.text("School Data", 14, 10);
  //   const tableColumn = ["No", "School Code", "School name"];
  //   if (!schoolData || !Array.isArray(schoolData)) {
  //     console.error("schoolData is not defined or not an array");
  //     return;
  //   }
  //   const tableRows = schoolData.map((schools, index) => [
  //     index + 1,
  //     schools.school_code,
  //     schools.schoolname,
  //   ]);
  //   doc.autoTable({
  //     head: [tableColumn],
  //     body: tableRows,
  //     startY: 20,
  //   });
  //   doc.save("SchoolData.pdf");
  // };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-5">
      <h1 className="text-xl text-center font-bold text-blue-500 p-5 khmer-text">
        ទិន្នន័យសាលារៀន
      </h1>
      {err && <p className="text-red-500 text-center">{err}</p>}
      <div className="gap-5 md:block lg:flex justify-between">
        <div className="mb-4 flex">
          <img src={searchIcon} className="w-6 h-6 m-2" alt="searchicon"/>
          <input
            type="text"
            placeholder="Search school..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 w-full max-w-sm border rounded"/>
        </div>
        <div className="flex gap-1 m-2">
          {/* <button onClick={exportPDF} className="px-3 py-1 bg-green-500 text-white rounded">
            Export as PDF
          </button> */}
          <button
            onClick={() => {
              if (schoolData.length > 0) {
                exportToCSV(schoolData);
              } else {
                console.error("No data available for export");
                alert("No data available for export.");
              }
            }}
            className="px-3 py-1 bg-green-500 text-white rounded">
            Export as CSV
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left rtl:text-right text-black-500">
          <thead className="text-[16px] text-blue-500 font-bold bg-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3 khmer-text">ល.រ</th>
              <th scope="col" className="px-6 py-3 khmer-text">លេខកូតសាលា</th>
              <th scope="col" className="px-6 py-3 khmer-text">ឈ្មោះសាលារៀន</th>
              <th scope="col" className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.length > 0 ? (
              currentRows.map((school, index) => (
                <tr key={school.sid} className="bg-white border-b-1 border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4">{indexOfFirstRow + index + 1}</td>
                  <td className="px-6 py-4 text-green-500">{school.school_code}</td>
                  <td className="px-6 py-4 khmer-text text-gray-700">{school.schoolname}</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleEdit(school)}
                      className="font-medium text-blue-600 hover:underline">
                      Edit
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4">No school found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isEdit && selectedSchool && (
        <SchoolEditComponent
          school={selectedSchool}
          onClose={() => setEdit(false)}
          refreshData={() => setSchoolData([...schoolData])}/>
      )}
      <div className="flex justify-between mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-gray-300 rounded ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-400"
          }`}>
          Previous
        </button>
        <span className="px-4 py-2">Page {currentPage}</span>
        <button
          onClick={nextPage}
          disabled={currentPage >= Math.ceil(filteredSchool.length / rowsPerPage)}
          className={`px-4 py-2 bg-gray-300 rounded ${
            currentPage >= Math.ceil(filteredSchool.length / rowsPerPage)
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-400"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Schooltable;

