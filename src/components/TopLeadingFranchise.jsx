import { Link } from 'react-router-dom';
import vanHeusenImage from '../assets/van-heusen-image.png'; // Import image
import edify from '../assets/edify.png';
import CoolBean from '../assets/CoolBean.png'; // Import image

const franchiseData = [
  {
    id: 1,
    name: "Van Heusen",
    category: "Fashion",
    investment: "₹ 30 Lac - 50 Lac",
    space: "1000 - 1200 Sq. ft",
    image: vanHeusenImage, // Use the imported variable
    franchiseOutlets: "500 - 1000",
  },
  {
    id: 2,
    name: "Edify Consultants",
    category: "Education",
    investment: "₹ 5 Lac - 10 Lac",
    space: "200-600 Sq. ft",
    image: edify, // Use the imported variable
    franchiseOutlets: "Less than 10",
  },
 
  {
    id: 3,
    name: " Coolbean Studios",
    category: "Education",
    investment: "₹ 5 Lac - 10 Lac",
    space: "1000 - 1500 Sq. ft",
    image: CoolBean, // Use the imported variable
    franchiseOutlets: "Less than 10",
  },

];

const TopLeadingFranchise = () => {
  return (
    <div className="p-8 bg-gray-50 mt-20">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Top Leading Franchise</h2>
        
      </div>

      {/* Franchise Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  ">
        {franchiseData.map((item) => (
          <div
            key={item.id}
            className="bg-white p-5 rounded-2xl shadow-lg border border-gray-200 transform transition-all hover:scale-105 hover:shadow-xl"
          >
            {/* Image */}
            <div className="w-full h-48 overflow-hidden mb-4 relative">
              <img
                src={item.image}
                alt={`Image of ${item.name}`}
                className="object-cover w-full h-full"
                
              />
            </div>
            
            <p className="text-sm text-gray-500 font-medium">{item.category}</p>
            <h3 className="text-lg font-semibold text-gray-900 mt-1">{item.name}</h3>
            <p className="text-gray-700 text-sm mt-2"><strong>Investment:</strong> {item.investment}</p>
            <p className="text-gray-700 text-sm"><strong>Space Required:</strong> {item.space}</p>
            <p className="text-gray-700 text-sm"><strong>Franchise Outlets:</strong> {item.franchiseOutlets}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopLeadingFranchise;
