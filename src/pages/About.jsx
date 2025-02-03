import React from 'react';
import { motion } from 'framer-motion';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 text-gray-800 mt-20">
      {/* 🔥 About Section */}
      <div className="text-center pt-16 font-bold text-3xl">
        <Title text1="ABOUT" text2="US" />
      </div>

      <div className="relative my-16 flex flex-col md:flex-row items-center gap-16 px-6 md:px-20">
        
        {/* 🚀 Floating Background Accent */}
        <div className="absolute -top-10 left-1/3 w-[400px] h-[400px] bg-orange-300 rounded-full opacity-20 blur-3xl"></div>

        {/* 🎨 Image with Animated Hover Effect */}
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="w-full md:max-w-[450px] rounded-3xl shadow-lg"
          src={assets.about_img} 
          alt="BusinessXstream"
        />

        {/* 💡 About Text Section */}
        <div className="flex flex-col justify-center gap-6 md:w-2/4">
          <p className="text-lg leading-relaxed">
            At <b className="text-orange-600">BusinessXStream.com</b>, we specialize in empowering entrepreneurs and businesses to achieve their full potential. As a unit of 
            <b className="text-orange-600"> Thorondor Business Solutions Private Limited</b>, we bring expertise, strategic insight, and innovative solutions to the table.
          </p>
          <p className="text-lg leading-relaxed">
            Our mission is to simplify business growth and franchising by providing personalized support, actionable strategies, and cutting-edge tools. From crafting business plans to building franchise models, we partner with our clients to ensure success.
          </p>
          
          {/* 🚀 Features Section */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="p-6 rounded-2xl bg-white shadow-lg border border-gray-200"
          >
            <b className="text-xl text-gray-900">What We Offer</b>
            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
              <li>🌟 Access to premium business opportunities.</li>
              <li>🎭 Networking through exhibitions and workshops.</li>
              <li>💡 Expert consultation for start-ups and business growth.</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* 🔥 Why Choose Us Section */}
      <div className="text-center text-2xl py-8">
        <Title text1="WHY" text2="CHOOSE US" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 mb-20">
        
        {/* 🏆 Feature Card #1 */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-8 border border-gray-200 w-full md:w-1/3"
        >
          <b className="text-xl text-gray-900">🚀 Expert Guidance</b>
          <p className="text-gray-700 mt-2 text-center">
            We provide strategic insights and actionable plans to help businesses grow efficiently.
          </p>
        </motion.div>

        {/* 💡 Feature Card #2 */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-8 border border-gray-200 w-full md:w-1/3"
        >
          <b className="text-xl text-gray-900">✨ Innovative Solutions</b>
          <p className="text-gray-700 mt-2 text-center">
            Our cutting-edge tools and personalized support make business growth seamless.
          </p>
        </motion.div>

        {/* 🔗 Feature Card #3 */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-8 border border-gray-200 w-full md:w-1/3"
        >
          <b className="text-xl text-gray-900">🌎 Trusted Network</b>
          <p className="text-gray-700 mt-2 text-center">
            We connect businesses with premium opportunities and global networking events.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
