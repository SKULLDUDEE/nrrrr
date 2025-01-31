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
          logo: "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/numeros-motors_1.PNG",
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
          logo: "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/drivex-mobility_1.jpg",
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
          logo: "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/tumbledry_1.gif",
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
          logo: "https://www.indiafilings.com/learn/wp-content/uploads/2018/09/Brewbakes-Cafe.jpg",
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
          logo: "https://www.jockey.in/cdn/shop/files/Jockey_Logo.webp?v=1690637593&width=180",
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
          logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAsCAMAAAAHH4uhAAABDlBMVEUVM43///8AAIEAIIYAJIeMlL0AJ4m3vNQAEYL29/oAGIXr2tIAKooWMIwRMYwAFIMAHYYGLYvx4NQACoMkOpDuLlGgpcZ3gLHHyt2SmL4AAIvd3+rIwcRFU5WfnLPs39YvQJDZzcv76djqjJHry8Td0sqxq7nuIUvsV2qGhqjtaXe8sr7vPlvu6NqQkK5rdavR1OO7vsfxqafweoJ3faAAGm0AAmNocaBbaZ/2u7Pzn55LZKDxY3D1ycHVnqWMl7Z9jLD2UGK9ip+ms8D0DT3Yu7z5iYmtf5rDp7SncZHbl5+znK60dJC2qqX0eYv/+u4AAG99kYzh3L2puo13nl6h0zwpS3ucwWiSvk2dzEg4t17oAAACuklEQVRIie2VWXObMBRGEQgJCQESGDC1CXjBpLEdkzgtbuw23fc0XeK2/v9/pHLTTr2USZzHTg8zPPBx5l6BuCjKP4B9S40LLm4joqZrxkKxqMF3Ko323MRtcjtttZu1XUzaMjvdxKPZMHF7cBcx6eT7Q/Xu8GCW9LXt3GIVIk8O/MFQzTp+3j1E65lNVac2qqqY7Q8GWdrOB4OhYq0m0DDqoCCgqmJz5u8fHR77/mlvrVPaIAQsqRC13tgfnx3NZL9i7aGy8ORe0bhfkgoRHXb8zsT08wcnGytkzObUZk6FKCbH+en0QT5rGhV3VGCLh/lx2cm7O739JbyZPzqbjR+j629dB+09efrs+YuqpVQjpi9fvZ6Vt/hA0PGbt4/47p6ivXv/trxmhVDbhqe9VtaP6V8izUJXW1wL8Da9tmuabrv/lwjHuv7TNIi+xZHUlrjN7QygUEdXIoSOYVD0BzXLzqWWnLdcj1PkUMORVyn/mQHKrlo1iA1ltxGy5WSz5U4Rgi8LJknXNNswjNRADwKkwChkMnUA/fVsDGI5pB6ESFjMYprCy6naMhP/4MNz08xUXA+ACEMNeg3sKczaFPUpLjioAYLxBRhN2ok5HneTdulgAlKjjqcAkCAiJDXWxQYOcWEABUQxuDsEamm6SZKYpaZhKahF0MAfGwEmobZRMWIMN1IpTmKQXhAP3fn02f0CNUXDxQjUClzUPRKkIxCqq6IcCKCYgoZsdWLIEkmZXs7n88X8q4C4rhZ1HMQELCtutCoHtsEZdQzhCJtD7yRrf/u+WCwuM2Rp3OZcg8KhFHLuWKsi3ISq6p3L+WKhNvveZrbaKtiN36LiqbtROU3sWgyRsGMthYiJ9OZTR4zqUTQK5UaThx5W/Sa2saa1iR5PQn0SRmE43WF8WLZglmBMMCRPN/f+84sfMGJHWc1+ooAAAAAASUVORK5CYII=",
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
          "logo": "data:image/png;base64,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",
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
          "logo": "https://www.barista.co.in/themes/custom/barista/img/logo.svg",
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
          "logo": "https://cdn.shopify.com/s/files/1/0624/7065/2146/files/Main_Logo.png?v=1681288046",
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
          "logo": "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/van-heusen_1.gif",
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
          "logo": "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/edify-consultants_4.jpg",
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
          "logo": "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/impressions_1.jpg",
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
          "logo": "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/windshield-experts_2.gif",
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
          "logo": "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/ribbons-ice-cream_1.jpg",
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
          "logo": "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/the-elefant_1.jpg",
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
          "logo": "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/hyundai-electronics_1.jpg",
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
          "logo": "https://siyaram-images.s3.ap-south-1.amazonaws.com/images/siyarams.webp",
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
          "logo": "https://www.drsmithmattress.com/wp-content/uploads/2024/04/logo-300x109.jpeg",
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
          "logo": "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/sheffield-school_1.png",
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
              "logo": "data:image/jpeg;base64,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",
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
              "logo": "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/chai-point_1.gif",
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
              "logo": "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/rolls-king_1.jpg",
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
              "logo": "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/Lenskart1_1.jpg",
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
              "logo": "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/FirstCry_1.gif",
              "verified": true
            },
            {
              "id": 25,
              "name": "First Response Healthcare",
              "category": "Hospitals",
              "investment": "INR 1 Cr - 2 Cr",
              "space": "1000 - 1000 Sq. ft",
              "location": "Delhi, Haryana, Himachal Pradesh, .... + 32 more",
              "established": "2018",
              "franchiseLaunch": "2024",
              "headquarters": "Dubai",
              "logo": "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/first-response-healthcare_1.jpg",
              "verified": true
            },
            {
              "id": 26,
              "name": "IndiaFIRST Robotics",
              "category": "Robotics & Technical Training",
              "investment": "INR 50 K - 2 Lakh",
              "space": "300 - 500 Sq. ft",
              "location": "Delhi, Haryana, Himachal Pradesh, .... + 32 more",
              "established": "2009",
              "franchiseLaunch": "2013",
              "headquarters": "Pune",
              "logo": "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/IndiaFIRST-Robotics_1.jpg",
              "verified": true
            },
            {
              "id": 27,
              "name": "First Foundation Pro",
              "category": "Beauty & Wellness Training Institute",
              "investment": "INR 30 Lakh - 50 Lakh",
              "space": "1200 - 1500 Sq. ft",
              "location": "Delhi, Haryana, Himachal Pradesh, .... + 23 more",
              "established": "2023",
              "franchiseLaunch": "2023",
              "headquarters": "Khairatabad",
              "logo": "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/first-foundation-pro_1.jpg",
              "verified": true
            },
            {
              "id": 28,
              "name": "First Charge",
              "category": "Electric Vehicles",
              "investment": "INR 30 Lakh - 50 Lakh",
              "space": "1000 - 25000 Sq. ft",
              "location": "Gujarat, Rajasthan, Maharashtra, .... + 2 more",
              "established": "2020",
              "franchiseLaunch": "2021",
              "headquarters": "Surat",
              "logo": "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/first-charge_1.jpg",
              "verified": true
            },
            {
              "id": 29,
              "name": "First Solar",
              "category": "Solar Energy & Components",
              "investment": "INR 10000 - 50 K",
              "space": "N/A",
              "location": "Delhi, Haryana, Himachal Pradesh, .... + 28 more",
              "established": "1999",
              "franchiseLaunch": "1999",
              "headquarters": "Mumbai",
              "logo": "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/first-solar_1.jpg",
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
              "logo": "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/VLCC-School-of-Beauty_1.jpg",
              "verified": true
            },
            {
              "id": 31,
              "name": "Vanity Wagon",
              "category": "Cosmetics & Beauty Product Stores",
              "investment": "INR 20 Lakh - 30 Lakh",
              "space": "400 - 800 Sq. ft",
              "location": "Delhi, Haryana, Himachal Pradesh, .... + 32 more",
              "established": "2018",
              "franchiseLaunch": "2023",
              "headquarters": "New Delhi",
              "logo": "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/vanity-wagon_2.jpg",
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
              "logo": "https://jawedhabib.com/wp-content/uploads/2022/09/Untitled-design-e1675849955783.jpg",
              "verified": true
            },
            {
              "id": 33,
              "name": "AVPL International",
              "category": "Surveillance Equipments",
              "investment": "INR 2 Cr - 5 Cr",
              "space": "100 - 200 Sq. ft",
              "location": "Delhi, Haryana, Himachal Pradesh, .... + 23 more",
              "established": "2016",
              "franchiseLaunch": "2024",
              "headquarters": "Gurgaon",
              "logo": "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/aitmc-ventures-ltd_1.jpg",
              "verified": true
            },
            {
              "id": 34,
              "name": "MedPlus Pharmacy",
              "category": "Healthcare",
              "investment": "INR 10 Lakh - 20 Lakh",
              "space": "300 - 500 Sq. ft",
              "location": "Pan India",
              "established": "2006",
              "franchiseLaunch": "2015",
              "headquarters": "Surat",
              "logo": "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/Medplus_1.gif",
              "verified": true
            },
            {
              "id": 35,
              "name": "Chai Nagri",
              "category": "Tea And Coffee Chain",
              "investment": "INR 20 Lakh - 30 Lakh",
              "space": "100 - 500 Sq. ft",
              "location": "Delhi, Haryana, Himachal Pradesh, .... + 31 more",
              "established": "2018",
              "franchiseLaunch": "2019",
              "headquarters": "Chandigarh",
              "logo": "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/chai-nagri_1.gif",
              "verified": true
            },
            {
              "id": 36,
              "name": "Brewers Kettle",
              "category": "Others Food Service",
              "investment": "INR 2 Lakh - 5 Lakh",
              "space": "N/A",
              "location": "Andhra Pradesh, Goa, Gujarat, .... + 6 more",
              "established": "2023",
              "franchiseLaunch": "2023",
              "headquarters": "Hyderabad",
              "logo": "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/franchisor/brewers-kettle_1.jpg",
              "verified": true
            }
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
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealershipOpportunities;
