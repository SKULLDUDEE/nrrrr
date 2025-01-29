import { Link } from "react-router-dom";

const DealershipOpportunities = () => {
  const dealershipData = [
        {
          id: 1,
          name: "Numeros Motors",
          category: "Electric Vehicles",
          investment: "INR 20 Lakh - 30 Lakh",
          space: "500 - 1000 Sq. ft",
          location: "Delhi, Haryana, Himachal Pradesh +23 More",
          established: "2019",
          franchiseLaunch: "2024",
          headquarters: "Bangalore",
          logo: "numeros.jpg",
          verified: true,
        },
        {
          id: 2,
          name: "Drivex Mobility",
          category: "Two Wheeler & Parts",
          investment: "INR 10 Lakh - 20 Lakh",
          space: "800 - 1000 Sq. ft",
          location: "Delhi, Haryana, Himachal Pradesh +32 More",
          established: "2020",
          franchiseLaunch: "2021",
          headquarters: "Coimbatore",
          logo: "drivex.jpg",
          verified: true,
        },
        {
          id: 3,
          name: "Tumbledry",
          category: "Laundry & Dry Cleaning",
          investment: "INR 20 Lakh - 30 Lakh",
          space: "250 - 500 Sq. ft",
          location: "Pan India",
          established: "2019",
          franchiseLaunch: "2020",
          headquarters: "Noida",
          logo: "tumbledry.jpg",
          verified: true,
        },
        {
          id: 4,
          name: "Brewbakes Café",
          category: "Food & Beverage (Café & Coffee Shop)",
          investment: "INR 10 Lakh - 20 Lakh",
          space: "300 - 600 Sq. ft",
          location: "Pan India",
          established: "2015",
          franchiseLaunch: "2017",
          headquarters: "Delhi",
          logo: "brewbakes.jpg",
          verified: true,
        },
        {
          id: 5,
          name: "Jockey India",
          category: "Apparel & Fashion",
          investment: "INR 50 Lakh - 1 Crore",
          space: "800 - 1500 Sq. ft",
          location: "Pan India",
          established: "1994",
          franchiseLaunch: "2002",
          headquarters: "Bengaluru",
          logo: "jockey.jpg",
          verified: true,
        },
        {
          id: 6,
          name: "EuroKids Pre-School",
          category: "Education & Pre-School",
          investment: "INR 15 Lakh - 20 Lakh",
          space: "1500 - 2000 Sq. ft",
          location: "Pan India",
          established: "2001",
          franchiseLaunch: "2004",
          headquarters: "Mumbai",
          logo: "eurokids.jpg",
          verified: true,
        },
        
        {
          "id": 7,
          "name": "Amul",
          "category": "Food and Beverage",
          "investment": "INR 2 Lakh - 5 Lakh",
          "space": "300 - 500 Sq. ft",
          "location": "Pan India",
          "established": "1946",
          "franchiseLaunch": "2000",
          "headquarters": "Anand",
          "logo": "amul.jpg",
          "verified": true
        },
        {
          "id": 8,
          "name": "Barista",
          "category": "Food and Beverage",
          "investment": "INR 20 Lakh - 30 Lakh",
          "space": "500 - 1000 Sq. ft",
          "location": "Pan India",
          "established": "2000",
          "franchiseLaunch": "2000",
          "headquarters": "New Delhi",
          "logo": "barista.jpg",
          "verified": true
        },
        {
          "id":     9,
          "name": "Baskin Robbins",
          "category": "Food and Beverage",
          "investment": "INR 10 Lakh - 20 Lakh",
          "space": "200 - 600 Sq. ft",
          "location": "Pan India",
          "established": "1945",
          "franchiseLaunch": "1993",
          "headquarters": "Pune",
          "logo": "baskin_robbins.jpg",
          "verified": true
        },
        {
          "id": 10,
          "name": "Van Heusen",
          "category": "Fashion",
          "investment": "INR 30 Lakh - 50 Lakh",
          "space": "1000 - 1200 Sq. ft",
          "location": "Pan India",
          "established": "1881",
          "franchiseLaunch": "2000",
          "headquarters": "Bangalore",
          "logo": "van_heusen.jpg",
          "verified": true
        },
        {
          "id":     11,
          "name": "Edify Consultants",
          "category": "Education",
          "investment": "INR 5 Lakh - 10 Lakh",
          "space": "200 - 600 Sq. ft",
          "location": "Pan India",
          "established": "2003",
          "franchiseLaunch": "2005",
          "headquarters": "Hyderabad",
          "logo": "edify_consultants.jpg",
          "verified": true
        },
        {
          "id": 12,
          "name": "Impressions Preschools",
          "category": "Education",
          "investment": "INR 30 Lakh - 50 Lakh",
          "space": "2500 - 3000 Sq. ft",
          "location": "Pan India",
          "established": "2010",
          "franchiseLaunch": "2012",
          "headquarters": "Mumbai",
          "logo": "impressions_preschools.jpg",
          "verified": true
        },
        {
          "id":     13,
          "name": "AIS Windshield Experts",
          "category": "Automotive",
          "investment": "INR 5 Lakh - 10 Lakh",
          "space": "500 - 700 Sq. ft",
          "location": "Pan India",
          "established": "2001",
          "franchiseLaunch": "2003",
          "headquarters": "Gurgaon",
          "logo": "ais_windshield_experts.jpg",
          "verified": true
        },
        {
          "id": 14,
          "name": "Ribbons Ice Cream",
          "category": "Food and Beverage",
          "investment": "INR 10 Lakh - 20 Lakh",
          "space": "65 - 1000 Sq. ft",
          "location": "Pan India",
          "established": "2002",
          "franchiseLaunch": "2004",
          "headquarters": "Mumbai",
          "logo": "ribbons_ice_cream.jpg",
          "verified": true
        },
        {
          "id": 15,
          "name": "The Elefant",
          "category": "Education",
          "investment": "INR 5 Lakh - 10 Lakh",
          "space": "100 - 200 Sq. ft",
          "location": "Pan India",
          "established": "2015",
          "franchiseLaunch": "2017",
          "headquarters": "Bangalore",
          "logo": "the_elefant.jpg",
          "verified": true
        },
        {
          "id": 16,
          "name": "Hyundai Electronics",
          "category": "Retail",
          "investment": "INR 10 Lakh - 20 Lakh",
          "space": "1000 - 2000 Sq. ft",
          "location": "Pan India",
          "established": "1983",
          "franchiseLaunch": "2000",
          "headquarters": "New Delhi",
          "logo": "hyundai_electronics.jpg",
          "verified": true
        },
        {
          "id": 17,
          "name": "Siyaram's",
          "category": "Retail",
          "investment": "INR 20 Lakh - 30 Lakh",
          "space": "600 - 1500 Sq. ft",
          "location": "Pan India",
          "established": "1978",
          "franchiseLaunch": "1990",
          "headquarters": "Mumbai",
          "logo": "siyarams.jpg",
          "verified": true
        },
        {
          "id": 18,
          "name": "Dr Smith Orthopedic Mattress",
          "category": "Retail",
          "investment": "INR 20 Lakh - 30 Lakh",
          "space": "1000 - 2000 Sq. ft",
          "location": "Pan India",
          "established": "2010",
          "franchiseLaunch": "2015",
          "headquarters": "Chennai",
          "logo": "dr_smith_orthopedic_mattress.jpg",
          "verified": true
        },
        {
          "id": 19,
          "name": "Sheffield School",
          "category": "Education",
          "investment": "INR 5 Lakh - 10 Lakh",
          "space": "1500 - 2000 Sq. ft",
          "location": "Pan India",
          "established": "2004",
          "franchiseLaunch": "2006",
          "headquarters": "Kolkata",
          "logo": "sheffield_school.jpg",
          "verified": true
        },
        
            {
              "id": 20,
              "name": "Wow! Momo",
              "category": "Food and Beverage",
              "investment": "INR 8 Lakh - 20 Lakh",
              "space": "150 - 300 Sq. ft",
              "location": "Pan India",
              "established": "2008",
              "franchiseLaunch": "2015",
              "headquarters": "Kolkata",
              "logo": "wow_momo.jpg",
              "verified": true
            },
            {
              "id": 21,
              "name": "Chai Point",
              "category": "Food and Beverage",
              "investment": "INR 10 Lakh - 25 Lakh",
              "space": "250 - 500 Sq. ft",
              "location": "Pan India",
              "established": "2010",
              "franchiseLaunch": "2016",
              "headquarters": "Bangalore",
              "logo": "chai_point.jpg",
              "verified": true
            },
            {
              "id": 22,
              "name": "Rolls King",
              "category": "Food and Beverage",
              "investment": "INR 15 Lakh - 30 Lakh",
              "space": "300 - 600 Sq. ft",
              "location": "Pan India",
              "established": "2011",
              "franchiseLaunch": "2017",
              "headquarters": "Delhi",
              "logo": "rolls_king.jpg",
              "verified": true
            },
            {
              "id": 23,
              "name": "Lenskart",
              "category": "Retail",
              "investment": "INR 30 Lakh - 50 Lakh",
              "space": "300 - 800 Sq. ft",
              "location": "Pan India",
              "established": "2010",
              "franchiseLaunch": "2014",
              "headquarters": "Delhi NCR",
              "logo": "lenskart.jpg",
              "verified": true
            },
            {
              "id": 24,
              "name": "FirstCry",
              "category": "Retail",
              "investment": "INR 20 Lakh - 40 Lakh",
              "space": "600 - 1000 Sq. ft",
              "location": "Pan India",
              "established": "2010",
              "franchiseLaunch": "2013",
              "headquarters": "Pune",
              "logo": "firstcry.jpg",
              "verified": true
            },
            {
              "id": 25,
              "name": "DTDC Courier",
              "category": "Logistics",
              "investment": "INR 1 Lakh - 5 Lakh",
              "space": "200 - 500 Sq. ft",
              "location": "Pan India",
              "established": "1990",
              "franchiseLaunch": "2000",
              "headquarters": "Bangalore",
              "logo": "dtdc.jpg",
              "verified": true
            },
            {
              "id": 26,
              "name": "DHL Express",
              "category": "Logistics",
              "investment": "INR 5 Lakh - 10 Lakh",
              "space": "200 - 500 Sq. ft",
              "location": "Pan India",
              "established": "1969",
              "franchiseLaunch": "1995",
              "headquarters": "Mumbai",
              "logo": "dhl.jpg",
              "verified": true
            },
            {
              "id": 27,
              "name": "EuroKids",
              "category": "Education",
              "investment": "INR 10 Lakh - 20 Lakh",
              "space": "2000 - 3000 Sq. ft",
              "location": "Pan India",
              "established": "2001",
              "franchiseLaunch": "2004",
              "headquarters": "Mumbai",
              "logo": "eurokids.jpg",
              "verified": true
            },
            {
              "id": 28,
              "name": "Kidzee",
              "category": "Education",
              "investment": "INR 12 Lakh - 25 Lakh",
              "space": "1500 - 3000 Sq. ft",
              "location": "Pan India",
              "established": "2003",
              "franchiseLaunch": "2005",
              "headquarters": "Mumbai",
              "logo": "kidzee.jpg",
              "verified": true
            },
            {
              "id": 29,
              "name": "NIIT",
              "category": "Education",
              "investment": "INR 20 Lakh - 50 Lakh",
              "space": "1000 - 2000 Sq. ft",
              "location": "Pan India",
              "established": "1981",
              "franchiseLaunch": "2000",
              "headquarters": "Gurgaon",
              "logo": "niit.jpg",
              "verified": true
            },
            {
              "id": 30,
              "name": "VLCC",
              "category": "Beauty and Wellness",
              "investment": "INR 30 Lakh - 50 Lakh",
              "space": "1500 - 2500 Sq. ft",
              "location": "Pan India",
              "established": "1989",
              "franchiseLaunch": "2005",
              "headquarters": "Gurgaon",
              "logo": "vlcc.jpg",
              "verified": true
            },
            {
              "id": 31,
              "name": "Lakme Salon",
              "category": "Beauty and Wellness",
              "investment": "INR 50 Lakh - 1 Cr",
              "space": "1200 - 2000 Sq. ft",
              "location": "Pan India",
              "established": "1952",
              "franchiseLaunch": "1990",
              "headquarters": "Mumbai",
              "logo": "lakme_salon.jpg",
              "verified": true
            },
            {
              "id":32,
              "name": "Jawed Habib Salon",
              "category": "Beauty and Wellness",
              "investment": "INR 30 Lakh - 50 Lakh",
              "space": "1000 - 2000 Sq. ft",
              "location": "Pan India",
              "established": "2000",
              "franchiseLaunch": "2005",
              "headquarters": "Delhi",
              "logo": "jawed_habib.jpg",
              "verified": true
            },
            {
              "id": 33,
              "name": "Apollo Pharmacy",
              "category": "Healthcare",
              "investment": "INR 10 Lakh - 20 Lakh",
              "space": "300 - 1000 Sq. ft",
              "location": "Pan India",
              "established": "1983",
              "franchiseLaunch": "2010",
              "headquarters": "Hyderabad",
              "logo": "apollo_pharmacy.jpg",
              "verified": true
            },
            {
              "id": 34,
              "name": "MedPlus Pharmacy",
              "category": "Healthcare",
              "investment": "INR 15 Lakh - 25 Lakh",
              "space": "500 - 1000 Sq. ft",
              "location": "Pan India",
              "established": "2006",
              "franchiseLaunch": "2015",
              "headquarters": "Hyderabad",
              "logo": "medplus.jpg",
              "verified": true
            },
            {
              "id": 35,
              "name": "Dr. Batra's Clinic",
              "category": "Healthcare",
              "investment": "INR 20 Lakh - 40 Lakh",
              "space": "800 - 1200 Sq. ft",
              "location": "Pan India",
              "established": "1982",
              "franchiseLaunch": "2005",
              "headquarters": "Mumbai",
              "logo": "dr_batra.jpg",
              "verified": true
            },
            ];

      

  return (
    <div className="p-10 bg-gray-50 min-h-screen mt-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Dealers and Distributors Franchise Opportunities
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {dealershipData.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-900">{item.category}</h2>
              {item.verified && (
                <span className="bg-green-500 text-white px-3 py-1 text-xs font-bold rounded-full">Verified</span>
              )}
            </div>
            <img
              src={item.logo}
              alt={item.name}
              className="w-24 h-24 object-contain mx-auto rounded-md shadow-md"
            />
            <h3 className="text-2xl font-bold text-gray-900 mt-4 text-center">{item.name}</h3>
            <p className="text-gray-700 text-md mt-2">
              <strong>Investment:</strong> {item.investment}
            </p>
            <p className="text-gray-700 text-md">
              <strong>Space Required:</strong> {item.space}
            </p>
            <p className="text-gray-700 text-md">
              <strong>Location:</strong> {item.location}
            </p>
            <p className="text-gray-700 text-md">
              <strong>Establishment Year:</strong> {item.established}
            </p>
            <p className="text-gray-700 text-md">
              <strong>Franchising Launch Date:</strong> {item.franchiseLaunch}
            </p>
            <p className="text-gray-700 text-md">
              <strong>Headquarters:</strong> {item.headquarters}
            </p>
            q
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealershipOpportunities;
