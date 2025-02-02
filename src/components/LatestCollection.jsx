// import { Link } from 'react-router-dom';
// import suki from '../assets/suki.png';
// import eze from '../assets/eze.png';
// import newpay from '../assets/newpay.png';
// import arogya from '../assets/arogya.png';

// const dealershipData = [
//   {
//     id: 1,
//     name: "SUKI",
//     investment: "₹ 5 Lac - 10 Lac",
//     space: "600 - 1200 Sq. ft",
//     category: "Cafe / Restaurant",
//     logo: suki,
//   },
//   {
//     id: 2,
//     name: "AFL",
//     category: "Wellness",
//     investment: "₹ 5 Lac - 7 Lac",
//     space: "200 - 250 Sq. ft",
//     logo: eze,
//   },
//   {
//     id: 3,
//     name: "Caishen",
//     category: "Automobile & Automotive",
//     logo: newpay,
//   },
// ];

// const DealershipOpportunities = () => {
//   return (
//     <div className="p-8 bg-gray-50 mt-20">
//       {/* Title & View All Button */}
//       <div className="flex justify-between items-center mb-8">
//         <h2 className="text-3xl font-bold text-gray-800">Top Available Opportunities</h2>
//       </div>

//       {/* Display only first 4 cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {dealershipData.slice(0, 4).map((item) => (
//           <div
//             key={item.id}
//             className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 transform transition-all hover:scale-105 hover:shadow-2xl hover:translate-y-2"
//           >
//             <div className="flex justify-center mb-4">
//               <img
//                 src={item.logo}
//                 alt={item.name}
//                 className="w-28 h-28 object-contain rounded-lg border-2 border-gray-200 p-2"
//               />
//             </div>
//             <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">{item.category}</p>
//             <h3 className="text-xl font-semibold text-gray-900 mt-2">{item.name}</h3>

//             {/* Show only Name, Category & Logo for ID 3 */}
//             {item.id === 3 ? (
//               <p className="text-gray-700 text-sm mt-2">
//                 <strong>For More Details:</strong> Send us email support@businessxstream.com
//               </p>
//             ) : (
//               <>
//                 <p className="text-gray-700 text-sm mt-2">
//                   <strong>Investment:</strong> {item.investment}
//                 </p>
//                 <p className="text-gray-700 text-sm mt-1">
//                   <strong>Space Required:</strong> {item.space}
//                 </p>
//               </>
//             )}

//             {/* Show location only for ID 4 */}
//             {item.id === 4 && (
//               <p className="text-gray-700 text-sm mt-1">
//                 <strong>Location:</strong> {item.location}
//               </p>
//             )}

//             {/* Add a call-to-action button */}
//             <Link to="/more-details" className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-all">
//               Learn More
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DealershipOpportunities;
import { Link } from 'react-router-dom';
import suki from '../assets/suki.png';
import eze from '../assets/eze.png';
import newpay from '../assets/newpay.png';
import arogya from '../assets/arogya.png';

const dealershipData = [
  {
    id: 1,
    name: "SUKI",
    investment: "₹ 5 Lac - 10 Lac",
    space: "600 - 1200 Sq. ft",
    category: "Cafe / Restaurant",
    logo: suki,
  },
  {
    id: 2,
    name: "AFL",
    category: "Wellness",
    investment: "₹ 5 Lac - 7 Lac",
    space: "200 - 250 Sq. ft",
    logo: eze,
  },
  {
    id: 3,
    name: "Caishen",
    category: "Automobile & Automotive",
    logo: newpay,
  },
];

const DealershipOpportunities = () => {
  return (
    <div className="p-8 bg-gray-50 ">
      {/* Title & View All Button */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Top Available Opportunities</h2>
      </div>

      {/* Display only first 4 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {dealershipData.slice(0, 4).map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 transform transition-all hover:scale-105 hover:shadow-2xl hover:translate-y-2"
          >
            <div className="flex justify-center mb-4 relative group">
              <img
                src={item.logo}
                alt={item.name}
                className="w-28 h-28 object-contain rounded-lg border-2 border-gray-200 p-2 transition-transform duration-300 ease-in-out group-hover:scale-125"
              />
              {/* Popup image */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-48 h-48 object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">{item.category}</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-2">{item.name}</h3>

            {/* Show only Name, Category & Logo for ID 3 */}
            {item.id === 3 ? (
              <p className="text-gray-700 text-sm mt-2">
                <strong>For More Details:</strong> Send us email support@businessxstream.com
              </p>
            ) : (
              <>
                <p className="text-gray-700 text-sm mt-2">
                  <strong>Investment:</strong> {item.investment}
                </p>
                <p className="text-gray-700 text-sm mt-1">
                  <strong>Space Required:</strong> {item.space}
                </p>
              </>
            )}

            {/* Show location only for ID 4 */}
            {item.id === 4 && (
              <p className="text-gray-700 text-sm mt-1">
                <strong>Location:</strong> {item.location}
              </p>
            )}

            {/* Add a call-to-action button */}
            <Link to="/more-details" className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-all">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealershipOpportunities;
