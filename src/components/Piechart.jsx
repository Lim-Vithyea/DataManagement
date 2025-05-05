import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { countStudent } from "../Services/CountStudent";

// Register required chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const GenderPieChart = () => {
  const [totalStudent,setTotalStudent]  = useState(0);
  const [female,setFemale] = useState(0);

useEffect(()=>{
  const getData = async () => {
    try {
      const getDataFromStudent = await countStudent();
      setTotalStudent(getDataFromStudent.total_students);
      setFemale(getDataFromStudent.total_female_students);
    } catch (err) {
      throw err;
    }
  }
  getData();
})

  const totalStudents = totalStudent; // Total number of students
  const femaleStudents = female; // Number of female students
  const maleStudents = totalStudents - femaleStudents; // Male students count
  const data = {
    labels: ["សិស្សស្រី", "សិស្សប្រុស"],
    datasets: [
      {
        data: [femaleStudents, maleStudents], // Gender distribution
        backgroundColor: ["#FF6384", "#36A2EB"], // Colors for segments
        hoverBackgroundColor: ["#FF3366", "#3399FF"], // Hover effect colors
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {

      legend: { position: "top" },
    },
  };

  return <Pie data={data} options={options} />;
};

export default GenderPieChart;
