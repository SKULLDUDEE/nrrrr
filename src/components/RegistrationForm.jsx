import React from "react";

const RegistrationForm = () => {
  return (
    <div className="mt-80 sm:mt-70 flex justify-center items-center w-full min-h-screen">
      <div className="sm:w-96 w-full bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-xl font-semibold text-center mb-4">Quick Registration</h2>
        <form>
          
          <input
            type="text"
            className="w-full px-4 py-2 border rounded mb-4"
            placeholder="Enter Your Name"
          />
          <input
            type="tel"
            className="w-full px-4 py-2 border rounded mb-4"
            placeholder="Enter Your Mobile No."
          />
          <input
            type="email"
            className="w-full px-4 py-2 border rounded mb-4"
            placeholder="Enter Your Email ID"
          />
          <input
            type="text"
            className="w-full px-4 py-2 border rounded mb-4"
            placeholder="Enter Company Name"
          />
          <button className="w-full bg-orange-500 hover:bg-red-500 text-white font-bold py-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
