// import React from "react";
// import { Link } from "react-router-dom";
// import { SocialIcon } from "react-social-icons";
// import { assets } from "../assets/assets";
// import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div className="py-8 px-8 bg-[#130443] relative overflow-hidden w-full">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-6 relative z-10 w-full max-w-none">
//         {/* 🌟 Logo & Description */}
//         <div className="flex flex-col items-start">
//           <Link to="/">
//             <img
//               src={assets.logo}
//               className="w-44 transform hover:scale-110 transition-transform duration-300 drop-shadow-lg"
//               alt="Company Logo"
//             />
//           </Link>
          
//           <a
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-2xl font-semibold text-orange-500 hover:text-orange-700 transition-colors duration-300 mt-2"
//           >
//             BusinessXStream.com
//           </a>

//           <p className="text-[#ffffff] max-w-sm text-lg leading-relaxed mt-2">
//             Empowering businesses with cutting-edge solutions to streamline operations and accelerate growth.
//           </p>
//         </div>

//         {/* 🚀 Quick Links */}
//         <div className="mt-4 md:mt-0">
//           <p className="text-2xl font-bold text-[#ffffff] mb-3">Quick Links</p>
//           <ul className="space-y-2 text-lg text-[#ffffff]">
//             {["Home", "About", "Contact"].map((item, index) => (
//               <li key={index}>
//                 <Link
//                   to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
//                   className="relative transition-all duration-300 hover:translate-x-2 hover:text-orange-600 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-orange-500 before:transition-all before:duration-300 hover:before:w-full"
//                   onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//                 >
//                   {item}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* 📜 Policies */}
//         <div className="mt-4 md:mt-0">
//           <p className="text-2xl font-bold text-[#ffffff] mb-3">Policies</p>
//           <ul className="space-y-2 text-lg text-[#ffffff]">
//             {["Privacy Policy", "Refund Policy"].map((item, index) => (
//               <li key={index}>
//                 <Link
//                   to="/privacy-policy"
//                   className="relative transition-all duration-300 hover:translate-x-2 hover:text-orange-600 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-orange-500 before:transition-all before:duration-300 hover:before:w-full"
//                   onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//                 >
//                   {item}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* 📞 Contact Information */}
//         <div className="mt-4 md:mt-0">
//           <p className="text-2xl font-bold text-[#ffffff] mb-3">Contact Us</p>
//           <div className="space-y-4 text-[#ffffff]">
//             <div className="flex items-start space-x-2">
//               <FaMapMarkerAlt className="text-orange-500 text-xl mt-1 flex-shrink-0" />
//               <p className="text-lg">No 103, Shrija Towers, Kolachalam Compound, Ballari-583101, KA.</p>
//             </div>
//             <div className="space-y-2">
//               <div className="flex items-center space-x-2">
//                 <FaPhone className="text-orange-500 text-xl" />
//                 <a href="tel:+919731263690" className="text-lg hover:text-orange-500 transition-colors">+91 9731263690</a>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <FaPhone className="text-orange-500 text-xl" />
//                 <a href="tel:+919731263606" className="text-lg hover:text-orange-500 transition-colors">+91 9731263606</a>
//               </div>
//             </div>
//             <div className="space-y-2">
//               <div className="flex items-center space-x-2">
//                 <FaEnvelope className="text-orange-500 text-xl" />
//                 <a href="mailto:business@businessxstream.com" className="text-lg hover:text-orange-500 transition-colors">business@businessxstream.com</a>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <FaEnvelope className="text-orange-500 text-xl" />
//                 <a href="mailto:info@businessxstream.com" className="text-lg hover:text-orange-500 transition-colors">info@businessxstream.com</a>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <FaEnvelope className="text-orange-500 text-xl" />
//                 <a href="mailto:admin@businessxstream.com" className="text-lg hover:text-orange-500 transition-colors">admin@businessxstream.com</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* 🎯 Social Media Links */}
//       <div className="mt-6 flex justify-center space-x-6 relative z-10">
//         {[
//           "https://www.instagram.com/businessxstream.tbs/",
//           "https://www.facebook.com/profile.php?id=61572832430958&sk",
//           "https://www.youtube.com/@THORONDORBUSINESSSOLUTIONS",
//         ].map((link, index) => (
//           <SocialIcon
//             key={index}
//             url={link}
//             fgColor="white"
//             bgColor="transparent"
//             className="transition-transform duration-300 transform hover:scale-125 hover:rotate-6"
//           />
//         ))}
//       </div>

//       {/* 📌 Copyright Section */}
//       <div className="mt-6 text-center relative z-10">
//         <hr className="border-[#fbdbdbff] mb-3" />
//         <p className="text-[#896f6f] text-lg">
//           Copyright © {new Date().getFullYear()} BusinessXStream - All Rights Reserved.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Footer;
// import React from "react";
// import { Link } from "react-router-dom";
// import { SocialIcon } from "react-social-icons";
// import { assets } from "../assets/assets";
// import { 
//   BiSolidMapPin, 
//   BiSolidPhone, 
//   BiSolidEnvelope,
//   BiSolidHome,
//   BiSolidInfoCircle,
//   BiSolidContact,
//   BiSolidLock,
//   BiSolidCreditCard
// } from "react-icons/bi";

// const Footer = () => {
//   return (
//     <div className="py-6 px-8 bg-[#130443] relative overflow-hidden w-full">
//       <div className="container mx-auto relative z-10">
//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-6">
//           {/* Company Info Section */}
//           <div className="flex flex-col">
//             <div className="flex items-center gap-4 mb-4">
//               <Link to="/">
//                 <img
//                   src={assets.logo}
//                   className="w-32 transform hover:scale-110 transition-transform duration-300 drop-shadow-lg"
//                   alt="Company Logo"
//                 />
//               </Link>
//               <a
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-2xl font-bold text-orange-500 hover:text-orange-700 transition-colors duration-300"
//               >
//                 BusinessXStream
//               </a>
//             </div>
//             <p className="text-[#ffffff] text-sm leading-relaxed">
//               Empowering businesses with cutting-edge solutions to streamline operations and accelerate growth.
//             </p>
//             <div className="flex mt-3 space-x-4">
//               {[
//                 "https://www.instagram.com/businessxstream.tbs/",
//                 "https://www.facebook.com/profile.php?id=61572832430958&sk",
//                 "https://www.youtube.com/@THORONDORBUSINESSSOLUTIONS",
//               ].map((link, index) => (
//                 <SocialIcon
//                   key={index}
//                   url={link}
//                   fgColor="white"
//                   bgColor="transparent"
//                   style={{ height: 35, width: 35 }}
//                   className="transform hover:scale-125 hover:rotate-6 transition-all duration-300"
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <p className="text-lg font-bold text-[#ffffff] mb-3">Quick Links</p>
//             <ul className="space-y-2 text-sm text-[#ffffff]">
//               {[
//                 { name: "Home", icon: <BiSolidHome className="text-orange-500 text-lg" /> },
//                 { name: "About", icon: <BiSolidInfoCircle className="text-orange-500 text-lg" /> },
//                 { name: "Contact", icon: <BiSolidContact className="text-orange-500 text-lg" /> }
//               ].map((item, index) => (
//                 <li key={index}>
//                   <Link
//                     to={item.name === "Home" ? "/" : `/${item.name.toLowerCase().replace(" ", "-")}`}
//                     className="relative transition-all duration-300 hover:translate-x-2 hover:text-orange-600 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-orange-500 before:transition-all before:duration-300 hover:before:w-full flex items-center gap-2 group"
//                     onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//                   >
//                     <span className="transform group-hover:scale-125 transition-transform">{item.icon}</span>
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Policies */}
//           <div>
//             <p className="text-lg font-bold text-[#ffffff] mb-3">Policies</p>
//             <ul className="space-y-2 text-sm text-[#ffffff]">
//               {[
//                 { name: "Privacy Policy", icon: <BiSolidLock className="text-orange-500 text-lg" /> },
//                 { name: "Refund Policy", icon: <BiSolidCreditCard className="text-orange-500 text-lg" /> }
//               ].map((item, index) => (
//                 <li key={index}>
//                   <Link
//                     to="/privacy-policy"
//                     className="relative transition-all duration-300 hover:translate-x-2 hover:text-orange-600 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-orange-500 before:transition-all before:duration-300 hover:before:w-full flex items-center gap-2 group"
//                     onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//                   >
//                     <span className="transform group-hover:scale-125 transition-transform">{item.icon}</span>
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <p className="text-lg font-bold text-[#ffffff] mb-3">Contact Us</p>
//             <div className="space-y-3 text-sm text-[#ffffff]">
//               <div className="flex items-start gap-2 group">
//                 <BiSolidMapPin className="text-orange-500 text-xl mt-1 flex-shrink-0 group-hover:scale-125 transition-transform" />
//                 <p>No 103, Shrija Towers, Kolachalam Compound, Ballari-583101, KA.</p>
//               </div>
//               <div className="flex items-center gap-2 group">
//                 <BiSolidPhone className="text-orange-500 text-xl flex-shrink-0 group-hover:scale-125 transition-transform" />
//                 <div className="flex flex-col">
//                   <a href="tel:+919731263690" className="hover:text-orange-500 transition-colors">+91 9731263690</a>
//                   <a href="tel:+919731263606" className="hover:text-orange-500 transition-colors">+91 9731263606</a>
//                 </div>
//               </div>
//               <div className="flex flex-col gap-2">
//                 <div className="flex items-center gap-2 group">
//                   <BiSolidEnvelope className="text-orange-500 text-xl flex-shrink-0 group-hover:scale-125 transition-transform" />
//                   <a href="mailto:business@businessxstream.com" className="hover:text-orange-500 transition-colors">business@businessxstream.com</a>
//                 </div>
//                 <div className="flex items-center gap-2 group pl-6">
//                   <a href="mailto:info@businessxstream.com" className="hover:text-orange-500 transition-colors">info@businessxstream.com</a>
//                 </div>
//                 <div className="flex items-center gap-2 group pl-6">
//                   <a href="mailto:admin@businessxstream.com" className="hover:text-orange-500 transition-colors">admin@businessxstream.com</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Copyright Section */}
//         <div className="mt-4 text-center">
//           <hr className="border-[#fbdbdbff] mb-3" />
//           <p className="text-[#896f6f] text-sm">
//             Copyright © {new Date().getFullYear()} BusinessXStream - All Rights Reserved.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
// import React from "react";
// import { Link } from "react-router-dom";
// import { SocialIcon } from "react-social-icons";
// import { assets } from "../assets/assets";
// import { 
//   BiSolidMapPin, 
//   BiSolidPhone, 
//   BiSolidEnvelope,
//   BiSolidHome,
//   BiSolidInfoCircle,
//   BiSolidContact,
//   BiSolidLock,
//   BiSolidCreditCard
// } from "react-icons/bi";

// const Footer = () => {
//   return (
//     <div className="py-6 px-8 bg-[#130443] relative overflow-hidden w-full ">
//       <div className="container mx-auto relative z-10">
//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-6">
//           {/* Company Info Section */}
//           <div className="flex flex-col">
//             <div className="flex items-center gap-2 mb-4"> {/* Reduced the gap */}
//               <Link to="/">
//                 <img
//                   src={assets.logo}
//                   className="w-32 transform hover:scale-110 transition-transform duration-300 drop-shadow-lg hover:rotate-6" // 3D effect
//                   alt="Company Logo"
//                 />
//               </Link>
//               <a
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-2xl font-bold text-orange-500 hover:text-orange-700 transition-colors duration-300"
//               >
//                 BusinessXStream
//               </a>
//             </div>
//             <p className="text-[#ffffff] text-sm leading-relaxed">
//               Empowering businesses with cutting-edge solutions to streamline operations and accelerate growth.
//             </p>
//             <div className="flex mt-3 space-x-4">
//               {[
//                 "https://www.instagram.com/businessxstream.tbs/",
//                 "https://www.facebook.com/profile.php?id=61572832430958&sk",
//                 "https://www.youtube.com/@THORONDORBUSINESSSOLUTIONS",
//               ].map((link, index) => (
//                 <SocialIcon
//                   key={index}
//                   url={link}
//                   fgColor="white"
//                   bgColor="transparent"
//                   style={{ height: 35, width: 35 }}
//                   className="transform hover:scale-125 hover:rotate-6 transition-all duration-300"
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <p className="text-lg font-bold text-[#ffffff] mb-3">Quick Links</p>
//             <ul className="space-y-2 text-sm text-[#ffffff]">
//               {[
//                 { name: "Home", icon: <BiSolidHome className="text-orange-500 text-lg" /> },
//                 { name: "About", icon: <BiSolidInfoCircle className="text-orange-500 text-lg" /> },
//                 { name: "Contact", icon: <BiSolidContact className="text-orange-500 text-lg" /> }
//               ].map((item, index) => (
//                 <li key={index}>
//                   <Link
//                     to={item.name === "Home" ? "/" : `/${item.name.toLowerCase().replace(" ", "-")}`}
//                     className="relative transition-all duration-300 hover:translate-x-2 hover:text-orange-600 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-orange-500 before:transition-all before:duration-300 hover:before:w-full flex items-center gap-2 group"
//                     onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//                   >
//                     <span className="transform group-hover:scale-125 transition-transform">{item.icon}</span>
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Policies */}
//           <div>
//             <p className="text-lg font-bold text-[#ffffff] mb-3">Policies</p>
//             <ul className="space-y-2 text-sm text-[#ffffff]">
//               {[
//                 { name: "Privacy Policy", icon: <BiSolidLock className="text-orange-500 text-lg" /> },
//                 { name: "Refund Policy", icon: <BiSolidCreditCard className="text-orange-500 text-lg" /> }
//               ].map((item, index) => (
//                 <li key={index}>
//                   <Link
//                     to="/privacy-policy"
//                     className="relative transition-all duration-300 hover:translate-x-2 hover:text-orange-600 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-orange-500 before:transition-all before:duration-300 hover:before:w-full flex items-center gap-2 group"
//                     onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//                   >
//                     <span className="transform group-hover:scale-125 transition-transform">{item.icon}</span>
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <p className="text-lg font-bold text-[#ffffff] mb-3">Contact Us</p>
//             <div className="space-y-3 text-sm text-[#ffffff]">
//               <div className="flex items-start gap-2 group">
//                 <BiSolidMapPin className="text-orange-500 text-xl mt-1 flex-shrink-0 group-hover:scale-125 transition-transform" />
//                 <p>No 103, Shrija Towers, Kolachalam Compound, Ballari-583101, KA.</p>
//               </div>
//               <div className="flex items-center gap-2 group">
//                 <BiSolidPhone className="text-orange-500 text-xl flex-shrink-0 group-hover:scale-125 transition-transform" />
//                 <div className="flex flex-col">
//                   <a href="tel:+919731263690" className="hover:text-orange-500 transition-colors">+91 9731263690</a>
//                   <a href="tel:+919731263606" className="hover:text-orange-500 transition-colors">+91 9731263606</a>
//                 </div>
//               </div>
//               <div className="flex flex-col gap-2">
//                 <div className="flex items-center gap-2 group">
//                   <BiSolidEnvelope className="text-orange-500 text-xl flex-shrink-0 group-hover:scale-125 transition-transform" />
//                   <a href="mailto:business@businessxstream.com" className="hover:text-orange-500 transition-colors">business@businessxstream.com</a>
//                 </div>
//                 <div className="flex items-center gap-2 group pl-6">
//                   <a href="mailto:info@businessxstream.com" className="hover:text-orange-500 transition-colors">info@businessxstream.com</a>
//                 </div>
//                 <div className="flex items-center gap-2 group pl-6">
//                   <a href="mailto:admin@businessxstream.com" className="hover:text-orange-500 transition-colors">admin@businessxstream.com</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Copyright Section */}
//         <div className="mt-4 text-center">
//           <hr className="border-[#fbdbdbff] mb-3" />
//           <p className="text-[#896f6f] text-sm">
//             Copyright © {new Date().getFullYear()} BusinessXStream - All Rights Reserved.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { assets } from "../assets/assets";
import { 
  BiSolidMapPin, 
  BiSolidPhone, 
  BiSolidEnvelope,
  BiSolidHome,
  BiSolidInfoCircle,
  BiSolidContact,
  BiSolidLock,
  BiSolidCreditCard
} from "react-icons/bi";

const Footer = () => {
  return (
    <div className="py-6 px-8 bg-[#130443] w-full">
      {/* Full-width container */}
      <div className="w-full max-w-screen-xl mx-auto relative z-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"> {/* Ensure this grid is full width */}
          
          {/* Company Info Section */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <Link to="/">
                <img
                  src={assets.logo}
                  className="w-32 transform hover:scale-110 transition-transform duration-300 drop-shadow-lg hover:rotate-6" // 3D effect
                  alt="Company Logo"
                />
              </Link>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold text-orange-500 hover:text-orange-700 transition-colors duration-300"
              >
                BusinessXStream
              </a>
            </div>
            <p className="text-[#ffffff] text-sm leading-relaxed">
              Empowering businesses with cutting-edge solutions to streamline operations and accelerate growth.
            </p>
            <div className="flex mt-3 space-x-4">
              {[
                "https://www.instagram.com/businessxstream.tbs/",
                "https://www.facebook.com/profile.php?id=61572832430958&sk",
                "https://www.youtube.com/@THORONDORBUSINESSSOLUTIONS",
              ].map((link, index) => (
                <SocialIcon
                  key={index}
                  url={link}
                  fgColor="white"
                  bgColor="transparent"
                  style={{ height: 35, width: 35 }}
                  className="transform hover:scale-125 hover:rotate-6 transition-all duration-300"
                />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-lg font-bold text-[#ffffff] mb-3">Quick Links</p>
            <ul className="space-y-2 text-sm text-[#ffffff]">
              {[
                { name: "Home", icon: <BiSolidHome className="text-orange-500 text-lg" /> },
                { name: "About", icon: <BiSolidInfoCircle className="text-orange-500 text-lg" /> },
                { name: "Contact", icon: <BiSolidContact className="text-orange-500 text-lg" /> }
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.name === "Home" ? "/" : `/${item.name.toLowerCase().replace(" ", "-")}`}
                    className="relative transition-all duration-300 hover:translate-x-2 hover:text-orange-600 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-orange-500 before:transition-all before:duration-300 hover:before:w-full flex items-center gap-2 group"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  >
                    <span className="transform group-hover:scale-125 transition-transform">{item.icon}</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <p className="text-lg font-bold text-[#ffffff] mb-3">Policies</p>
            <ul className="space-y-2 text-sm text-[#ffffff]">
              {[
                { name: "Privacy Policy", icon: <BiSolidLock className="text-orange-500 text-lg" /> },
                { name: "Refund Policy", icon: <BiSolidCreditCard className="text-orange-500 text-lg" /> }
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to="/privacy-policy"
                    className="relative transition-all duration-300 hover:translate-x-2 hover:text-orange-600 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-orange-500 before:transition-all before:duration-300 hover:before:w-full flex items-center gap-2 group"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  >
                    <span className="transform group-hover:scale-125 transition-transform">{item.icon}</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-lg font-bold text-[#ffffff] mb-3">Contact Us</p>
            <div className="space-y-3 text-sm text-[#ffffff]">
              <div className="flex items-start gap-2 group">
                <BiSolidMapPin className="text-orange-500 text-xl mt-1 flex-shrink-0 group-hover:scale-125 transition-transform" />
                <p>No 103, Shrija Towers, Kolachalam Compound, Ballari-583101, KA.</p>
              </div>
              <div className="flex items-center gap-2 group">
                <BiSolidPhone className="text-orange-500 text-xl flex-shrink-0 group-hover:scale-125 transition-transform" />
                <div className="flex flex-col">
                  <a href="tel:+919731263690" className="hover:text-orange-500 transition-colors">+91 9731263690</a>
                  <a href="tel:+919731263606" className="hover:text-orange-500 transition-colors">+91 9731263606</a>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 group">
                  <BiSolidEnvelope className="text-orange-500 text-xl flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <a href="mailto:business@businessxstream.com" className="hover:text-orange-500 transition-colors">business@businessxstream.com</a>
                </div>
                <div className="flex items-center gap-2 group pl-6">
                  <a href="mailto:info@businessxstream.com" className="hover:text-orange-500 transition-colors">info@businessxstream.com</a>
                </div>
                <div className="flex items-center gap-2 group pl-6">
                  <a href="mailto:admin@businessxstream.com" className="hover:text-orange-500 transition-colors">admin@businessxstream.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-4 text-center">
          <hr className="border-[#fbdbdbff] mb-3" />
          <p className="text-[#896f6f] text-sm">
            Copyright © {new Date().getFullYear()} BusinessXStream - All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
