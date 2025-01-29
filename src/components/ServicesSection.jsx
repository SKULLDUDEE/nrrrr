import React from 'react';
import { Link } from 'react-router-dom';
import { FaStore, FaBuilding, FaUsers, FaBullhorn, FaMoneyBillWave, FaLightbulb, FaBriefcase, FaHandshake } from "react-icons/fa";

const services = [
    { title: "Sell Your Business", icon: <FaStore />, link: "/sell-business" },
    { title: "Franchise Your Business", icon: <FaBuilding />, link: "/franchise" },
    { title: "Dealership / Distribution Assistance", icon: <FaHandshake />, link: "/dealership" },
    { title: "Investors & Buyers", icon: <FaUsers />, link: "/investors" },
    { title: "Advertise Your Business", icon: <FaBullhorn />, link: "/advertise" },
    { title: "Business Loan / Fund Raising Assistance", icon: <FaMoneyBillWave />, link: "/loans" },
    { title: "Buy/Sell Business Ideas", icon: <FaLightbulb />, link: "/business-ideas" },
    { title: "Staff Development & Corporate Events", icon: <FaBriefcase />, link: "/corporate-events" }
];

const ServicesSection = () => {
    return (
        <div className="bg-white py-12 px-6 md:px-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <Link key={index} to={service.link} className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition">
                        <div className="text-4xl text-blue-600">{service.icon}</div>
                        <h3 className="mt-3 text-lg font-semibold text-gray-800">{service.title}</h3>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ServicesSection;
