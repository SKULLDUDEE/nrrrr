import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="py-16 px-8  border-gray-300 bg-[#ffffff] relative overflow-hidden ">
      
      {/* ✨ Animated Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-orange-50 to-white opacity-50 pointer-events-none"></div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 relative z-10">
        
        {/* 🌟 Logo & Description */}
        <div className="flex flex-col items-start">
          <Link to="/">
            <img
              src={assets.logo}
              className="w-44 transform hover:scale-110 transition-transform duration-300 drop-shadow-lg"
              alt="Company Logo"
            />
          </Link>
          
          <a
            href="https://www.businessxstream.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-semibold text-orange-500 hover:text-orange-700 transition-colors duration-300 mt-4"
          >
            BusinessXstream.com
          </a>

          <p className="text-gray-700 max-w-sm text-lg leading-relaxed mt-3">
            Empowering businesses with cutting-edge solutions to streamline operations and accelerate growth.
          </p>
        </div>

        {/* 🚀 Quick Links */}
        <div className="mt-12">
          <p className="text-2xl font-bold text-gray-900 mb-6">Quick Links</p>
          <ul className="space-y-4 text-lg text-gray-700">
            {["Home", "About Us", "Contact"].map((item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="relative transition-all duration-300 hover:translate-x-2 hover:text-orange-600 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-orange-500 before:transition-all before:duration-300 hover:before:w-full"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 📜 Policies */}
        <div className="mt-12">
          <p className="text-2xl font-bold text-gray-900 mb-6">Policies</p>
          <ul className="space-y-4 text-lg text-gray-700">
            {["Privacy Policy", "Refund Policy"].map((item, index) => (
              <li key={index}>
                <Link
                  to="/privacy-policy"
                  className="relative transition-all duration-300 hover:translate-x-2 hover:text-orange-600 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-orange-500 before:transition-all before:duration-300 hover:before:w-full"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 🎯 Social Media Links */}
      <div className="mt-12 flex justify-center space-x-6 relative z-10">
        {[
          "https://www.instagram.com/businessxstream.tbs/",
          "https://www.facebook.com/profile.php?id=61572832430958&sk",
          "https://www.youtube.com/@THORONDORBUSINESSSOLUTIONS",
        ].map((link, index) => (
          <SocialIcon
            key={index}
            url={link}
            fgColor="black"
            bgColor="transparent"
            className="transition-transform duration-300 transform hover:scale-125 hover:rotate-6"
          />
        ))}
      </div>

      {/* 📌 Copyright Section */}
      <div className="mt-12 text-center relative z-10">
        <hr className="border-gray-300 mb-5" />
        <p className="text-gray-700 text-lg">
          Copyright © {new Date().getFullYear()} BusinessXStream - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
