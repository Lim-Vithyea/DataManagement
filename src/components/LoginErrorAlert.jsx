import React from 'react';

const LoginErrorAlert = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="p-4 pt-[40px] text-center text-sm text-red-500 rounded-lg bg-gray-800 lg:w-[600px] h-[100px] ">
        <span className="font-medium"> Wrong username or password</span>
      </div>
    </div>
  );
};

export default LoginErrorAlert;
