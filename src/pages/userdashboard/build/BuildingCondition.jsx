import React, { useState } from 'react';
import SaveBtn from '../../../components/SaveBtn';
import SuccessMessage from '../../../components/SuccessMessage';

const Value = [
    { name: "ប្រភេទអគារសិក្សា" },
    { name: "ចំនួនអគារល្អ" },
    { name: "ចំនួនអគារមធ្យម" },
    { name: "ចំនួនអគារអន់" },
    { name: "ចំនួនអគារខូច" },
];

const BuildingCondition = () => {
    const [formData, setFormData] = useState([
        { type: "អគារបេតុងប្រក់ក្បឿង/ស័ង្គសី", good: "", medium: "", bad: "", worst: "" },
        { type: "អគារឈើប្រក់ក្បឿង/ស័ង្គសី", good: "", medium: "", bad: "", worst: "" },
        { type: "រោងដោល", good: "", medium: "", bad: "", worst: "" },
    ]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);


    // Handle input change
    
    const handleInputChange = (index, field, value) => {
        const updatedData = [...formData]; // Create a copy of the existing formData array
        updatedData[index][field] = value; // Update the specific field at the given index
        setFormData(updatedData); // Update the state with the modified array
    };

    // Submit Data
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post("http://localhost:5000/api/buildings", formData);
    //         alert("Data saved successfully!");
    //     } catch (error) {
    //         console.error("Error saving data:", error);
    //     }
    // };
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(formData);
        setIsSubmitting(true);
        setSuccessMessage(true);
        const resetData = formData.map(item => ({
            ...item,
            good: "",
            medium: "",
            bad: "",
            worst: ""
        }));
        setFormData(resetData)
        
    }
    return (
        <div className="pt-4 overflow-x-auto">
            <details className="border-2 border-gray-300  p-4 rounded-md shadow-sm">
                <summary className="khmer-text text-lg sm:text-xl text-blue-500">ស្ថានភាពអគារសិក្សា</summary>
                <SuccessMessage successMessage={successMessage}/>
                <div className="pt-4">
                    <form onSubmit={handleSubmit}>
                        <h1 className='text-red-500 khmer-text pb-2 italic text-[13px]'>សម្គាល់: <span className="khmer-text">បើគ្មានសូមបញ្ចូល​</span> 0</h1>
                        <div className="overflow-x-auto">
                            <table className="min-w-[600px] w-full border-gray-300 border-2 khmer-text text-xs sm:text-sm md:text-base">
                                {/* Table Header */}
                                <thead>
                                    <tr className="bg-gray-200">
                                        {Value.map((item, index) => (
                                            <th key={index} className="border p-2 text-blue-500 text-center khmer-text">{item.name}</th>
                                        ))}
                                    </tr>
                                </thead>
                                {/* Table Body */}
                                <tbody>
                                    {formData.map((building, index) => (
                                        <tr key={index} className="hover:bg-gray-50">
                                            <td className="border p-4 khmer-text">{building.type}</td>
                                            {["good", "medium", "bad", "worst"].map((field, i) => (
                                                <td key={i} className="border p-2 text-end">
                                                    <h1 className='text-red-500 text-en'>*</h1>
                                                    <input
                                                    type="number" className="w-full p-2 rounded text-center khmer-text border-none" placeholder="0"
                                                    value={building[field]} onChange={(e) => handleInputChange(index, field, e.target.value, parseInt(e.target.value)||0)}required/>
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        { !successMessage && <SaveBtn disable={successMessage}/>}
                    </form>
                </div>
            </details>
        </div>
    );
};

export default BuildingCondition;
