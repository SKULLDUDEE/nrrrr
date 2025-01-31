import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className="w-full h-screen flex flex-col sm:flex-row items-center bg-[#76C7C0] from-teal-300 via-teal-400 to-teal-500 text-white p-10 sm:p-16 rounded-3xl shadow-2xl border border-teal-200 relative overflow-hidden">
      
      {/* Animated Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-50 animate-pulse"></div>

      {/* Left Side: Tagline & CTA */}
      <div className="w-full sm:w-1/2 flex flex-col items-start space-y-6 relative z-0">
        
        {/* Animated Tagline */}
        <motion.p 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className="text-3xl sm:text-6xl font-extrabold italic drop-shadow-lg bg-clip-text text-transparent bg-[#21397afc] transform hover:scale-110 transition duration-500"
        >
          Empower Your Business 
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1.2 }}
          className="text-3xl sm:text-4xl font-extrabold italic drop-shadow-lg bg-clip-text text-transparent bg-[#0e3f9f] transform hover:scale-110 transition duration-500"
        >
          Expand Your Horizons.
        </motion.p>

        {/* Subtext with Subtle Animation */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.5 }}
          className="text-lg sm:text-2xlfont-extrabold italic drop-shadow-lg bg-clip-text text-transparent bg-[#0e3f9f] drop-shadow-md tracking-wide transform hover:scale-110 transition duration-500 bg-[]"
        >
          Connect with Buyers, Investors, and Partners.
        </motion.p>

        {/* Call-to-Action Button with Hover Effect */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1.3 }}
          className="flex gap-4 text-1xl transform hover:scale-110 transition duration-500"
        >
          <button className="relative bg-white text-teal-600 font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-110 transition">
            <span className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-700 opacity-0 hover:opacity-100 transition duration-300 rounded-lg bg-[ffff]"></span>
            <span className="relative z-10">Register Your Business</span>
          </button>
        </motion.div>
      </div>

      {/* Right Side: Hero Image with Animation */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1.2 }}
        className="w-full sm:w-1/2 flex justify-center relative mt-20"
      >
        <img 
          src={assets.hero_img} 
          alt="Business Growth" 
          className="w-full   max-w-lg rounded-2xl shadow-2xl transform hover:scale-110 transition duration-500"
        />
      </motion.div>

    </div>
  );
}

export default Hero;
