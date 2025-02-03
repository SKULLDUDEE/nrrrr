// import React, { useState, useRef } from "react";

// const SellYourBusinesss = () => {
//   const [formData, setFormData] = useState({
//     businessName: "",
//     gstNumber: "",
//     entityType: "",
//     businessCategory: "",
//     businessAddress: "",
//     businessOverview: "",
//     businessDetails: "",
//     photoLogo: null,
//     businessLocation: "",
//     premisesType: "",
//     area: "",
//     reasonToSell: "",
//   });

//   const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
//   const fileInputRef = useRef(null); // For handling file input

//   const handleChange = (e) => {
//     const { name, value, type } = e.target;
//     if (type === "file") {
//       // Handle file input
//       setFormData({
//         ...formData,
//         [name]: e.target.files[0], // Store the file object directly
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     setShowPopup(true); // Show the popup after form submission
//   };

//   return (
//     <div className="form-container max-w-4xl mx-auto p-6">
//       <h2 className="text-2xl font-bold text-center mb-6">Sell Your Business</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Basic Business Info */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block">Business Name</label>
//             <input
//               type="text"
//               name="businessName"
//               value={formData.businessName}
//               onChange={handleChange}
//               placeholder="Business Name"
//               className="w-full p-2 border border-gray-300 rounded-md"
//               required
//             />
//           </div>
//           <div>
//             <label className="block">GST Number</label>
//             <input
//               type="text"
//               name="gstNumber"
//               value={formData.gstNumber}
//               onChange={handleChange}
//               placeholder="GST Number"
//               className="w-full p-2 border border-gray-300 rounded-md"
//               required
//             />
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block">Entity Type</label>
//             <input
//               type="text"
//               name="entityType"
//               value={formData.entityType}
//               onChange={handleChange}
//               placeholder="Entity Type"
//               className="w-full p-2 border border-gray-300 rounded-md"
//               required
//             />
//           </div>
//           <div>
//             <label className="block">Business Category</label>
//             <input
//               type="text"
//               name="businessCategory"
//               value={formData.businessCategory}
//               onChange={handleChange}
//               placeholder="Business Category"
//               className="w-full p-2 border border-gray-300 rounded-md"
//               required
//             />
//           </div>
//         </div>

//         {/* Business Address & Overview */}
//         <div>
//           <label className="block">Business Address</label>
//           <input
//             type="text"
//             name="businessAddress"
//             value={formData.businessAddress}
//             onChange={handleChange}
//             placeholder="Business Address"
//             className="w-full p-2 border border-gray-300 rounded-md"
//             required
//           />
//         </div>
//         <div>
//           <label className="block">Business Overview</label>
//           <textarea
//             name="businessOverview"
//             value={formData.businessOverview}
//             onChange={handleChange}
//             placeholder="Business Overview"
//             className="w-full p-2 border border-gray-300 rounded-md"
//             required
//           />
//         </div>
//         <div>
//           <label className="block">Business Details</label>
//           <textarea
//             name="businessDetails"
//             value={formData.businessDetails}
//             onChange={handleChange}
//             placeholder="Business Details"
//             className="w-full p-2 border border-gray-300 rounded-md"
//             required
//           />
//         </div>

//         <div>
//   <label className="block">Upload Business Photo</label>
//   <input
//     type="file"
//     name="businessPhoto"
//     ref={fileInputRef}
//     onChange={handleChange}
//     className="w-full p-2 border border-gray-300 rounded-md"
//   />
// </div>

// <div>
//   <label className="block">Upload Business Logo</label>
//   <input
//     type="file"
//     name="photoLogo"
//     ref={fileInputRef}
//     onChange={handleChange}
//     className="w-full p-2 border border-gray-300 rounded-md"
//   />
// </div>


//         {/* Business Location & Premises Type */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block">Business Location</label>
//             <input
//               type="text"
//               name="businessLocation"
//               value={formData.businessLocation}
//               onChange={handleChange}
//               placeholder="Business Location"
//               className="w-full p-2 border border-gray-300 rounded-md"
//               required
//             />
//           </div>
//           <div>
//             <label className="block">Type of Business Premises</label>
//             <select
//               name="premisesType"
//               value={formData.premisesType}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-md"
//               required
//             >
//               <option value="Rent">Rent</option>
//               <option value="Owned">Owned</option>
//             </select>
//           </div>
//         </div>

//         {/* Area & Reason to Sell */}
//         <div>
//           <label className="block">Area (Sq Ft)</label>
//           <input
//             type="number"
//             name="area"
//             value={formData.area}
//             onChange={handleChange}
//             placeholder="Area (Sq Ft)"
//             className="w-full p-2 border border-gray-300 rounded-md"
//             required
//           />
//         </div>
//         <div>
//           <label className="block">Reason to Sell</label>
//           <textarea
//             name="reasonToSell"
//             value={formData.reasonToSell}
//             onChange={handleChange}
//             placeholder="Reason to Sell"
//             className="w-full p-2 border border-gray-300 rounded-md"
//             required
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
//         >
//           Submit
//         </button>
//       </form>

//       {/* Popup */}
//       {showPopup && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//             <p>Your business submission is under review. You will be contacted within 24 hours. For any queries, please email @enquiry@businessxstream.com.</p>
//             <button 
//               className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//               onClick={() => setShowPopup(false)} // Close the popup
//             >
//               OK
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SellYourBusinesss;
import React, { useState, useRef } from "react";

const SellYourBusinesss = () => {
  const businessCategories = [
    "Automobile",
    "FMCG",
    "Retail & Whole Sale",
    "NBFC",
    "Finance & Investment",
    "Restaurant & Cafe",
    "Hotels & lodging",
    "Electronics & Electricals",
    "Beauty, Health & Wellness",
    "Food & Beverages",
    "Business & Auxiliary Services",
    "Education",
    "Travel & Tourism",
    "Sports, Games & Entertainment",
    "Pharma & Health Care",
    "IT & BPO",
    "Personal Care & Fashion",
    "Advertisement & Media",
    "Web & App Design",
    "Construction & Interior",
    "Real Estate"
  ];

  const [formData, setFormData] = useState({
    businessName: "",
    gstNumber: "",
    entityType: "",
    businessCategory: "",
    businessAddress: "",
    businessOverview: "",
    businessDetails: "",
    photoLogo: null,
    businessLocation: "",
    premisesType: "",
    area: "",
    reasonToSell: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      setFormData({
        ...formData,
        [name]: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowPopup(true);
  };

  return (
    <div className="form-container max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Sell Your Business</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block">Business Name</label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="Business Name"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block">GST Number</label>
            <input
              type="text"
              name="gstNumber"
              value={formData.gstNumber}
              onChange={handleChange}
              placeholder="GST Number"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block">Entity Type</label>
            <input
              type="text"
              name="entityType"
              value={formData.entityType}
              onChange={handleChange}
              placeholder="Entity Type"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block">Business Category</label>
            <select
              name="businessCategory"
              value={formData.businessCategory}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md bg-white text-black appearance-none cursor-pointer hover:border-gray-400 focus:outline-none focus:border-blue-500"
              required
            >
              <option value="">Select a category</option>
              {businessCategories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block">Business Address</label>
          <input
            type="text"
            name="businessAddress"
            value={formData.businessAddress}
            onChange={handleChange}
            placeholder="Business Address"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block">Business Overview</label>
          <textarea
            name="businessOverview"
            value={formData.businessOverview}
            onChange={handleChange}
            placeholder="Business Overview"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block">Business Details</label>
          <textarea
            name="businessDetails"
            value={formData.businessDetails}
            onChange={handleChange}
            placeholder="Business Details"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block">Upload Business Photo</label>
          <input
            type="file"
            name="businessPhoto"
            ref={fileInputRef}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block">Upload Business Logo</label>
          <input
            type="file"
            name="photoLogo"
            ref={fileInputRef}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block">Business Location</label>
            <input
              type="text"
              name="businessLocation"
              value={formData.businessLocation}
              onChange={handleChange}
              placeholder="Business Location"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block">Type of Business Premises</label>
            <select
              name="premisesType"
              value={formData.premisesType}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md bg-white text-black"
              required
            >
              <option value="">Select premises type</option>
              <option value="Rent">Rent</option>
              <option value="Owned">Owned</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block">Area (Sq Ft)</label>
          <input
            type="number"
            name="area"
            value={formData.area}
            onChange={handleChange}
            placeholder="Area (Sq Ft)"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block">Reason to Sell</label>
          <textarea
            name="reasonToSell"
            value={formData.reasonToSell}
            onChange={handleChange}
            placeholder="Reason to Sell"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p>Your business submission is under review. You will be contacted within 24 hours. For any queries, please email @enquiry@businessxstream.com.</p>
            <button 
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => setShowPopup(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SellYourBusinesss;