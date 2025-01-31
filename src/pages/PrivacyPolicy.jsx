import React from "react";
import { motion } from "framer-motion";

const RefundCancellation = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-gray-800 to-gray-900 px-6 py-12">
      
      {/* 🔥 Background Glow Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-purple-500/10 blur-3xl opacity-50"></div>

      {/* 🚀 Policy Container */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative max-w-4xl w-full bg-white/10 backdrop-blur-md shadow-2xl rounded-3xl p-8 md:p-12 border border-white/30"
      >
        
        {/* 🔥 Title with Neon Glow */}
        <h1 className="text-4xl font-extrabold text-center text-white tracking-wider mb-6 drop-shadow-[0_2px_20px_rgba(255,255,255,0.4)]">
          Refund & Cancellation Policy
        </h1>

        {/* 💡 Introduction */}
        <p className="text-lg text-white/90 text-center leading-relaxed">
          We strive for <b className="text-orange-400">complete customer satisfaction</b>. 
          If you are not happy with our services, we may provide a refund upon 
          a <b className="text-orange-400">genuine investigation</b>. 
          Please review our <b className="text-orange-400">terms & conditions</b> before making a purchase.
        </p>

        {/* 📌 Cancellation Policy */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-white border-l-4 border-blue-400 pl-4">
            Cancellation Policy
          </h2>
          <p className="text-white/80 mt-3 leading-relaxed">
            For cancellations, please email us at 
            <b className="text-blue-400"> support@businessxstream.com</b>. 
            All refund requests must be made within 
            <b className="text-blue-400"> 2 working days</b> of availing the services.
          </p>
        </div>

        {/* 🏆 Refund Policy */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-white border-l-4 border-green-400 pl-4">
            Refund Policy
          </h2>
          <p className="text-white/80 mt-3 leading-relaxed">
            We strive to offer the best services to our clients. If you are not completely satisfied 
            with the current services and meet the refund criteria, we can process a refund.
          </p>
          <p className="text-white/80 mt-3 leading-relaxed">
            If paid by credit card, refunds will be issued to the 
            <b className="text-green-400"> original payment method</b>. 
            Payment gateway transactions will be refunded to the same account.
          </p>
        </div>

        {/* ⚡ Call to Action */}
       <div className="mt-10 flex justify-center">
  <motion.button 
    whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(255, 165, 0, 0.8)" }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-3 text-lg font-semibold text-white bg-orange-500 rounded-full shadow-lg transition-all duration-300"
  >
    <a href="mailto:support@businessxstream.com?subject=Support%20Request&body=Hello%2C%0A%0A" className="text-white">
      Contact Support 📩
    </a>
  </motion.button>
</div>

        {/* 🔗 Footer Info */}
        <div className="mt-10 text-center">
          <p className="text-white/80 text-lg">
            For any queries, reach out to us at 
            <b className="text-orange-400"> support@businessxstream.com</b>.
          </p>
        </div>

      </motion.div>
    </div>
  );
};

export default RefundCancellation;
