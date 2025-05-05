import React from 'react'
import SaveIcon from "../asset/save-svgrepo-com.svg"

const SaveBtn = ({disable}) => {
  return (
    <div className="pt-5 flex justify-center md:justify-end px-4">
        <button
            className={`w-[150px] h-[50px] flex justify-center items-center bg-blue-700 font-semibold text-white rounded-lg ${disable ? "opacity-0 cursor-not-allowed" : ""}  hover:bg-blue-500 transition-all duration-300 khmer-text`}
            type="submit">
            រក្សាទុក
            <img src={SaveIcon} className="w-5 h-5 ml-[4px] "alt="icon"/>
        </button>
    </div>
  )
}

export default SaveBtn