import React from "react";

const franchises = [
  {
    name: "Goldstar",
    investment: "₹5L - 10L",
    logo: "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/goldstar_1.jpg", // Replace with actual logo URL
  },
  {
    name: "Ganesh Bhel",
    investment: "₹20L - 30L",
    logo: "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/ganesh-bhel_2.gif",
  },
  {
    name: "Maggi Hotspot",
    investment: "₹5L - 10L",
    logo: "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/maggi-hotspot_1.jpg",
  },
  {
    name: "TASVA",
    investment: "₹2 Cr. - 5 Cr",
    logo: "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/tasva_1.jpg",
  },
  {
    name: "Pepperfry",
    investment: "₹20L - 30L",
    logo: "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/pepperfry_1.jpg",
  },
  {
    name: "Louis Philippe",
    investment: "₹50L - 1 Cr.",
    logo: "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/louis-philippe_1.gif",
  },
  {
    name: "Drivex Mobility",
    investment: "₹10L - 20L",
    logo: "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/drivex-mobility_1.jpg",
  },
  {
    name: "ILEM JAPAN",
    investment: "₹5L - 10L",
    logo: "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/ilem-japan_1.gif",
  },
  {
    name: "COOLBEAN STUDIOS",
    investment: "₹5L - 10L",
    logo: "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/coolbean-studios_1.jpg",
  },
  {
    name: "Chawla Chicken",
    investment: "₹20lac - 30lac",
    logo: "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/Chawla-Chicken_1.jpg",
  },
  {
    name: "Inxpress",
    investment: "₹10L - 20L",
    logo: "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/Inxpress-DHL_2.jpg",
  },
  {
    name: "JobJabs",
    investment: "₹50K - 2L",
    logo: "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/jobjabscom_2.jpg",
  },
  {
    name: "Sheffield School",
    investment: "₹5L - 10L",
    logo: "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/sheffield-school_1.png", // Replace with actual logo URL
  },
  {
    name: "US Pizza & Fried Chicken",
    investment: "₹10L - 20L",
    logo: "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/USPFC_5.png",
  },
  {
    name: "Geetanjali Salon",
    investment: "₹50L - 1 Cr.",
    logo: "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/geetanjali_1.jpg",
  },
  {
    name: "SWA Diamonds",
    investment: "₹25L - 2.5Cr",
    logo: "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/swa-diamonds_1.jpg",
  },
  {
    name: "Edify Consultants",
    investment: "₹5L - 10L",
    logo: "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/edify-consultants_4.jpg",
  },
  {
    name: "Detailing Xperts",
    investment: "₹20L - 30L",
    logo: "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/detailing-xperts_2.jpg",
  },
  {
    name: "Ribbons Ice Cream",
    investment: "₹10L - 20L",
    logo: "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/ribbons-ice-cream_1.jpg",
  },
  {
    name: "Boss Of Burgers",
    investment: "₹10L - 20L",
    logo: "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/boss-of-burgers_2.jpg",
  },
  {
    name: "Dr Smith Orthopedic Mattress",
    investment: "₹20L - 30L",
    logo: "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/dr-smith-orthopedic-mattress_1.gif",
  },
  {
    name: "The Elefant",
    investment: "₹5L - 10L",
    logo: "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/the-elefant_1.jpg",
  },
  {
    name: "AIS Windshield Experts",
    investment: "₹5L - 10L",
    logo: "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/windshield-experts_2.gif",
  },
  {
    name: "Vista Furnishing",
    investment: "₹30L - 50L",
    logo: "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/vista_1.gif",
  },{
    name: "Giani's",
    investment: "₹10L - 20L",
    logo: "data:image/jpeg;base64,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", // Replace with actual logo URL
  },
  {
    name: "Domino's",
    investment: "₹50L - 1Cr",
    logo: "https://jobs.dominos.com/images/logo.png",
  },
  {
    name: "Lakmé Salon",
    investment: "₹25L - 50L",
    logo: "data:image/png;base64,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",
  },
  {
    name: "Amul Parlour",
    investment: "₹2L - 2.5L",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlwWrdWDmWBMMV_MbHbEKWnn1eeCqlJTOmwr35uKEbxa1XUzdFCOaDyvo&s",
  },
  {
    name: "Kidzee",
    investment: "₹12L - 15L",
    logo: "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/kidzee_1.jpg",
  },
  {
    name: "Café Coffee Day",
    investment: "₹10L - 20L",
    logo: "https://www.cafecoffeeday.com/sites/all/themes/ccd/assets/images/common/logo.png",
  },
  {
    name: "Dr. Batra's Clinic",
    investment: "₹25L - 30L",
    logo: "https://cdn1.hyperlocalgrowth.com/clinics.drbatra/assets/images/Business_logo_compressor_4_png.png",
  },
  {
    name: "Subway",
    investment: "₹50L - 90L",
    logo: "https://subway.in/static/media/subway-logo.e7b602efa8e0c7316077.webp",
  },
  
];

const FeaturedFranchises = () => {
  return (
    <div className="py-12 px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Featured Franchise Companies
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {franchises.map((franchise, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
            <img
              src={franchise.logo}
              alt={franchise.name}
              className="mx-auto mb-4 h-16"
            />
            <h3 className="text-lg font-semibold text-gray-800">{franchise.name}</h3>
            <p className="text-gray-600">Investment range</p>
            <p className="font-bold text-red-600">{franchise.investment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedFranchises;
