import React from 'react';
import { Link } from 'react-router-dom';

const servicesData = [
    { title: "Sell Your Business", description: "Match with verified buyers. Premium listings for top visibility.", link: "/sell-business" },
    { title: "Franchise Your Business", description: "Create and promote your franchise model. Connect with franchise investors.", link: "/franchise" },
    { title: "Dealership Assistance", description: "Expand through dealerships and channel partners.", link: "/dealership" },
    { title: "Investors & Buyers", description: "Connect with angel investors and buyers.", link: "/investors" },
    { title: "Advertise Your Business", description: "Highlight products/services at events and exhibitions.", link: "/advertise" },
    { title: "Business Loan Assistance", description: "Tailored financial solutions for every business stage.", link: "/loans" },
    { title: "Buy/Sell Business Ideas", description: "Share innovative ideas or invest in groundbreaking concepts.", link: "/business-ideas" },
    { title: "Staff Development & Corporate Events", description: "Conduct tailored training sessions and workshops.", link: "/corporate-events" },
];

const Services = () => {
    return (
        <div className="py-20 bg-gray-50 px-6 md:px-20 mt-30">
            {/* Title with underline */}
            <h2 className="text-4xl font-extrabold text-gray-800 text-left border-b-4 border-orange-500 inline-block pb-2">
                Our Services
            </h2>

            {/* Services Grid */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {servicesData.map((service, index) => (
                    <div key={index} className="p-8 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                        <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
                        <p className="mt-3 text-gray-700">{service.description}</p>
                      
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
