import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Register necessary components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const GenderBarChart = () => {
  const totalStudents = 1000; // Example total students
  const femaleStudents = 600; // Example female students
  const maleStudents = totalStudents - femaleStudents; // Calculated male students

  const data = {
    labels: ['Female Students', 'Male Students'],
    datasets: [
      {
        label: 'Number of Students',
        data: [femaleStudents, maleStudents], // Data values
        backgroundColor: ['#FF6384', '#36A2EB'], // Colors
        borderColor: ['#FF3366', '#3399FF'], // Border colors
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'top' },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 100 }, // Adjust step size for better readability
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default GenderBarChart;
