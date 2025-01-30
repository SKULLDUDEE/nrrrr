import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate(); // ✅ Corrected: Using useNavigate()
    const { setShowSearch, getCartCount, token, setToken, setCartItems } = useContext(ShopContext);

    const logout = () => {
        navigate('/login');
        localStorage.removeItem('token');
        setToken('');
        setCartItems({});
    };

    return (
        <div className="w-full relative bg-gradient-to-r from-orange-400 to-orange-500 text-white px-6 sm:px-12">
            
            {/* BusinessXstream.com Logo */}
            <div className="flex justify-between items-center py-5">
                <Link to="/" className="text-4xl font-bold">
                    <span className="text-blue-300">B</span>
                    <span>usiness</span>
                    <span className="text-red-500">X</span>
                    <span>stream</span>
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden sm:flex gap-10 text-lg">
                    {[
                        { name: "HOME", path: "/" },
                        { name: "REGISTRATION", path: "/registration" },
                        { name: "ABOUT US", path: "/about" },
                        { name: "CONTACT", path: "/contact" },
                    ].map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.path} // ✅ Corrected: Explicit path mapping
                            className={({ isActive }) =>
                                `group relative text-gray-200 hover:text-white transition-all ${
                                    isActive ? "text-white font-semibold" : ""
                                }`
                            }
                        >
                            {item.name}
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-all"></span>
                        </NavLink>
                    ))}
                </div>

                {/* Right Icons (Search, Profile, Cart, Menu) */}
                <div className="flex items-center gap-6">
                    {/* Search Icon */}
                    

                    {/* Profile Dropdown */}
                    <div className="relative">
                        <img
                            onClick={() => token ? null : navigate('/login')}
                            className="w-6 cursor-pointer hover:scale-110 transition-all"
                            src={assets.profile_icon}
                            alt="Profile"
                        />
                        {token && (
                            <div className="absolute right-0 pt-4 hidden group-hover:block">
                                <div className="flex flex-col gap-2 w-40 py-3 px-5 bg-gray-800 text-gray-200 rounded shadow-lg">
                                    <p className="cursor-pointer hover:text-white" onClick={() => navigate('/profile')}>My Profile</p>
                                    <p className="cursor-pointer hover:text-white" onClick={() => navigate('/orders')}>Orders</p>
                                    <p className="cursor-pointer hover:text-white" onClick={logout}>Logout</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Cart Icon */}
                    <Link to="/cart" className="relative">
                        <img src={assets.cart_icon} className="w-6 cursor-pointer hover:scale-110 transition-all" alt="Cart" />
                        <p className="absolute right-[-8px] bottom-[-8px] w-4 text-center leading-4 bg-red-600 text-white rounded-full text-xs">
                            {getCartCount()}
                        </p>
                    </Link>

                    {/* Mobile Menu Icon */}
                    <img
                        onClick={() => setVisible(true)}
                        src={assets.menu_icon}
                        className="w-6 cursor-pointer sm:hidden hover:scale-110 transition-all"
                        alt="Menu"
                    />
                </div>
            </div>

            {/* Sidebar menu for small screens */}
            <div className={`fixed top-0 right-0 bottom-0 bg-white shadow-lg transition-all ${visible ? 'w-64' : 'w-0'} overflow-hidden`}>
                <div className="flex flex-col text-gray-600">
                    <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-100 transition-all">
                        <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="Back" />
                        <p>Back</p>
                    </div>
                    {[
                        { name: "HOME", path: "/" },
                        { name: "REGISTRATION", path: "/registration" },
                        { name: "ABOUT US", path: "/about" },
                        { name: "CONTACT", path: "/contact" },
                    ].map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.path} // ✅ Corrected: Explicit path mapping
                            onClick={() => setVisible(false)}
                            className="py-2 pl-6 border-b hover:bg-gray-200"
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
