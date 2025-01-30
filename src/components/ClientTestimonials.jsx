import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ClientTestimonials = () => {
    const stories = [
        {
            name: "Jitendra EV Partners with Battery Smart",
            title: "Expanding Battery Swapping Network",
            story: "Electric two-wheeler manufacturer Jitendra New EV Tech Pvt. Ltd. has partnered with Battery Smart, India’s leading battery-swapping network...",
            link: "https://auto.economictimes.indiatimes.com/news/two-wheelers/jitendra-ev-partners-with-battery-smart-to-integrate-battery-swapping-technology/117619735"
        },
        {
            name: "LeafyBus Launches Fast-Charging System",
            title: "India’s First 360 KW Fast-Charging System for Electric Buses",
            story: "LeafyBus has launched an advanced fast-charging system aimed at revolutionizing the EV sector...",
            link: "https://www.franchiseindia.com/insights/en/article/leafybus-launches-indias-first-360-kw-fast-charging-system-for-electric-buses.55790"
        },
        {
            name: "AND Opens at Vegas Mall",
            title: "Elevating Fashion for Modern Women",
            story: "Renowned fashion brand AND has expanded its retail presence by opening a new store in Vegas Mall...",
            link: "https://www.indianretailer.com/news/and-opens-new-store-vegas-mall-dwarka"
        },
        {
            name: "Indian Retail Sector Growth",
            title: "Modest Growth of 5% in December",
            story: "Despite challenges, India's retail sector has shown a growth rate of 5% in December 2023...",
            link: "https://www.india-briefing.com/doing-business-guide/india/sector-insights/india-s-retail-market-here-s-what-s-driving-consumption"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleStories = 3;

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + stories.length) % stories.length);
    };

    const getVisibleStories = () => {
        let slides = [];
        for (let i = 0; i < visibleStories; i++) {
            slides.push(stories[(currentIndex + i) % stories.length]);
        }
        return slides;
    };

    return (
        <div className="bg-white py-12 px-6 md:px-16 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Latest Franchise News</h2>
            <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
                <div className="flex transition-transform duration-500">
                    {getVisibleStories().map((story, index) => (
                        <div key={index} className="w-1/3 px-4">
                            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                                <h3 className="text-lg font-bold text-gray-800 mt-4">{story.name}</h3>
                                <p className="text-sm text-gray-600">{story.title}</p>
                                <p className="text-gray-700 text-lg mt-4 italic">"{story.story}"</p>
                                <a 
                                    href={story.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="inline-block mt-4 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition duration-300"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center items-center mt-6 space-x-4">
                <button onClick={prevSlide} className="p-3 bg-gray-800 text-white rounded-full"><FaArrowLeft /></button>
                <button onClick={nextSlide} className="p-3 bg-gray-800 text-white rounded-full"><FaArrowRight /></button>
            </div>
        </div>
    );
};

export default ClientTestimonials;
