import React, { useState } from "react";
import Class from "../../asset/class.svg";
import BuildingTable from "./build/BuildingTable";
import SaveBtn from "../../components/SaveBtn";
import BuildingCondition from "./build/BuildingCondition";
import SuccessMessage from "../../components/SuccessMessage";


const facilities = [
  { id: "lab", name: "បន្ទប់ពិសោធន៍" },
  { id: "library", name: "បណ្ណាល័យ" },
  { id: "studyroom", name: "បន្ទប់សិក្សាគរុកោសល្យ" },
  { id: "computer_room", name: "បន្ទប់សិក្សាកុំព្យូរទ័រ" },
  { id: "workshop", name:"រោងជាង"},
  { id: "sportfield", name:"ទីលានកីឡា"},
  { id: "park", name: "សួនបំណិនជីវិត"},
  { id: "playground", name: "កន្លែងកុមារលេង"},
  { id: "nursing_room", name: "បន្ទប់សុខភាព"},
  { id: "fence_gate", name: "របង-ខ្លោងទ្វារ"},
  { id: "toilet", name: "បង្គន់អនាម័យ"},
  { id: "handwashing", name: "កន្លែងលាងដៃ"},
  { id: "electricity", name: "បណ្តាញអគ្គិសនី"},
  { id: "wifi", name: "បណ្តាញអ៊ីនធើណេត"},
  { id: "cantine", name: "អាហារដ្ឋាន"},
  
];

const answer1 = [
    { label: "មាន", value: "yes", color: "text-green-500",},
    { label: "គ្មាន", value: "no", color: "text-red-500", },
]
const answer2 = [
    { label: "ដំណើរការ", value: "operational", color: "text-green-500", },
    { label: "មិនដំណើរការ", value: "non-operational", color: "text-red-500"},
]

const InfrastructureForm = () => {
    const [facilitiesState, setFacilitiesState] = useState({});
    const [successMessage, setSuccessMessage] = useState(false);
    const [inputError, setInputError] = useState(false);
    const [isSubmitting,setIsSubmitting] = useState(false);

    const handleCheckboxChange = (facilityId, optionValue, checked) => {
        setFacilitiesState((prev) => ({
          ...prev,
          [facilityId]: {
            ...prev[facilityId],
            [optionValue]: checked,
          },
        }));
      };
      
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const missingSelections = facilities.filter((facility) => {
            const selected = facilitiesState[facility.id];
            return !selected || Object.values(selected).every((val) => !val);
          });
          if (missingSelections.length > 0) {
            // alert("សូមជ្រើសយកចម្លើយយ៉ាងហោចណាស់ 1 សម្រាប់សំណួរ(ៗ)៖\n" + 
            //   missingSelections.map(f => `- ${f.name}`).join('\n'));
            // Proceed if all have at least one checked
            console.log("Valid data:", facilitiesState);
            setInputError(true)
            return;
          }
        setSuccessMessage(true);
        setIsSubmitting(true);
        console.log(facilitiesState);

    }
    
  return (
    <>
    <div className="pt-4">
    <BuildingTable/>
    <BuildingCondition/>
    </div>
    <div className="pt-3">
        <details className="border-2 border-gray-300 p-4 rounded-md shadow-sm">
            <summary className="khmer-text text-blue-500 text-xl">ហេដ្ឋារចនាសម្ព័ន្ធសាលារៀន</summary>
        <div className="w-[99%] mx-auto mt-2 bg-white rounded p-6 sm:p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div className="flex ">
            <img src={Class} className="w-10 h-10 mr-2" alt="icon"/>
            <h1 className="text-blue-700 font-bold khmer-text text-2xl text-start">ហេដ្ឋារចនាសម្ព័ន្ធសាលារៀន</h1>
            </div>
            <SuccessMessage successMessage={successMessage}/>
            {inputError && (
                <div className="mt-4 p-4 bg-red-100 text-red-500 rounded khmer-text">
                    សូមជ្រើសយកចម្លើយយ៉ាងហោចណាស់ ២ សម្រាប់សំណួរនីមួយៗ
                </div>
            )}
            <h4 className="text-gray-400 khmer-text text-start pt-5 italic"><span className="text-red-500 khmer-text">សម្គាល់*:</span> សូមជ្រើសយកចម្លើយ ២ ក្នុង ១សំណួរ*</h4>
            <form className="pt-10" onSubmit={handleSubmit}>
                {facilities.map((facility, index) => (
                    <div className="flex flex-col md:flex-row md:items-center md:gap-6  px-4 py-2" key={facility.id}>
                        {/* Facility Name */}
                        <div className="w-full md:w-[500px] flex items-center">
                        <h2 className="py-3 md:py-5 pr-2 text-blue-500 font-semibold">{index + 1}.</h2>
                        <h2 className="khmer-text text-blue-500 text-[18px] py-3 md:py-5 text-center md:text-left">
                            {facility.name}
                        </h2>
                        </div>
                        {/* Options */}
                        <div className="flex-1 flex justify-center">
                        <div className="w-full max-w-[1200px]">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-b-2 border-gray-300 py-5 ">
                            {[...answer1, ...answer2].map((option) => (
                                <div className="flex items-center gap-2" key={option.value}>
                                    <input
                                    type="checkbox"
                                    name={`${facility.id}-${option.value}`}
                                    value={option.value}
                                    className="w-5 h-5"
                                    checked={facilitiesState[facility.id]?.[option.value] || false}
                                    onChange={(e) => handleCheckboxChange(facility.id, option.value, e.target.checked)}/>
                                    <label className={`${option.color} khmer-text`}>{option.label}</label>
                                </div>
                                ))}
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
                {/* Submit Button */}
                { !isSubmitting &&
                    <SaveBtn disable={successMessage}/>
                }
            </form>
        </div>
        </details>
        <div className="py-3">
        
        </div>
    </div>
    </>
  );
};

export default InfrastructureForm;

