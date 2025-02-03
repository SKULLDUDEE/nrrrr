import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStore, FaChartLine, FaHandshake, FaUsers, FaBullhorn, FaMoneyBillWave, FaLightbulb, FaChalkboardTeacher } from "react-icons/fa";

const servicesData = [
    { title: "Sell Your Business", description: "Match with verified buyers. Premium listings for top visibility.", link: "/sell-business", icon: <FaStore className="w-10 h-10 text-orange-500 group-hover:text-white transition-all duration-300" /> },
    { title: "Franchise Your Business", description: "Create and promote your franchise model. Connect with franchise investors.", link: "/franchise", icon: <FaChartLine className="w-10 h-10 text-orange-500 group-hover:text-white transition-all duration-300" /> },
    { title: "Dealership Assistance", description: "Expand through dealerships and channel partners.", link: "/dealership", icon: <FaHandshake className="w-10 h-10 text-orange-500 group-hover:text-white transition-all duration-300" /> },
    { title: "Investors & Buyers", description: "Connect with angel investors and buyers.", link: "/investors", icon: <FaUsers className="w-10 h-10 text-orange-500 group-hover:text-white transition-all duration-300" /> },
    { title: "Advertise Your Business", description: "Highlight products/services at events and exhibitions.", link: "/advertise", icon: <FaBullhorn className="w-10 h-10 text-orange-500 group-hover:text-white transition-all duration-300" /> },
    { title: "Business Loan Assistance", description: "Tailored financial solutions for every business stage.", link: "/loans", icon: <FaMoneyBillWave className="w-10 h-10 text-orange-500 group-hover:text-white transition-all duration-300" /> },
    { title: "Buy/Sell Business Ideas", description: "Share innovative ideas or invest in groundbreaking concepts.", link: "/business-ideas", icon: <FaLightbulb className="w-10 h-10 text-orange-500 group-hover:text-white transition-all duration-300" /> },
    { title: "Staff Development & Corporate Events", description: "Conduct tailored training sessions and workshops.", link: "/corporate-events", icon: <FaChalkboardTeacher className="w-10 h-10 text-orange-500 group-hover:text-white transition-all duration-300" /> },
];


const Services = () => {
    return (
        <div className="relative -mt-50 w-full overflow-x-hidden top-0 bg-[#ffffff]"> {/* Updated to w-full and overflow-x-hidden */}
            {/* 🚀 Our Services Grid */}
            <div className="py-20 bg-gray-50 px-6 md:px-20">
                {/* New Intro Section with Beautiful Design */}
                {/* <motion.div 
                    initial={{ opacity: 0, y: 50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1 }}
                    className="text-center mb-16 px-6 sm:px-10"
            > */}
                    {/* bg-[linear-gradient(to_right,_#4FD1C5,_#3B82F6,_#7417cb)] */}
                    {/* Background Gradient Effect */}
                    {/* <div className="absolute inset-0  opacity-40 z-0"></div> */}

                    {/* Heading Styling */}
                    {/* <h1 className="relative z-10 text-5xl sm:text-6xl font-extrabold text-white leading-tight tracking-wider drop-shadow-lg">
                        Sell Your Business with Ease
                    </h1> */}

                    {/* Subheading Styling */}
                    {/* <h2 className="relative z-10 text-3xl sm:text-4xl font-semibold mt-4 text-white opacity-90">
                        Expand through Franchising
                    </h2> */}

                    {/* Paragraph Styling */}
                    {/* <p className="relative z-10 text-lg mt-4 text-white opacity-80 max-w-3xl mx-auto">
                        Unlock Your Business Potential with Expert Solutions.
                    </p> */}
                {/* </motion.div> */}

                {/* Section Title */}
                <motion.h2 
                    initial={{ opacity: 0, y: 50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1 }}
                    className="text-4xl font-extrabold text-gray-800 text-left border-b-4 border-orange-500 inline-block pb-2 mb-12"
                >
                    Our Services
                </motion.h2>

                {/* 🌀 Services Grid */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {servicesData.map((service, index) => (
        <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative p-8 bg-white rounded-xl shadow-lg border border-gray-200 
                       hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 
                       overflow-hidden group"
        >
            {/* Animated Border Effect */}
            <div className="absolute inset-0 border-4 border-transparent rounded-xl group-hover:border-orange-400 
                           transition-all duration-500"></div>

            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-transparent to-orange-200 
                           opacity-30 group-hover:opacity-50 transition-opacity duration-500 blur-2xl"></div>

            {/* Icon */}
           {/* Icon */}
<div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mb-5 
               transition-all duration-300 group-hover:bg-orange-500">
    {service.icon} {/* Now this renders the correct icon from the servicesData array */}
</div>


            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-900 relative z-10 group-hover:text-orange-600 transition-colors duration-300">
                {service.title}
            </h3>

            {/* Description */}
            <p className="mt-3 text-gray-700 relative z-10 group-hover:text-gray-900 transition-colors duration-300">
                {service.description}
            </p>

            
        </motion.div>
    ))}
</div>


            </div>
        </div>
    );
};

export default Services;
