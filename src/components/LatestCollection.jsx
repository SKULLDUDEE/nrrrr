import { Link } from 'react-router-dom';

const dealershipData = [
  {
    id: 1,
    name: "Mini Metro EV",
    category: "Electric Vehicles & Parts",
    investment: "₹ 4 Lac - 15 Lac",
    space: "1000 - 2000 Sq. ft",
    location: "Andhra Pradesh, Tamil Nadu +34 More",
    logo: "minimetro.jpg",
  },
  {
    id: 2,
    name: "Eze",
    category: "Perfumes & Fragrances",
    investment: "₹ 5 Lac - 7 Lac",
    space: "200 - 250 Sq. ft",
    location: "Maharashtra, Karnataka +1 More",
    logo: "eze.jpg",
  },
  {
    id: 3,
    name: "RocketPay",
    category: "Computer & Mobile Softwares & Apps",
    investment: "₹ 75 K - 2 Lac",
    space: "NIL",
    location: "Assam, Manipur +35 More",
    logo: "rocketpay.jpg",
  },
  {
    id: 4,
    name: "Arogyamithra",
    category: "Healthcare & Medical Products",
    investment: "₹ 15 K - 7.5 Lac",
    space: "100 - 250 Sq. ft",
    location: "Telangana, Andhra Pradesh",
    logo: "arogyamithra.jpg",
  },
  {
    id: 5,
    name: "Extra Franchise",
    category: "New Category",
    investment: "₹ 10 K - 1 Lac",
    space: "500 Sq. ft",
    location: "Delhi, Mumbai",
    logo: "extra.jpg",
  },
];

const DealershipOpportunities = () => {
  return (
    
    <div className="p-8 bg-gray-50 mt-20">
      {/* Title & View All Button */}
      
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Top Dealership Opportunities</h2>
        <Link 
          to="/AllDealerships" 
          className="text-red-600 text-lg font-semibold hover:underline"
        >
          View All
        </Link>
      </div>

      {/* Display only first 4 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {dealershipData.slice(0, 4).map((item) => (
          <div 
            key={item.id} 
            className="bg-white p-5 rounded-2xl shadow-lg border border-gray-200 transform transition-all hover:scale-105 hover:shadow-xl"
          >
            <div className="flex justify-center">
              <img 
                src={item.logo} 
                alt={item.name} 
                className="w-24 h-24 object-contain mb-4"
              />
            </div>
            <p className="text-sm text-gray-500 font-medium">{item.category}</p>
            <h3 className="text-lg font-semibold text-gray-900 mt-1">{item.name}</h3>
            <p className="text-gray-700 text-sm mt-2"><strong>Investment:</strong> {item.investment}</p>
            <p className="text-gray-700 text-sm"><strong>Space Required:</strong> {item.space}</p>
            <p className="text-gray-700 text-sm"><strong>Location:</strong> {item.location}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealershipOpportunities;
