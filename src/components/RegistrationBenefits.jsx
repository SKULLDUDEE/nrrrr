import React from 'react';
import '../registrationBenefits.css';
const RegistrationBenefits = () => {
    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 px-6 mt-200">
            
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-lg blur-3xl opacity-30"></div>

            {/* Main Container */}
            <div className="relative max-w-4xl w-full bg-white/20 backdrop-blur-lg rounded-xl shadow-2xl border border-white/30 p-10 transform transition-all duration-500 hover:scale-105 hover:shadow-[0_5px_25px_rgba(255,255,255,0.2)]">
                
                {/* Title */}
                <h2 className="text-4xl font-extrabold text-white text-center mb-6 tracking-wide drop-shadow-lg">
                    Why Should I Register?
                </h2>

                {/* Benefits List */}
                <ul className="text-lg text-white/90 space-y-4 tracking-wide">
                    <li className="flex items-center flex-wrap  gap-3">
                        <span className="text-blue-300 text-2xl">✔</span>
                        <b className="text-white">Access to Exclusive Insights:</b> Get unique business growth strategies.
                    </li>
                    <li className="flex items-center  flex-wrap gap-3">
                        <span className="text-blue-300 text-2xl">✔</span>
                        Schedule a <b className="text-blue-200">complimentary strategy session</b> with our experts.
                    </li>
                    <li className="flex items-center flex-wrap gap-3">
                        <span className="text-blue-300 text-2xl">✔</span>
                        Stay updated with <b className="text-blue-200">business and franchising trends</b>.
                    </li>
                    <li className="flex items-center flex-wrap gap-3">
                        <span className="text-blue-300 text-2xl">✔</span>
                        Gain access to <b className="text-blue-200">templates, checklists, and guides</b>.
                    </li>
                    <li className="flex items-center flex-wrap gap-3">
                        <span className="text-blue-300 text-2xl">✔</span>
                        Network with an expanding <b className="text-blue-200">business community</b>.
                    </li>
                    <li className="flex items-center  flex-wrap gap-3">
                        <span className="text-blue-300 text-2xl">✔</span>
                        Learn & grow through <b className="text-blue-200">franchising and partnerships</b>.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default RegistrationBenefits;
