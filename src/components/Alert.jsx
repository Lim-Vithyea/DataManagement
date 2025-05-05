
import React from 'react';

const LogoutAlert = () => {
  return (
    <div
      className="fixed top-0 left-0 right-0 mx-auto p-4 mb-4 text-sm text-red-800 rounded-b-lg bg-blue-50 dark:bg-gray-800 dark:text-red-600 z-50"
      role="alert">
      <div className="max-w-4xl mx-auto">
        <span className="font-medium">Logged Out</span> You have successfully logged out.
      </div>
    </div>
  );
};

export default LogoutAlert;
