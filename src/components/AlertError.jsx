import { useState } from 'react';
import { useEffect } from 'react';

const AlertError = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
    setTimeout(() => setShow(true), 100); // Slight delay for smooth effect
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-opacity duration-300">
      <div
        className={`bg-white p-6 rounded-lg 
          shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]
          transform transition-all duration-500 ${
          show ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-10"
        }`}>
        <h1 className="text-center font-semibold">🚨 We are really sorry 🚨</h1>
        <p className="text-red-500 font-medium text-xs p-[40px]">
          The feature is currently unavailable because I can't implement the feature.
        </p>
      </div>
    </div>
  )
}

export default AlertError
