
// import React, { useState } from 'react';
// import SaveBtn from '../../../components/SaveBtn';



// const Values = [
//     {name: "ប្រភេទអគារសិក្សា"},
//     {name: "ប្រភេទជាន់នៃអគារ"},
//     {name: "ចំនួនអគារ"},
//     {name: "ចំនួនបន្ទប់រៀន"},
//     {name: "ចំនួនបន្ទប់សរុប"}
// ]

// const BuildingTable = () => {
//   const [formData, setFormData] = useState({
//     tileBuilding: {
//       floorType: "",
//       buildingCount: "",
//       roomCount: "",
//       totalRoomCount: ""
//     },
//     woodBuilding: {
//       buildingCount: "",
//       roomCount: "",
//       totalRoomCount: ""
//     },
//     tend: {
//       buildingCount: "",
//       roomCount: "",
//       totalRoomCount: ""
//     },
//     totalBuildings: {
//       buildingCount: "",
//       roomCount: "",
//       totalRoomCount: ""
//     }
//   });

//   const handleChange = (section, field, value) => {
//     setFormData(prev => ({...prev,[section]: {...prev[section],[field]: value}
//     }));
//   };

//   const handleRadioChange = (value) => {
//     setFormData(prev => ({
//       ...prev,
//       tileBuilding: {
//         ...prev.tileBuilding,
//         floorType: value
//       }
//     }));
//   };
  
  
//   return (
//     <div className="pt-2 overflow-x-auto">
//       <details className="border-2 khmer-text p-4 rounded-md shadow-lg">
//         <summary className="khmer-text text-lg sm:text-xl text-blue-500">
//           បញ្ចូលទិន្នន័យអគារ
//         </summary>
//         <div className="overflow-x-auto p-1 pt-4">
//           <form>
//           <h1 className='text-red-500 khmer-text pb-2 italic  text-[13px]'>សម្គាល់: <span className="khmer-text">បើគ្មានសូមបញ្ចូល​</span> 0</h1>
//             {/* Table */}
//             <div className="overflow-x-auto">
//               <table className="min-w-[600px] w-full border-2 border-gray-200 khmer-text text-xs khmer-text sm:text-sm md:text-base lg:text-[15px]">
//                 <thead className="border-2 border-b">
//                 <tr className="bg-gray-200 border-b ">
//                     {Values.map((item,index)=>(
//                         <th key={index} className="border py-2 text-blue-500 khmer-text">{item.name}</th>
//                     ))}
//                  </tr>
//                 </thead>
//                 <tbody>
//                   <tr className="border-b">
//                     <td className="border p-2  khmer-text">អគារប្រក់ក្បឿង/ស័ង្គសី</td>
//                     <td className="p-2 flex flex-col sm:flex-row gap-1">
//                       <div className="flex flex-col">
//                         <label className="block sm:text-xs khmer-text"><input type="radio" name="floor" className="mr-2" />ជាន់ផ្ទាល់ដី</label>
//                         <label className="block sm:text-xs khmer-text"><input type="radio" name="floor" className="mr-2" />1ជាន់</label>
//                       </div>
//                       <div className="flex flex-col">
//                         <label className="block sm:text-xs khmer-text"><input type="radio" name="floor" className="mr-2" />2ជាន់</label>
//                         <label className="block sm:text-xs khmer-text"><input type="radio" name="floor" className="mr-2" />លើសពី2ជាន់</label>
//                       </div>
//                     </td>
//                     <td className="border p-2 text-center">
//                       <input type="number" className="w-full p-1 sm:p-2 border-none rounded text-center khmer-text " placeholder="0" required/>
//                     </td>
//                     <td className="border p-2 text-center ">
//                       <input type="number" className="w-full p-1 sm:p-2 border-none rounded text-center khmer-text " placeholder="0" required/>
//                     </td>
//                     <td className="border p-2 text-center ">
//                       <input type="number" className="w-full p-1 sm:p-2 border-none rounded text-center khmer-text"placeholder="0" required/>
//                     </td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="border p-2 khmer-text">អគារឈើប្រក់ក្បឿង/ស័ង្គសី</td>
//                     <td className="border p-2"></td>
//                     <td className="border p-2 text-center khmer-text">
//                       <input type="number" className="w-full p-1 sm:p-2 border-none rounded text-center khmer-text" placeholder="0" required/>
//                     </td>
//                     <td className="border p-2 text-center khmer-text">
//                       <input type="number" className="w-full p-1 sm:p-2 border-none rounded text-center khmer-text" placeholder="0" required/>
//                     </td>
//                     <td className="border p-2 text-center khmer-text">
//                       <input type="number" className="w-full p-1 sm:p-2 border-none rounded text-center khmer-text" placeholder="0" required/>
//                     </td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="border p-2 khmer-text">អគាររោងដោល</td>
//                     <td className="border p-2"></td>
//                     <td className="border p-2 text-center khmer-text">
//                       <input type="number" className="w-full p-1 sm:p-2 border-none rounded text-center khmer-text" placeholder="0" required />
//                     </td>
//                     <td className="border p-2 text-center khmer-text">
//                       <input type="number" className="w-full p-1 sm:p-2 border-none rounded text-center khmer-text" placeholder="0" required/>
//                     </td>
//                     <td className="border p-2 text-center khmer-text">
//                       <input type="number" className="w-full p-1 sm:p-2 border-none rounded text-center khmer-text"placeholder="0"required/>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="border p-2 khmer-text">ចំនួនអគារសរុប</td>
//                     <td className="border p-2"></td>
//                     <td className="border p-2 text-center khmer-text">
//                       <input type="number" className="w-full p-1 sm:p-2 border-none rounded text-center khmer-text" placeholder="0" required />
//                     </td>
//                     <td className="border p-2 text-center khmer-text">
//                       <input type="number" className="w-full p-1 sm:p-2 border-none rounded text-center khmer-text" placeholder="0" required/>
//                     </td>
//                     <td className="border p-2 text-center khmer-text">
//                       <input type="number" className="w-full p-1 sm:p-2 border-none rounded text-center khmer-text" placeholder="0"required />
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//             <SaveBtn/>
//           </form>
//         </div>
//       </details>
//     </div>
//   );
// };

// export default BuildingTable;
import React, { useState } from 'react';
import SaveBtn from '../../../components/SaveBtn';
import SuccessMessage from '../../../components/SuccessMessage';

const Values = [
  { name: "ប្រភេទអគារសិក្សា" },
  { name: "ប្រភេទជាន់នៃអគារ" },
  { name: "ចំនួនអគារ" },
  { name: "ចំនួនបន្ទប់រៀន" },
  { name: "ចំនួនបន្ទប់សរុប" }
];

const BuildingTable = () => {
  const [successMessage, setSuccessMessage] = useState(false);

  const [formData, setFormData] = useState({
    tileBuilding: {
      floorType: "",
      buildingCount: "",
      roomCount: "",
      totalRoomCount: ""
    },
    woodBuilding: {
      buildingCount: "",
      roomCount: "",
      totalRoomCount: ""
    },
    tend: {
      buildingCount: "",
      roomCount: "",
      totalRoomCount: ""
    },
    totalBuildings: {
      buildingCount: "",
      roomCount: "",
      totalRoomCount: ""
    }
  });

  const handleChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleRadioChange = (value) => {
    setFormData(prev => ({
      ...prev,tileBuilding: {...prev.tileBuilding,floorType: value}
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSuccessMessage(true)
    // You can clear the form if needed:
    // setFormData({ ...initial structure with empty strings });
  };

  return (
    <div className="pt-2 overflow-x-auto">
      <details className="border-2 border-gray-300  khmer-text p-4 rounded-md shadow-lg">
        <summary className="khmer-text text-lg sm:text-xl text-blue-500">
          បញ្ចូលទិន្នន័យអគារ
        </summary>
        <div className="overflow-x-auto p-1 pt-4">
        <SuccessMessage successMessage={successMessage}/>
          <form onSubmit={handleSubmit}>
            <h1 className='text-red-500 khmer-text pb-2 pt-2 italic text-[13px]'>
              សម្គាល់: <span className="khmer-text">បើគ្មានសូមបញ្ចូល​</span> 0
            </h1>
            <div className="overflow-x-auto">
              <table className="min-w-[600px] w-full border-2 border-gray-200 khmer-text text-xs sm:text-sm md:text-base lg:text-[15px]">
                <thead>
                  <tr className="bg-gray-200 border-b">
                    {Values.map((item, index) => (
                      <th key={index} className="border py-2 text-blue-500 khmer-text">{item.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Tile Building Row */}
                  <tr className="border-b">
                    <td className="border p-2 khmer-text">អគារប្រក់ក្បឿង/ស័ង្គសី</td>
                    <td className="p-2 flex flex-col sm:flex-row gap-1">
                      <div className="flex flex-col">
                        <label><input type="radio" name="floor" value="ជាន់ផ្ទាល់ដី" checked={formData.tileBuilding.floorType === "ជាន់ផ្ទាល់ដី"} onChange={(e) => handleRadioChange(e.target.value)} className="mr-2" required/><span className='khmer-text'>ជាន់ផ្ទាល់ដី</span></label>
                        <label><input type="radio" name="floor" value="1ជាន់" checked={formData.tileBuilding.floorType === "1ជាន់"} onChange={(e) => handleRadioChange(e.target.value)} className="mr-2" required /><span className='khmer-text'>1ជាន់</span></label>
                      </div>
                      <div className="flex flex-col">
                        <label><input type="radio" name="floor" value="2ជាន់" checked={formData.tileBuilding.floorType === "2ជាន់"} onChange={(e) => handleRadioChange(e.target.value)} className="mr-2" required /><span className='khmer-text'>2ជាន់</span></label>
                        <label><input type="radio" name="floor" value="លើសពី2ជាន់" checked={formData.tileBuilding.floorType === "លើសពី2ជាន់"} onChange={(e) => handleRadioChange(e.target.value)} className="mr-2" required/><span className='khmer-text'>លើសពី2ជាន់</span></label>
                      </div>
                    </td>
                    <td className="border p-2 text-center">
                      <input type="number" value={formData.tileBuilding.buildingCount} onChange={(e) => handleChange("tileBuilding", "buildingCount", e.target.value)} className="w-full p-2 border-none rounded text-center khmer-text" placeholder="0" required />
                    </td>
                    <td className="border p-2 text-center">
                      <input type="number" value={formData.tileBuilding.roomCount} onChange={(e) => handleChange("tileBuilding", "roomCount", e.target.value)} className="w-full p-2 border-none rounded text-center khmer-text" placeholder="0" required />
                    </td>
                    <td className="border p-2 text-center">
                      <input type="number" value={formData.tileBuilding.totalRoomCount} onChange={(e) => handleChange("tileBuilding", "totalRoomCount", e.target.value)} className="w-full p-2 border-none rounded text-center khmer-text" placeholder="0" required />
                    </td>
                  </tr>

                  {/* Wood Building Row */}
                  <tr className="border-b">
                    <td className="border p-2 khmer-text">អគារឈើប្រក់ក្បឿង/ស័ង្គសី</td>
                    <td className="border p-2"></td>
                    <td className="border p-2 text-center">
                      <input type="number" value={formData.woodBuilding.buildingCount} onChange={(e) => handleChange("woodBuilding", "buildingCount", e.target.value)} className="w-full p-2 border-none rounded text-center khmer-text" placeholder="0" required />
                    </td>
                    <td className="border p-2 text-center">
                      <input type="number" value={formData.woodBuilding.roomCount} onChange={(e) => handleChange("woodBuilding", "roomCount", e.target.value)} className="w-full p-2 border-none rounded text-center khmer-text" placeholder="0" required />
                    </td>
                    <td className="border p-2 text-center">
                      <input type="number" value={formData.woodBuilding.totalRoomCount} onChange={(e) => handleChange("woodBuilding", "totalRoomCount", e.target.value)} className="w-full p-2 border-none rounded text-center khmer-text" placeholder="0" required />
                    </td>
                  </tr>

                  {/* Open Hall Row */}
                  <tr className="border-b">
                    <td className="border p-2 khmer-text">អគាររោងដោល</td>
                    <td className="border p-2"></td>
                    <td className="border p-2 text-center">
                      <input type="number" value={formData.tend.buildingCount} onChange={(e) => handleChange("tend", "buildingCount", e.target.value)} className="w-full p-2 border-none rounded text-center khmer-text" placeholder="0" required />
                    </td>
                    <td className="border p-2 text-center">
                      <input type="number" value={formData.tend.roomCount} onChange={(e) => handleChange("tend", "roomCount", e.target.value)} className="w-full p-2 border-none rounded text-center khmer-text" placeholder="0" required />
                    </td>
                    <td className="border p-2 text-center">
                      <input type="number" value={formData.tend.totalRoomCount} onChange={(e) => handleChange("tend", "totalRoomCount", e.target.value)} className="w-full p-2 border-none rounded text-center khmer-text" placeholder="0" required />
                    </td>
                  </tr>

                  {/* Totals */}
                  <tr>
                    <td className="border p-2 khmer-text">ចំនួនអគារសរុប</td>
                    <td className="border p-2"></td>
                    <td className="border p-2 text-center">
                      <input type="number" value={formData.totalBuildings.buildingCount} onChange={(e) => handleChange("totalBuildings", "buildingCount", e.target.value)} className="w-full p-2 border-none rounded text-center khmer-text" placeholder="0" required />
                    </td>
                    <td className="border p-2 text-center">
                      <input type="number" value={formData.totalBuildings.roomCount} onChange={(e) => handleChange("totalBuildings", "roomCount", e.target.value)} className="w-full p-2 border-none rounded text-center khmer-text" placeholder="0" required />
                    </td>
                    <td className="border p-2 text-center">
                      <input type="number" value={formData.totalBuildings.totalRoomCount} onChange={(e) => handleChange("totalBuildings", "totalRoomCount", e.target.value)} className="w-full p-2 border-none rounded text-center khmer-text" placeholder="0" required />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="pt-4">
              { !successMessage && <SaveBtn disable={successMessage}/>}
            </div>
          </form>
        </div>
      </details>
    </div>
  );
};

export default BuildingTable;
