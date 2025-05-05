// import { useState } from "react";
// import "../index.css"
// import AlertError from "./AlertError";

// function DetailCard({ title, value, text_color,icon}) {
// const [isClick,setClick] = useState(false);

// const handleonClick = () => {
//     setClick(true);
//     setTimeout(() => {
//         setClick(false)
//     }, 2000);
// }
//     return (
//         <div className='h-[180px] max-w-[100%] rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
//             <div className='flex justify-between'>
//                 <div className="">
//                 <h1 className='p-5 font-bold text-[15px] khmer-text'>{title}</h1>
//                 <img src={icon} className=" w-3 h-3"/>
//                 </div>
//                 <button onClick={handleonClick} className='p-5 text-blue-500 font-medium text-xs'>View more</button>
//             </div>
//             <h2 className={`text-center items-center pt-[20px] text-xl font-bold ${text_color}`}>{value}</h2>
//             {isClick && <AlertError/>}
//         </div>
//     );
// }
// export default DetailCard;

import { useState } from "react";
import "../index.css";
import AlertError from "./AlertError";

function DetailCard({ title, value, text_color, icon }) {
    const [isClick, setClick] = useState(false);

    const handleonClick = () => {
        setClick(true);
        setTimeout(() => {
            setClick(false);
        }, 2000);
    };

    return (
        <div className="h-[180px] max-w-full rounded-lg p-4 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    {icon && <img src={icon} className="w-6 h-6 fill-blue-500" alt="icon" />}
                    <h1 className="font-bold text-[15px] khmer-text">{title}</h1>
                </div>
                <button onClick={handleonClick} className="text-blue-500 font-medium text-xs">
                    View more
                </button>
            </div>
            <h2 className={`text-center pt-[45px] text-xl font-bold ${text_color}`}>{value}</h2>
            {isClick && <AlertError message="Something went wrong!" />}
        </div>
    );
}

export default DetailCard;
