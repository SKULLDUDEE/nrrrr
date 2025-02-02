import React from 'react';

const RegistrationBenefits = () => {
  const benefits = [
    { 
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="currentColor" d="M12 2L2 19h20L12 2zm0 4l6.5 12h-13L12 6z"/>
        </svg>
      ),
      text: "Access to Exclusive Insights: Get unique business growth strategies",
      highlight: "Premium Access"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="currentColor" d="M12 2.5c-3.9 0-7 3.1-7 7v6l-2 2v1h18v-1l-2-2v-6c0-3.9-3.1-7-7-7zm3 15H9v2h6v-2z"/>
        </svg>
      ),
      text: "Complimentary strategy session with our experts",
      highlight: "Free Consultation"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="currentColor" d="M3.5 18.5l6-6 4 4L22 6.9l-1.4-1.4-8.1 8.1-4-4-7.4 7.4z"/>
        </svg>
      ),
      text: "Business and franchising trends updates",
      highlight: "Stay Updated"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="currentColor" d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13z"/>
        </svg>
      ),
      text: "Templates, checklists, and guides access",
      highlight: "Resources"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="currentColor" d="M16 11c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm-8 0c1.7 0 3-1.3 3-3S9.7 5 8 5 5 6.3 5 8s1.3 3 3 3zm0 2c-2.3 0-7 1.2-7 3.5V19h14v-2.5c0-2.3-4.7-3.5-7-3.5zm8 0c-.3 0-.6 0-.9.1 1.1.9 1.9 2.1 1.9 3.4V19h6v-2.5c0-2.3-4.7-3.5-7-3.5z"/>
        </svg>
      ),
      text: "Network with expanding business community",
      highlight: "Community"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="currentColor" d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/>
        </svg>
      ),
      text: "Learn & grow through franchising and partnerships",
      highlight: "Growth"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9fafb] p-8 mt-120">
      <div className="max-w-3xl w-full bg-white rounded-xl p-12 shadow-lg transition-all duration-300 hover:border hover:border-red-500">
        <h2 className="text-6xl font-bold text-gray-800 text-center mb-12">
          Why Should I Register?
        </h2>

        <ul className="space-y-8">
          {benefits.map((benefit, index) => (
            <li key={index} className="group flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-lg p-2.5 transition-transform duration-300 group-hover:scale-110">
                {benefit.icon}
              </div>
              <div className="flex-1">
                <span className="block text-red-600 font-semibold mb-1 group-hover:text-red-700 transition-colors duration-300">
                  {benefit.highlight}
                </span>
                <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                  {benefit.text}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RegistrationBenefits;