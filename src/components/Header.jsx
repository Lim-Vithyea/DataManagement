import "../index.css"
import React from "react";
import Pf from "../asset/pf.jpg"

const Header = ({ image, username, schoolname }) => {
  return (
    <div className="w-full flex justify-between items-center p-2 border-b-1 border-gray-300">
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        <img src="/P10.ico" alt="Logo" className="w-6 h-6 sm:w-8 sm:h-8" />
        <h2 className="text-sm sm:text-base md:text-lg lg:text-xls xl:text-xl font-semibold text-center khmer-text">
          {schoolname}
        </h2>
      </div>
      <div className="flex items-center gap-3">
        <h1 className="text-xs sm:text-sm md:text-md lg:text-lg">
          <span className="khmer-text">សួស្តី</span>, <span className="text-blue-500 font-bold">{username}</span>
        </h1>
        <img
          src={image || Pf}
          alt="Profile"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-blue-500 object-cover"/>
      </div>
    </div>
  );
};

export default Header;
