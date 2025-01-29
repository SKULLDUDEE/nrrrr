import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
        <div className="bg-blue-600 py-12 text-center text-white">
            <h2 className="text-3xl font-bold">Ready to Transform Your Business?</h2>
            <p className="mt-2 text-lg">Sign up today and take the first step towards success!</p>
            <Link to="/register" className="mt-6 inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-md hover:bg-gray-200 transition">
                Sign Up Now
            </Link>
        </div>
    );
};

export default CallToAction;
