import React from 'react';

const UpcomingEvents = () => {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-600 px-6 py-16">
            
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-lg blur-3xl opacity-30"></div>

            {/* Section Title */}
            <h2 className="text-4xl font-extrabold text-white text-center mb-8 tracking-wide drop-shadow-lg">
                🚀 Upcoming Events & Exhibitions 🎤
            </h2>

            {/* Event Card */}
            <div className="relative max-w-3xl w-full bg-white/20 backdrop-blur-lg rounded-xl shadow-2xl border border-white/30 p-10 transform transition-all duration-500 hover:scale-105 hover:shadow-[0_5px_25px_rgba(255,255,255,0.2)]">
                
                {/* Event Description */}
                <p className="text-lg text-white/90 text-center leading-relaxed">
                    🌟 <b>Showcase your products & services</b> at discounted rates!  
                    <br />
                    📢 Don't miss the opportunity to gain **maximum exposure** and reach **potential customers**.  
                    <br />
                    🔥 **Reserve your spot today!** 🚀
                </p>

                {/* Call to Action Button */}
                <div className="mt-6 flex justify-center">
                    <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-full shadow-lg transition-all duration-300 hover:bg-blue-600 hover:shadow-blue-300/50">
                        Register Now 🎟️
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpcomingEvents;
