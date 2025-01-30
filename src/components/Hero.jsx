import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className="mt-10 flex flex-col sm:flex-row items-center bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white p-10 sm:p-16 rounded-3xl shadow-2xl border border-orange-300 relative cursor-pointer transform hover:scale-105 transition duration-500">
      
      {/* Left Side: Tagline & CTA */}
      <div className="w-full sm:w-1/2 flex flex-col items-start space-y-6">
        
        {/* Tagline */}
        <p className="text-3xl sm:text-4xl font-extrabold italic drop-shadow-lg">
          Innovate. Strategize. Achieve.
        </p>

        {/* Subtext */}
        <p className="text-lg sm:text-xl drop-shadow-md">
          We help you innovate, strategize, and achieve your business goals.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex gap-4">
          <button className="bg-gradient-to-t from-white-700 to-orange-300 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition">
            Register Your Business
          </button>
          
        </div>
      </div>

      {/* Right Side: Hero Image */}
      <div className="w-full sm:w-1/2 flex justify-center">
        <img src={assets.hero_img} alt="Business Growth" className="w-full max-w-lg rounded-2xl shadow-2xl transform hover:scale-105 transition" />
      </div>

    </div>
  );
}

export default Hero;
