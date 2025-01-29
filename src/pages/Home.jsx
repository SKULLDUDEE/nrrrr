import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero'; 
import LatestCollection from '../components/LatestCollection';
import TopLeadingFranchise from '../components/TopLeadingFranchise';
import BusinessOpportunities from './BusinessOpportunities';
import Services from '../components/Services';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="px-6 md:px-16 py-12">
            {/* Navigation Buttons */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800">Welcome to BusinessXstream</h1>
                <p className="mt-2 text-gray-600">Grow your business with our exclusive services.</p>

                <div className="mt-6 flex flex-wrap justify-center gap-6">
                    <button onClick={() => navigate('/register')} className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
                        Why Register?
                    </button>
                    <button onClick={() => navigate('/services')} className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition">
                        View Services
                    </button>
                    <button onClick={() => navigate('/events')} className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition">
                        Upcoming Events
                    </button>
                    <button onClick={() => navigate('/success-stories')} className="bg-orange-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-700 transition">
                        Success Stories
                    </button>
                </div>
            </div>

            {/* Other Sections */}
            <Hero />
            <TopLeadingFranchise />
            <LatestCollection />
            <BusinessOpportunities /> 
            <Services />
        </div>
    );
};

export default Home;
