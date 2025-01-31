import React from 'react';
import { motion } from 'framer-motion';

const UpcomingEvents = () => {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-700 px-6 py-16 overflow-hidden">
            
            {/* 🔥 Background Glow Effects */}
            <div className="absolute -top-20 left-1/4 w-[400px] h-[400px] bg-purple-400 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-20 right-1/4 w-[400px] h-[400px] bg-blue-400 rounded-full opacity-20 blur-3xl"></div>

            {/* 🚀 Floating Title with Motion */}
            <motion.h2 
                initial={{ opacity: 0, y: -50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }}
                className="text-5xl sm:text-6xl font-extrabold text-white text-center tracking-wide drop-shadow-lg"
            >
                🚀 Showcase Your Products 
                <br />
                <span className="text-yellow-300 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400">
                    at Premier Exhibitions 🎤
                </span>
            </motion.h2>

            {/* 🎭 Event Card with Glassmorphism */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 1, delay: 0.3 }}
                className="relative max-w-3xl w-full bg-white/20 backdrop-blur-lg rounded-xl shadow-2xl border border-white/30 p-10 mt-12 transform transition-all duration-500 hover:scale-105 hover:shadow-[0_5px_25px_rgba(255,255,255,0.2)]"
            >
                
                {/* 🌟 Event Description */}
                <p className="text-lg text-white/90 text-center leading-relaxed">
                    🌟 <b>Showcase your products & services</b> at **exclusive exhibitions**!  
                    <br />
                    📢 Gain **maximum exposure** and reach **potential buyers & investors**.  
                    <br />
                    🔥 **Reserve your spot today!** 🚀
                </p>

                {/* ✨ Call to Action Button with Shine */}
                <div className="mt-6 flex justify-center">
                    <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="relative px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-lg transition-all duration-300 hover:bg-blue-600 hover:shadow-blue-300/50"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full opacity-10 blur-md"></span>
                        Register Now 🎟️
                    </motion.button>
                </div>
            </motion.div>

        </div>
    );
};

export default UpcomingEvents;
