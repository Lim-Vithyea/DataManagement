import React from 'react';

const LoginAlert = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="p-4 pt-[40px] text-center text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-600 w-[500px] h-[100px]">
        <span className="font-medium">Logged In</span> You have successfully logged in....
      </div>
    </div>
  );
};

export default LoginAlert;
