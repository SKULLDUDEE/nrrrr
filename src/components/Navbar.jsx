import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false); // Added state for dropdown visibility in desktop
  const [mobileDropdownVisible, setMobileDropdownVisible] = useState(false); // Added state for mobile dropdown visibility
  const navigate = useNavigate();
  const { setShowSearch, getCartCount, token, setToken, setCartItems } =
    useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  const handleMobileDropdownToggle = () => {
    setMobileDropdownVisible(!mobileDropdownVisible);
  };

  const handleMobileNavigation = (path) => {
    navigate(path);
    setMobileDropdownVisible(false); // Close the dropdown after navigating
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#FFFFFF] opacity-100 shadow-none ">
      {/* Navbar Content */}
      <div className="w-full flex justify-between items-center px-6 sm:px-12 py-4 ">
        {/* Logo and Tagline */}
        <div className=" items-center hover:scale-110 hover:text-green-600 transition-all duration-400 ease-in-out">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-0"
          >
            <img
              src={assets.logo}
              alt="BusinessXstream"
              className="h-12 cursor-pointer"
            />
          <p className="flex text-gray-200 font-extrabold tracking-wide text-2xl sm:text-lg md:text-2xl text-xl sm:text-base">
  <span className="text-blue-900">B</span>
  <span className="text-gray-800">usiness</span>
  <span className="text-red-500">X</span>
  <span className="text-gray-800">Stream.com</span>
</p>

          </Link>
          <div class="hidden sm:flex gap-4 ml-6 justify-center w-full">
  <span class="bg-black text-transparent bg-clip-text text-xl sm:text-lg w-auto sm:w-auto">Innovate</span>
  <span class="bg-[#d10000ff] text-transparent bg-clip-text text-xl sm:text-lg w-auto sm:w-auto">Strategize</span>
  <span class="bg-black text-transparent bg-clip-text text-xl sm:text-lg w-auto sm:w-auto">Achieve</span>
</div>

        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden sm:flex gap-2 text-xl ml-[125px]">
          {[
            { name: "HOME", path: "/" },
            { name: "ABOUT US", path: "/about" },
            { name: "CONTACT", path: "/contact" },
          ].map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} // Scroll to top when clicked
              className={({ isActive }) =>
                `relative px-4 py-2 text-black tracking-wide uppercase transition-all duration-300 ease-in-out hover:text-[#6D6D6D] hover:scale-110 before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-[#6D6D6D] before:transition-all before:duration-500 before:ease-in-out before:rounded-full hover:before:w-full hover:before:left-0 ${
                  isActive ? "text-black font-normal" : ""
                }`
              }
              style={{ textDecoration: "none" }}
            >
              {item.name}
            </NavLink>
          ))}

          {/* REGISTRATION Dropdown Menu (Desktop) */}
          <div
            className="relative group"
            onMouseEnter={() => setDropdownVisible(true)} // Show dropdown on hover
            onMouseLeave={() => setDropdownVisible(false)} // Hide dropdown when leaving the dropdown area
          >
            <button className="px-4 py-2 text-black tracking-wide uppercase transition-all duration-300 ease-in-out hover:text-[#6D6D6D] hover:scale-110">
              REGISTRATION
            </button>
            {/* Dropdown content */}
            {dropdownVisible && (
              <div className="absolute bg-white shadow-lg mt-2 z-10 rounded-lg">
                <NavLink
                  to="/franchise"
                  className="block px-4 py-2 text-black hover:bg-gray-100 transition-all"
                >
                  Franchise
                </NavLink>
                <NavLink
                  to="/dealership"
                  className="block px-4 py-2 text-black hover:bg-gray-100 transition-all"
                >
                  Dealership
                </NavLink>
                <NavLink
                  to="/sell-your-businesss"
                  className="block px-4 py-2 text-black hover:bg-gray-100 transition-all"
                >
                  Sell Your Business
                </NavLink>
              </div>
            )}
          </div>
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center gap-6">
          {/* Profile Icon */}
          <div className="relative group">
            <img
              onClick={() => (token ? null : navigate("/login"))}
              className="w-7 cursor-pointer hover:scale-110 transition-all mb-2 ml-8 mt-2 "
              src={assets.profile_icon}
              alt="Profile"
            />
            {/* <h1
              onClick={() => (token ? null : navigate("/login"))}
              className="text-red-500 cursor-pointer"
            >
              LOGIN/SIGNUP
            </h1> */}
          </div>

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
      <div
        className={`fixed top-0 right-0 h-full bg-gray-900 text-gray-300 shadow-lg transition-all ${
          visible ? "w-64" : "w-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-700 transition-all"
          >
            <img
              className="h-4 rotate-180"
              src={assets.dropdown_icon}
              alt="Back"
            />
            <p>Back</p>
          </div>

          {/* Mobile REGISTRATION Dropdown */}
          <div
            className="py-3 pl-6 border-b border-gray-700 hover:bg-gray-800 transition-all cursor-pointer"
            onClick={handleMobileDropdownToggle}
          >
            REGISTRATION
          </div>
          {mobileDropdownVisible && (
            <div>
              <div
                onClick={() => handleMobileNavigation("/franchise")}
                className="py-3 pl-6 border-b border-gray-700 hover:bg-gray-800 transition-all cursor-pointer"
              >
                Franchise
              </div>
              <div
                onClick={() => handleMobileNavigation("/dealership")}
                className="py-3 pl-6 border-b border-gray-700 hover:bg-gray-800 transition-all cursor-pointer"
              >
                Dealership
              </div>
              <div
                onClick={() => handleMobileNavigation("/sell-your-businesss")}
                className="py-3 pl-6 border-b border-gray-700 hover:bg-gray-800 transition-all cursor-pointer"
              >
                Sell Your Business
              </div>
            </div>
          )}

          {[
            { name: "HOME", path: "/" },
            { name: "ABOUT US", path: "/about" },
            { name: "CONTACT", path: "/contact" },
          ].map((item, index) => (
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
