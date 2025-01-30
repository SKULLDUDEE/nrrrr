import { Link } from 'react-router-dom';
import airwindshield from '../assets/airwindshield.png';
import mhindra from '../assets/mhindra.png';
import lenskart from '../assets/lenskart.png';
import firstcry from '../assets/firstcry.png';
import wow_momo from '../assets/wow_momo.png';
import chaipt from '../assets/chaipt.png';
import dtdc from '../assets/dtdc.png';
import dhl from '../assets/dhl.png';
import eurokids from '../assets/eurokids.png';
import kidzee from '../assets/kidzee.png';
import lakmesaloon from '../assets/lakmesaloon.png';
import appolo from '../assets/appolo.png';

const businessData = [

    {
      "id": 1,
      "name": "AIS Windshield Experts",
      "category": "Automotive",
      "investment": "₹ 5L - 10L",
      "space": "500 - 700 Sq. ft",
      "outlets": "50-100",
      "logo": airwindshield
    },
    {
      "id": 2,
      "name": "Mahindra First Choice",
      "category": "Automotive",
      "investment": "₹ 10L - 20L",
      "space": "800 - 1000 Sq. ft",
      "outlets": "100-200",
      "logo": mhindra
    },
    {
      "id": 3,
      "name": "Lenskart",
      "category": "Retail",
      "investment": "₹ 30L - 50L",
      "space": "300 - 800 Sq. ft",
      "outlets": "500+",
      "logo": lenskart
    },
    {
      "id": 4,
      "name": "FirstCry",
      "category": "Retail",
      "investment": "₹ 20L - 40L",
      "space": "600 - 1000 Sq. ft",
      "outlets": "400+",
      "logo": firstcry
    },
    {
      "id": 5,
      "name": "Wow! Momo",
      "category": "Food & Beverage",
      "investment": "₹ 8L - 20L",
      "space": "150 - 300 Sq. ft",
      "outlets": "300+",
      "logo": wow_momo
    },
    {
      "id": 6,
      "name": "Chai Point",
      "category": "Food & Beverage",
      "investment": "₹ 10L - 25L",
      "space": "250 - 500 Sq. ft",
      "outlets": "200+",
      "logo": chaipt
    },
    {
      "id": 7,
      "name": "DTDC Courier",
      "category": "Logistics",
      "investment": "₹ 1L - 5L",
      "space": "200 - 500 Sq. ft",
      "outlets": "1000+",
      "logo": dtdc
    },
    {
      "id": 8,
      "name": "DHL Express",
      "category": "Logistics",
      "investment": "₹ 5L - 10L",
      "space": "200 - 500 Sq. ft",
      "outlets": "500+",
      "logo": dhl
    },
    {
      "id": 9,
      "name": "EuroKids",
      "category": "Education",
      "investment": "₹ 10L - 20L",
      "space": "2000 - 3000 Sq. ft",
      "outlets": "1200+",
      "logo": eurokids
    },
    {
      "id": 10,
      "name": "Kidzee",
      "category": "Education",
      "investment": "₹ 12L - 25L",
      "space": "1500 - 3000 Sq. ft",
      "outlets": "2000+",
      "logo": kidzee
    },
    {
      "id": 11,
      "name": "Lakme Salon",
      "category": "Beauty & Wellness",
      "investment": "₹ 50L - 1 Cr",
      "space": "1200 - 2000 Sq. ft",
      "outlets": "500+",
      "logo": lakmesaloon
    },
    {
      "id": 12,
      "name": "Apollo Pharmacy",
      "category": "Healthcare",
      "investment": "₹ 10L - 20L",
      "space": "300 - 1000 Sq. ft",
      "outlets": "4000+",
      "logo":appolo
    }
  ];

const BusinessOpportunities = () => {
  return (
    <div className="p-8 bg-gray-50 mt-20">
      {/* Title & View All Button */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Top Business Opportunities</h2>
       
      </div>

      {/* Business Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {businessData.map((item) => (
          <div 
            key={item.id} 
            className="bg-white p-5 rounded-xl shadow-lg border border-gray-200 transform transition-all hover:scale-105 hover:shadow-xl"
          >
            <div className="flex justify-center">
              <img 
                src={item.logo} 
                alt={item.name} 
                className="w-full h-32 object-contain mb-4 rounded-md bg-gray-100"
              />
            </div>
            <p className="text-sm text-gray-500 font-medium">{item.category}</p>
            <h3 className="text-lg font-semibold text-gray-900 mt-1">{item.name}</h3>
            <p className="text-gray-700 text-sm mt-2"><strong>Investment range:</strong> {item.investment}</p>
            <p className="text-gray-700 text-sm"><strong>Area Required:</strong> {item.space}</p>
            <p className="text-gray-700 text-sm"><strong>Franchise Outlets:</strong> {item.outlets}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessOpportunities;
