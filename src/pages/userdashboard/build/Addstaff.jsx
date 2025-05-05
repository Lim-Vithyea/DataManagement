import React from "react";
import "../../../index.css";
import SaveIcon from "../../../asset/save-svgrepo-com.svg";
import Employee from "../../../asset/employee.svg";
const StaffForm = () => {
  return (
    <div className="w-[99%] mx-auto p-6 mt-2 bg-white 
    shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]
     rounded  khmer-text-lg">
      <div className="flex">
        <img src={Employee} className="w-10 h-10 mr-2"/>
        <h2 className="text-2xl font-bold mb-4 mt-2 khmer-text text-blue-700">បញ្ជូលចំនួនបុគ្គលិក</h2>
      </div>
      
      {/* <hr className="h-0.5 bg-gradient-to-b rounded from-blue-500 to-purple-500 border-0 my-6"/> */}
      <form>
      <div className="grid align-center lg:grid-cols-2 gap-6 py-3 md:grid-cols-2 sm:grid-cols-1 ">
        {/* Left Column */}
        <div>
          <label className="block khmer-text text-blue-500">បុគ្គលិកសរុប</label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" required/>
          <label className="block khmer-text text-blue-500 mt-3">បុគ្គលិកមិនបង្រៀន</label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />
          <label className="block khmer-text text-blue-500 mt-3">បុគ្គលិកបង្រៀន</label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />
          <label className="block khmer-text text-blue-500 mt-3">គ្រូបង្រៀនក្របខណ្ឌសរុប </label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />
          <label className="block khmer-text text-blue-500 mt-3">គ្រូបង្រៀនកិច្ចសន្យាសរុប </label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />
          <label className="block khmer-text text-blue-500 mt-3">គ្រូបង្រៀនពីរថ្នាក់ពីរពេលសរុប </label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />
          <label className="block khmer-text text-blue-500 mt-3">គ្រូបង្រៀនថ្នាក់គួបសរុប </label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />
        </div>
        {/* Right Column */}
        <div>
          <label className="block khmer-text text-blue-500">បុគ្គលិកស្រីសរុប</label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />
          <label className="block khmer-text text-blue-500 mt-3">បុគ្គលិកស្រីមិនបង្រៀន</label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />
          <label className="block khmer-text text-blue-500 mt-3">បុគ្គលិកស្រីបង្រៀន</label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />
          <label className="block khmer-text text-blue-500 mt-3">គ្រូបង្រៀនក្របខណ្ឌស្រីសរុប</label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />
          <label className="block khmer-text text-blue-500 mt-3">គ្រូបង្រៀនកិច្ចសន្យាស្រីសរុប</label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />
          <label className="block khmer-text text-blue-500 mt-3">គ្រូបង្រៀនពីរថ្នាក់ពីរពេលស្រីសរុប</label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />
          <label className="block khmer-text text-blue-500 mt-3">គ្រូបង្រៀនថ្នាក់គួបស្រីសរុប </label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />
          <label className="block khmer-text text-blue-500 mt-3">គ្រូបង្រៀនឯកទេសស្រីសរុប </label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />
        </div>
      </div>
      
      <button type="submit" className="mt-6 flex justify-center items-center bg-blue-500 text-white px-4 py-2  rounded  khmer-text hov khmer-text">
        បញ្ជូល
        <img src={SaveIcon} className="w-5 h-5 ml-[2px] mb-1"/>
      </button>
      </form>
    </div>
  );
};

export default StaffForm;