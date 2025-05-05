import React from 'react'

const SuccessMessage = ({successMessage}) => {
  return (
    <>
    {successMessage && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
            Data insert successfully
        </div>
     )}
     </>
  )
}

export default SuccessMessage