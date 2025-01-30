import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="py-12 px-6 border-t border-gray-300">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12">
        {/* Logo & Description */}
        <div className="flex flex-col items-start">
          <img
            src={assets.logo}
            className="mt-10 w-40 transform hover:scale-110 transition-transform duration-300"
            alt="Company Logo"
          />
          <p className="text-gray-800 max-w-sm text-lg leading-relaxed">
            Empowering businesses with cutting-edge solutions to streamline operations and accelerate growth.
          </p>
        </div>

        {/* Company Links */}
        <div className="mt-20">
        
          <ul className="space-y-3 text-lg text-gray-800">
            <li>
              <Link
                to="/"
                className="hover:text-black transition-all duration-300 hover:translate-x-2"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-black transition-all duration-300 hover:translate-x-2"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-black transition-all duration-300 hover:translate-x-2"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <p className="text-2xl font-semibold mt-20 text-black">CONNECT WITH US</p>
          <div className="flex space-x-4">
            <SocialIcon
              url="https://www.instagram.com/businessxstream.tbs/"
              fgColor="black"
              bgColor="transparent"
              className="transition-transform duration-300 transform hover:scale-125"
            />
            <SocialIcon
              url="https://www.facebook.com/profile.php?id=61572832430958&sk"
              fgColor="black"
              bgColor="transparent"
              className="transition-transform duration-300 transform hover:scale-125"
            />
            <SocialIcon
              url="https://www.youtube.com/@THORONDORBUSINESSSOLUTIONS"
              fgColor="black"
              bgColor="transparent"
              className="transition-transform duration-300 transform hover:scale-125"
            />
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-12 text-center">
        <hr className="border-gray-300 mb-5" />
        <p className="text-gray-800 text-lg">
          Copyright © {new Date().getFullYear()} BusinessXStream - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;



// npm install react-social-icons