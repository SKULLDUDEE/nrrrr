import React from 'react';
import { motion } from 'framer-motion';

const SuccessStories = () => {
    const stories = [
        {
            name: "Sarah Johnson",
            title: "Founder, TechNest",
            story: "Our business skyrocketed after joining this platform. The networking opportunities and strategic insights helped us grow by 300%!",
            img: "https://source.unsplash.com/100x100/?woman,entrepreneur"
        },
        {
            name: "James Anderson",
            title: "CEO, GreenEarth Solutions",
            story: "From a small startup to an industry leader, this platform provided the exposure and credibility we needed to scale fast!",
            img: "https://source.unsplash.com/100x100/?man,entrepreneur"
        },
        {
            name: "Emily Carter",
            title: "Owner, Carter's Handmade",
            story: "I turned my passion into a thriving business with the resources and community support available here!",
            img: "https://source.unsplash.com/100x100/?business,woman"
        }
    ];

    return (
        <div className="bg-white py-12 px-6 md:px-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Success Stories</h2>
            <div className="max-w-3xl mx-auto bg-none p-6 rounded-lg ">
            <p className="text-gray-700 text-lg leading-relaxed text-center font-medium">
                    Hear from real businesses that transformed with our services. Our platform has helped numerous businesses grow, expand, and succeed.
                </p>
            </div>
            <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 px-6 py-16">
                {/* Neon Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700/20 to-pink-500/10 blur-3xl opacity-30"></div>

                {/* Section Title */}
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1 }} 
                    className="text-5xl font-extrabold text-white text-center mb-12 tracking-wide drop-shadow-lg"
                >
                    ✨ Success Stories 🚀
                </motion.h2>

                {/* Story Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl">
                    {stories.map((story, index) => (
                        <motion.div 
                            key={index} 
                            whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
                            className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/20 
                            transform transition-all duration-500 hover:shadow-[0_5px_35px_rgba(255,255,255,0.2)]"
                        >
                            {/* Profile Image */}
                            <div className="flex items-center space-x-4">
                                <motion.img 
                                    src={story.img} 
                                    alt={story.name} 
                                    className="w-20 h-20 rounded-full border-4 border-purple-400 shadow-xl"
                                    whileHover={{ scale: 1.1 }}
                                />
                                <div>
                                    <h3 className="text-lg font-bold text-white">{story.name}</h3>
                                    <p className="text-sm text-purple-300">{story.title}</p>
                                </div>
                            </div>

                            {/* Story Text */}
                            <p className="text-white/90 mt-6 leading-relaxed italic">
                                "{story.story}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SuccessStories;


// npm install framer-motion install this to run this code