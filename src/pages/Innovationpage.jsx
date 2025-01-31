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
import "../styles.css"; // Ensures styles are applied
import backimg from "../assets/backimg.png"; // Imports background image

const InnovationPage = () => {
  return (
    <div
      className="absolute top-0 left-0 w-full min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${backimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0  bg-opacity-60"></div>

      {/* Main container with centered text */}
      <div className="relative w-full h-full flex flex-col justify-center items-center text-center px-6 sm:px-12">
        <p className="text-3xl sm:text-7xl font-extrabold tracking-wide mt-6">
          {/* Each word with individual styling and animation */}
          <span className="inline-block mx-6 hover-effect text-shadow text-[#E96230]">
            Innova
            <span className=" text-[#E96230]">te</span>
          </span>

          <span className="inline-block mx-6 text-blue-500 hover-effect transition-all duration-400 ease-in-out">
            Strateg
            <span className=" text-blue-500">ize</span>
          </span>

          <span className="inline-block mx-6 text-[#E96230] hover-effect transition-all duration-300 ease-in-out">
            Ach
            <span className=" text-[#E96230]]">ieve</span>
          </span>
        </p>

        <p className="text-2xl sm:text-4xl font-semibold text-black-300 mt-6 typing-effect">
          We help you 
          <span className="text-red-500"> innovate</span>, 
          <span className="text-red-500"> strategize</span>, and 
          <span className="text-red-500"> achieve</span> your business goals.
        </p>
      </div>
    </div>
  );
};

export default InnovationPage;
