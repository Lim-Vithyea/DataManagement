import React from 'react'
import { useState,useEffect } from 'react';

const DeleteAlert = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
    setTimeout(() => setShow(true), 2000);
  }, []);
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center transition-opacity duration-300">
      <div
        className={`bg-white p-6 rounded-lg shadow-lg transform transition-all duration-500 w-[400px] ${
          show ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-10"
        }`}>
        <h1 className="text-center font-semibold text-xs">🚨 Delete 🚨</h1>
        <p className="text-red-500 font-medium text-xs p-[40px] text-center ">
          User deleted
        </p>
      </div>
    </div>
    </div>
  )
}

export default DeleteAlert
