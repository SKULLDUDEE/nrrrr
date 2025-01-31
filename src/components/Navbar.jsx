import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const { setShowSearch, getCartCount, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 
     bg-[#FFFFFF] opacity-100 shadow-none">
      {/* Navbar Content */}
      <div className="w-full flex justify-between items-center px-6 sm:px-12 py-4 ">
        {/* Logo and Tagline */}
        <div className="flex items-center gap-4 hover:scale-110 hover:text-green-600 transition-all duration-400 ease-in-out">
          <Link to="/">
            <img src={assets.logo} alt="BusinessXstream" className="h-14 cursor-pointer  " />
          </Link>
          <Link to="/">
          <p className="hidden md:block text-gray-200 italic font-extrabold tracking-wide text-2xl ">
            <span className="text-blue-900">B</span>
            <span className="text-gray-800">usiness</span>
            <span className="text-red-500">X</span>
            <span className="text-gray-800">stream.com</span>
          </p>
          </Link>
          
        </div>

        {/* Navigation Links */}
        <nav className="hidden sm:flex gap-2 text-lg ml-125 ">
          {[{ name: "HOME", path: "/" }, { name: "REGISTRATION", path: "/registration" }, { name: "ABOUT US", path: "/about" }, { name: "CONTACT", path: "/contact" }].map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `relative px-4 py-2 text-black-200 tracking-wide uppercase
                transition-all duration-300 ease-in-out
                hover:text-[#6D6D6D] hover:scale-110
                before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px]
                before:bg-[#6D6D6D] before:transition-all before:duration-500
                before:ease-in-out before:rounded-full
                hover:before:w-full hover:before:left-0
                ${isActive ? "text-black font-normal" : ""}`
              }
              style={{ textDecoration: "none" }}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center gap-6">
          {/* Profile Icon */}
          <div className="relative group">
          
            <img
              onClick={() => (token ? null : navigate('/login'))}
              className="w-7 cursor-pointer hover:scale-110 transition-all mb-2"
              src={assets.profile_icon}
              alt="Profile"
            />
            
          </div>

          {/* Cart Icon */}
          

          {/* Mobile Menu Icon */}
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className="w-7 cursor-pointer sm:hidden hover:scale-110 transition-all"
            alt="Menu"
          />
        </div>
      </div>

      {/* 📱 Mobile Sidebar Menu */}
      <div className={`fixed top-0 right-0 h-full bg-gray-900 text-gray-300 shadow-lg transition-all ${visible ? 'w-64' : 'w-0'} overflow-hidden`}>
        <div className="flex flex-col">
          <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-700 transition-all">
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="Back" />
            <p>Back</p>
          </div>
          {[{ name: "HOME", path: "/" }, { name: "REGISTRATION", path: "/registration" }, { name: "ABOUT US", path: "/about" }, { name: "CONTACT", path: "/contact" }].map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => setVisible(false)}
              className="py-3 pl-6 border-b border-gray-700 hover:bg-gray-800 transition-all"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
