import React, {  useState } from "react";
import axios from "axios";
import "../../index.css";
import IconReset from "../../asset/reset_icon.svg";
import IconSave from "../../asset/save-svgrepo-com.svg";
import Study from "../../asset/student.svg";

const initialFormData = {
  kindergarten: 0,
  total_kindergarten_students: 0,
  female_kindergarten_students: 0,
  grade1: "",
  total_grade1: "",
  female_grade1: "",
  grade2: "",
  total_grade2: "",
  female_grade2: "",
  grade3: "",
  total_grade3: "",
  female_grade3: "",
  grade4: "",
  total_grade4: "",
  female_grade4: "",
  grade5: "",
  total_grade5: "",
  female_grade5: "",
  grade6: "",
  total_grade6: "",
  female_grade6: "",
};

const Usermangedata = () => {

  
  const inputStyle =
    "mt-1 khmer-text font-semibold p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500";

  const errorInputStyle =
    "mt-1 khmer-text font-semibold p-2 w-full border border-red-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500";

  const [formData, setFormData] = useState(initialFormData);
  const [errorMessages, setErrorMessages] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [kidclass, setKidclass] = useState(false);
  const [isSubmitting,setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({...prevData,[id]: value,}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessages({});
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    const grades = [
      {
        grade: "Kindergarten",
        total: formData.total_kindergarten_students,
        girls: formData.female_kindergarten_students,
      },
      {
        grade: "Grade1",
        total: formData.total_grade1,
        girls: formData.female_grade1,
      },
      {
        grade: "Grade2",
        total: formData.total_grade2,
        girls: formData.female_grade2,
      },
      {
        grade: "Grade3",
        total: formData.total_grade3,
        girls: formData.female_grade3,
      },
      {
        grade: "Grade4",
        total: formData.total_grade4,
        girls: formData.female_grade4,
      },
      {
        grade: "Grade5",
        total: formData.total_grade5,
        girls: formData.female_grade5,
      },
      {
        grade: "Grade6",
        total: formData.total_grade6,
        girls: formData.female_grade6,
      },
    ];

    let formIsValid = true;
    const errors = {};
    for (let grade of grades) {
      if (parseInt(grade.girls) > parseInt(grade.total)) {
        errors[
          grade.grade
        ] = `${grade.grade} girls count should be less than or equal to total students`;
        formIsValid = false;
      }
    }
    if (!formIsValid) {
      setErrorMessages(errors);
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const API = process.env.REACT_APP_API_URL;
      const response = await axios.post(`${API}addstudent`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSuccessMessage(response.data.message);
      setFormData(initialFormData);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("Error submitting form");
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrorMessages({});
    setSuccessMessage("");
    setErrorMessage("");
  };

  return (
    <div className="w-[99%] mx-auto mt-2 bg-white rounded p-5 sm:p-8 lg:p-10 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
      <div className="flex">
        <img src={Study} className="w-10 h-10 " alt="icon"/>
        <h1 className="font-bold text-2xl mt-2 ml-2 text-blue-700 khmer-text text-start">
          បញ្ជូលចំនួនសិស្សតាមថ្នាក់ស្ដង់ដាសាលាបឋមសិក្សាគំរូ
        </h1>
      </div>
      {successMessage && (
        <div className="mt-4 p-2 bg-green-100 text-green-700 rounded">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="mt-4 p-2 bg-red-100 text-red-700 rounded">
          {errorMessage}
        </div>
      )}

      <div className="mt-6">
        <form className="khmer-text" onSubmit={handleSubmit}>
          {/* Grid Layout for Grades */}
          {/* Kindergarten Section */}
          <div className="border-2 border-gray-300  p-4 my-4 rounded-md shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] ">
              <p className="block py-4 khmer-text font-bold text-xl text-blue-600">
                បញ្ជូលចំនួនសិស្សថ្នាក់មត្តេយ្យ<span className="text-red-500 khmer-text">(បើមាន)</span>
              </p>
              {/* if have kindergarten class allow user input */}
              {kidclass ? 
              <>
              <div className="transition-transform duration-500">
              <div>
                <label
                  htmlFor="kindergarten"
                  className="block py-4 khmer-text font-bold text-ms text-gray-700">
                  ចំនួនថ្នាក់មត្តេយ្យ
                </label>
                <input
                  type="number"
                  id="kindergarten"
                  className={errorMessages.Kindergarten ? errorInputStyle : inputStyle}
                  placeholder="ចំនួនថ្នាក់"
                  value={formData.kindergarten}
                  onChange={handleChange}
                  min={0} />
                {errorMessages.Kindergarten && (
                  <span className="text-red-500 text-sm">
                    {errorMessages.Kindergarten}
                  </span>
                )}
              </div>
              <div>
                  <label
                    htmlFor="total_kindergarten_students"
                    className="block py-4 khmer-text font-bold text-sm text-gray-700">
                    ចំនួនសិស្សសរុប
                  </label>
                  <input
                    type="number"
                    id="total_kindergarten_students"
                    className={errorMessages.Kindergarten ? errorInputStyle : inputStyle}
                    placeholder="ចំនួនសិស្សសរុប"
                    value={formData.total_kindergarten_students}
                    onChange={handleChange}
                    min={0} />
                </div>
                <div>
                  <label
                    htmlFor="female_kindergarten_students"
                    className="block py-4 khmer-text font-bold text-sm text-gray-700">
                    ចំនួនសិស្សស្រី
                  </label>
                  <input
                    type="number"
                    id="female_kindergarten_students"
                    className={errorMessages.Kindergarten ? errorInputStyle : inputStyle}
                    placeholder="ចំនួនសិស្សស្រី"
                    value={formData.female_kindergarten_students}
                    onChange={handleChange}
                    min={0} />
                </div>
                </div>
              <button className="bg-red-500 px-3 py-3 rounded-lg khmer-text text-white mt-3 hover:bg-red-400" onClick={()=>setKidclass(false)}>គ្មានថ្នាក់មតេ្តយ្យ</button>
              </>
              : 
              <button className="bg-green-500 px-3 py-3 rounded-lg khmer-text text-white hover:bg-green-400" onClick={()=>setKidclass(true)}>បញ្ចូលថ្នាក់មត្តេយ្យ</button>}
            </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Grade 1 Section */}
            <div className="border-2 border-gray-300  p-4 rounded-md shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
              <p className="block py-4 khmer-text font-bold text-xl text-blue-600">
                បញ្ជូលចំនួនសិស្សថ្នាក់ទី ១
              </p>
              <div>
                <label
                  htmlFor="grade1"
                  className="block py-4 khmer-text font-bold text-sm text-gray-700">
                  ចំនួនថ្នាក់ទី១
                </label>
                <input
                  type="number"
                  id="grade1"
                  className={
                    errorMessages.Grade1 ? errorInputStyle : inputStyle
                  }
                  required
                  placeholder="ចំនួនថ្នាក់"
                  value={formData.grade1}
                  onChange={handleChange}
                  min={0}
                />
                {errorMessages.Grade1 && (
                  <span className="text-red-500 text-sm">
                    {errorMessages.Grade1}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="total_grade1"
                  className="block py-4 khmer-text font-bold text-sm text-gray-700">
                  ចំនួនសិស្សសរុប
                </label>
                <input
                  type="number"
                  id="total_grade1"
                  className={
                    errorMessages.Grade1 ? errorInputStyle : inputStyle
                  }
                  required
                  placeholder="ចំនួនសិស្សសរុប"
                  value={formData.total_grade1}
                  onChange={handleChange}
                  min={0}
                />
              </div>
              <div>
                <label
                  htmlFor="female_grade1"
                  className="block py-4 khmer-text font-bold text-sm text-gray-700">
                  ចំនួនសិស្សស្រី
                </label>
                <input
                  type="number"
                  id="female_grade1"
                  className={
                    errorMessages.Grade1 ? errorInputStyle : inputStyle
                  }
                  required
                  placeholder="ចំនួនសិស្សស្រី"
                  value={formData.female_grade1}
                  onChange={handleChange}
                  min={0}
                />
              </div>
            </div>

            {/* Grade 2 Section */}
            <div className="border-2 border-gray-300  p-4 rounded-md shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
              <p className="block py-4 khmer-text font-bold text-xl text-blue-600">
                បញ្ជូលចំនួនសិស្សថ្នាក់ទី ២
              </p>
              <div>
                <label
                  htmlFor="grade2"
                  className="block py-4 khmer-text font-bold text-sm text-gray-700">
                  ចំនួនថ្នាក់ទី២
                </label>
                <input
                  type="number"
                  id="grade2"
                  className={
                    errorMessages.Grade2 ? errorInputStyle : inputStyle
                  }
                  required
                  placeholder="ចំនួនថ្នាក់"
                  value={formData.grade2}
                  onChange={handleChange}
                  min={0}
                />
                {errorMessages.Grade2 && (
                  <span className="text-red-500 text-sm">
                    {errorMessages.Grade2}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="total_grade2"
                  className="block py-4 khmer-text font-bold text-sm text-gray-700">
                  ចំនួនសិស្សសរុប
                </label>
                <input
                  type="number"
                  id="total_grade2"
                  className={
                    errorMessages.Grade2 ? errorInputStyle : inputStyle
                  }
                  required
                  placeholder="ចំនួនសិស្សសរុប"
                  value={formData.total_grade2}
                  onChange={handleChange}
                  min={0}
                />
              </div>
              <div>
                <label
                  htmlFor="female_grade2"
                  className="block py-4 khmer-text font-bold text-sm text-gray-700">
                  ចំនួនសិស្សស្រី
                </label>
                <input
                  type="number"
                  id="female_grade2"
                  className={
                    errorMessages.Grade2 ? errorInputStyle : inputStyle
                  }
                  required
                  placeholder="ចំនួនសិស្សស្រី"
                  value={formData.female_grade2}
                  onChange={handleChange}
                  min={0}
                />
              </div>
            </div>

            {/* Grade 3 Section */}
            <div className="border-2 border-gray-300  p-4 rounded-md shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
              <p className="block py-4 khmer-text font-bold text-xl text-blue-600">
                បញ្ជូលចំនួនសិស្សថ្នាក់ទី ៣
              </p>
              <div>
                <label
                  htmlFor="grade3"
                  className="block py-4 khmer-text font-bold text-sm text-gray-700">
                  ចំនួនថ្នាក់ទី៣
                </label>
                <input
                  type="number"
                  id="grade3"
                  className={
                    errorMessages.Grade3 ? errorInputStyle : inputStyle
                  }
                  required
                  placeholder="ចំនួនថ្នាក់"
                  value={formData.grade3}
                  onChange={handleChange}
                  min={0}
                />
                {errorMessages.Grade3 && (
                  <span className="text-red-500 text-sm">
                    {errorMessages.Grade3}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="total_grade3"
                  className="block py-4 khmer-text font-bold text-sm text-gray-700">
                  ចំនួនសិស្សសរុប
                </label>
                <input
                  type="number"
                  id="total_grade3"
                  className={
                    errorMessages.Grade3 ? errorInputStyle : inputStyle
                  }
                  required
                  placeholder="ចំនួនសិស្សសរុប"
                  value={formData.total_grade3}
                  onChange={handleChange}
                  min={0}
                />
              </div>
              <div>
                <label
                  htmlFor="female_grade3"
                  className="block py-4 khmer-text font-bold text-sm text-gray-700">
                  ចំនួនសិស្សស្រី
                </label>
                <input
                  type="number"
                  id="female_grade3"
                  className={
                    errorMessages.Grade3 ? errorInputStyle : inputStyle
                  }
                  required
                  placeholder="ចំនួនសិស្សស្រី"
                  value={formData.female_grade3}
                  onChange={handleChange}
                  min={0}
                />
              </div>
            </div>

            {/* Grade 4 Section */}
            <div className="border-2 border-gray-300  p-4 rounded-md shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
              <p className="block py-4 khmer-text font-bold text-xl text-blue-600">
                បញ្ជូលចំនួនសិស្សថ្នាក់ទី ៤
              </p>
              <div>
                <label
                  htmlFor="grade4"
                  className="block py-4 khmer-text font-bold text-sm text-gray-700">
                  ចំនួនថ្នាក់ទី៤
                </label>
                <input
                  type="number"
                  id="grade4"
                  className={
                    errorMessages.Grade4 ? errorInputStyle : inputStyle
                  }
                  required
                  placeholder="ចំនួនថ្នាក់"
                  value={formData.grade4}
                  onChange={handleChange}
                  min={0}
                />
                {errorMessages.Grade4 && (
                  <span className="text-red-500 text-sm">
                    {errorMessages.Grade4}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="total_grade4"
                  className="block py-4 khmer-text font-bold text-sm text-gray-700">
                  ចំនួនសិស្សសរុប
                </label>
                <input
                  type="number"
                  id="total_grade4"
                  className={
                    errorMessages.Grade4 ? errorInputStyle : inputStyle
                  }
                  required
                  placeholder="ចំនួនសិស្សសរុប"
                  value={formData.total_grade4}
                  onChange={handleChange}
                  min={0}
                />
              </div>
              <div>
                <label
                  htmlFor="female_grade4"
                  className="block py-4 khmer-text font-bold text-sm text-gray-700">
                  ចំនួនសិស្សស្រី
                </label>
                <input
                  type="number"
                  id="female_grade4"
                  className={
                    errorMessages.Grade4 ? errorInputStyle : inputStyle
                  }
                  required
                  placeholder="ចំនួនសិស្សស្រី"
                  value={formData.female_grade4}
                  onChange={handleChange}
                  min={0}
                />
              </div>
            </div>

            {/* Grade 5 Section */}
            <div className="border-2 border-gray-300  p-4 rounded-md shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
              <p className="block py-4 khmer-text font-bold text-xl text-blue-600">
                បញ្ជូលចំនួនសិស្សថ្នាក់ទី ៥
              </p>
              <div>
                <label
                  htmlFor="grade5"
                  className="block py-4 khmer-text font-bold text-sm text-gray-700">
                  ចំនួនថ្នាក់ទី៥
                </label>
                <input
                  type="number"
                  id="grade5"
                  className={
                    errorMessages.Grade5 ? errorInputStyle : inputStyle
                  }
                  required
                  placeholder="ចំនួនថ្នាក់"
                  value={formData.grade5}
                  onChange={handleChange}
                  min={0}
                />
                {errorMessages.Grade5 && (
                  <span className="text-red-500 text-sm">
                    {errorMessages.Grade5}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="total_grade5"
                  className="block py-4 khmer-text font-bold text-sm text-gray-700">
                  ចំនួនសិស្សសរុប
                </label>
                <input
                  type="number"
                  id="total_grade5"
                  className={
                    errorMessages.Grade5 ? errorInputStyle : inputStyle
                  }
                  required
                  placeholder="ចំនួនសិស្សសរុប"
                  value={formData.total_grade5}
                  onChange={handleChange}
                  min={0}
                />
              </div>
              <div>
                <label
                  htmlFor="female_grade5"
                  className="block py-4 khmer-text font-bold text-sm text-gray-700">
                  ចំនួនសិស្សស្រី
                </label>
                <input
                  type="number"
                  id="female_grade5"
                  className={
                    errorMessages.Grade5 ? errorInputStyle : inputStyle
                  }
                  required
                  placeholder="ចំនួនសិស្សស្រី"
                  value={formData.female_grade5}
                  onChange={handleChange}
                  min={0}
                />
              </div>
            </div>

            {/* Grade 6 Section */}
            <div className="border-2 border-gray-300  p-4 rounded-md shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
              <p className="block py-4 khmer-text font-bold text-xl text-blue-600">
                បញ្ជូលចំនួនសិស្សថ្នាក់ទី ៦
              </p>
              <div>
                <label
                  htmlFor="grade6"
                  className="block py-4 khmer-text font-bold text-sm text-gray-700">
                  ចំនួនថ្នាក់ទី៦
                </label>
                <input
                  type="number"
                  id="grade6"
                  className={
                    errorMessages.Grade6 ? errorInputStyle : inputStyle
                  }
                  required
                  placeholder="ចំនួនថ្នាក់"
                  value={formData.grade6}
                  onChange={handleChange}
                  min={0}
                />
                {errorMessages.Grade6 && (
                  <span className="text-red-500 text-sm">
                    {errorMessages.Grade6}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="total_grade6"
                  className="block py-4 khmer-text font-bold text-sm text-gray-700">
                  ចំនួនសិស្សសរុប
                </label>
                <input
                  type="number"
                  id="total_grade6"
                  className={
                    errorMessages.Grade6 ? errorInputStyle : inputStyle
                  }
                  required
                  placeholder="ចំនួនសិស្សសរុប"
                  value={formData.total_grade6}
                  onChange={handleChange}
                  min={0}
                />
              </div>
              <div>
                <label
                  htmlFor="female_grade6"
                  className="block py-4 khmer-text font-bold text-sm text-gray-700">
                  ចំនួនសិស្សស្រី
                </label>
                <input
                  type="number"
                  id="female_grade6"
                  className={
                    errorMessages.Grade6 ? errorInputStyle : inputStyle
                  }
                  required
                  placeholder="ចំនួនសិស្សស្រី"
                  value={formData.female_grade6}
                  onChange={handleChange}
                  min={0}
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className={`w-[180px] h-[50px] ${isSubmitting ? "opacity-20 cursor-not-allowed": ""}  flex justify-center items-center bg-blue-600 rounded-xl hover:bg-blue-400 transition-all duration-300 text-white font-bold khmer-text shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]`}>
              រក្សាទុក
              <img src={IconSave} className="w-5 h-5 ml-[2px]" alt="icon"/>
            </button>
            <button
              type="button"
              className="ml-4 w-[180px] flex justify-center items-center text-center h-[50px] bg-red-600 rounded-xl hover:bg-red-400 transition-all duration-300 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] text-white font-bold khmer-text"
              onClick={handleReset}>
              ធ្វើឡើងវិញ
              <img src={IconReset} className="w-5 h-5 ml-[4px]" alt="icon"/>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Usermangedata;