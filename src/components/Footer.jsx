import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-none text-white py-12">
      {/* Footer Grid */}
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-14 text-sm">
        {/* Logo & Description */}
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="Company Logo" />
          <p className="text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text since the 1500s, when an unknown printer scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Company Links with Routing */}
        <div>
          <p className="text-xl font-medium mb-5 text-white">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li>
              <Link to="/" className="hover:text-white cursor-pointer">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white cursor-pointer">About Us</Link>
            </li>
            
            <li>
              <Link to="/privacy-policy" className="hover:text-white cursor-pointer">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <p className="text-xl font-medium mb-5 text-white">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li>+1-212-456-7890</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-10">
        <hr className="border-gray-700" />
        <p className="py-5 text-center text-gray-400 text-sm">
          Copyright © 2024 forever.com - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
