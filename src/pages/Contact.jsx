import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";


const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br ">
      {/* Page Title */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-center text-5xl md:text-6xl font-extrabold pt-12 pb-8 text-gray-900"
      >
        <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">
          CONTACT
        </span>{" "}
        US
      </motion.div>

      {/* Contact Section */}
      <div className="relative w-full max-w-6xl px-6 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30">
        
        {/* Contact Image */}
        <motion.img 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1 }} 
          src={assets.contact_img} 
          alt="Contact"
          className="w-full max-w-md mx-auto rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500"
        />

        {/* Contact Details */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className="flex flex-col justify-center space-y-6"
        >
          <p className="text-2xl font-semibold text-gray-800">📍 Our Store</p>
          <p className="text-lg text-gray-700 leading-relaxed">
            54709 Willms Station <br /> Suite 350, Washington, USA
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
           
            📧 Email: <span className="font-semibold">support@businessxstream.com</span>
          </p>

          

          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)" }} 
            className=""
          >
            
          </motion.button>
        </motion.div>
      </div>

      {/* Newsletter Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="mt-12 w-full"
      >
       
      </motion.div>
    </div>
  );
};

export default Contact;





