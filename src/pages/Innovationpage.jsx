// import React from "react";
// import '../styles.css';  // This assumes styles.css is in the same folder as your component
// import backimg from "../assets/backimg.png";
// const InnovationPage = () => {
//   return (
//     <div
//     // bg-blACK
//       className="absolute top-0 left-0 w-full min-h-screen  flex justify-center items-center"
//       style={{
//         backgroundImage: `url(${backimg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Overlay for better text visibility */}
//       {/* bg-black */}
//       <div className="absolute inset-0  bg-opacity-40"></div>
      
//       {/* Main container with centered text */}
//       <div className="relative w-full h-full flex flex-col justify-center items-center text-center px-6 sm:px-12">
        
       

//         <p className="text-3xl sm:text-7xl font-extrabold text-white tracking-wide mt-6">
//           {/* Each word with individual styling and animation */}
//           <span className="inline-block mx-6 hover-effect text-shadow">
//             Inova
//             <span className="text-animated">
//               te
//             </span>
//           </span>

//           <span className="inline-block mx-6 text-lightblue-100 hover-effect transition-all duration-400 ease-in-out">
//             Strateg
//             <span className="text-animated">
//               ize
//             </span>
//           </span>

//           <span className="inline-block mx-6 text-lightblue-100 hover-effect transition-all duration-300 ease-in-out">
//             Ach
//             <span className="text-animated">
//               ieve
//             </span>
//           </span>
//         </p>
//         <p className="text-2xl sm:text-4xl font-semibold text-gray-300 mt-6 typing-effect">
//           We help you innovate, strategize, and achieve your business goals
//         </p>
//       </div>
//     </div>
//   );
// };

// export default InnovationPage;

import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles.css';
import backimg from "../assets/backimg.png";

const InnovationPage = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="absolute top-0 left-0 w-full h-1/2 sm:h-3/4 flex justify-center items-center mt-20">
      
      {/* Background with blur effect */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)",  // Apply blur effect to the background
          zIndex: -1,  // Ensure it's behind the content
        }}
      ></div>

      <div className="absolute inset-0 bg-opacity-40"></div>

      <div className="relative w-full h-full flex flex-col justify-center items-center text-center px-6 sm:px-12">
        <p className="text-3xl sm:text-6xl font-extrabold tracking-wide mt-6" 
           style={{ color: "black" }}>
          <span className="inline-block mx-6 hover-effect" style={{ color: "white" }}>
            Inno<span style={{ color: "black" }}>vate</span>
          </span>
          <span className="inline-block mx-6 hover-effect" style={{ color: "black" }}>
            Strateg<span style={{ color: "white" }}>ize</span>
          </span>
          <span className="inline-block mx-6 hover-effect" style={{ color: "white" }}>
            Achie<span style={{ color: "orange" }}>ve</span>
          </span>
        </p>

        <p className="text-2xl sm:text-4xl font-semibold typing-effect mt-6" 
           style={{ color: "black" }}>
          We help you <span style={{ color: "white" }}>innovate</span>, 
          <span style={{ color: "white" }}> strategize</span>, and 
          <span style={{ color: "red" }}> achieve</span> your business goals
        </p>

        {/* Enhanced Dropdown with Button */}
        <div className="flex mt-8 border rounded-md overflow-hidden shadow-xl bg-white">
          <select
            className="px-6 py-3 w-60 sm:w-130 bg-white text-black font-semibold focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300 ease-in-out"
            defaultValue=""
          >
            <option value="" disabled>Select an option</option>
            <option value="/franchise" className="hover:bg-orange-200">Franchise</option>
            <option value="/dealership" className="hover:bg-orange-200">Dealership</option>
            <option value="/sell-your-businesss" className="hover:bg-orange-200">Sell Your Business</option>
          </select>

          <button
            className="bg-orange-500 hover:bg-red-500 text-white px-8 py-3 font-bold transition duration-300 ease-in-out"
            onClick={() => {
              const selectElement = document.querySelector("select");
              if (selectElement.value) handleNavigation(selectElement.value);
            }}
          >
            CREATE PROFILE
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default InnovationPage;
