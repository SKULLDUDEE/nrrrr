// import React, { useState } from "react";

// const FranchiseForm = () => {
//   const [formData, setFormData] = useState({
//     businessName: "",
//     gstNumber: "",
//     entityType: "",
//     businessCategory: "",
//     businessAddress: "",
//     businessOverview: "",
//     franchiseDealership: "Dealership", // Default value
//     franchiseFee: "",
//     royaltyPercentage: "",
//     requiredArea: "",
//     supportProvided: "",
//     businessPhoto: null,
//     logoPhoto: null,
//     territoryAvailability: "",
//   });
//   const [showPopup, setShowPopup] = useState(false); // State for showing popup

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     console.log("Field changed: ", name, " Value: ", value);  // Debug log
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     console.log("File changed: ", name, " File: ", files[0]);  // Debug log
//     setFormData({
//       ...formData,
//       [name]: files[0], // Only taking the first file
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted: ", formData); // Debug log
//     setShowPopup(true); // Show the popup after form submission
//   };

//   return (
//     <div className="form-container max-w-4xl mx-auto p-6">
//       <h2 className="text-2xl font-bold text-center mb-4">Franchise Registration</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Business Info */}
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
//         {/* Other form fields omitted for brevity */}
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
//           <textarea
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

//         {/* Franchise/Dealership */}
//         <div>
//           <label className="block">Franchise / Dealership</label>
//           <select
//             name="franchiseDealership"
//             value={formData.franchiseDealership}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded-md"
//           >
//             <option value="Franchise">Franchise</option>
//             <option value="Dealership">Dealership</option>
//           </select>
//         </div>

//         {/* File Upload */}
//         <div>
//           <label className="block">Upload Business Photo</label>
//           <input
//             type="file"
//             name="businessPhoto"
//             onChange={handleFileChange}
//             className="w-full p-2 border border-gray-300 rounded-md"
//             required
//           />
//         </div>
//         <div>
//           <label className="block">Upload Logo Photo</label>
//           <input
//             type="file"
//             name="logoPhoto"
//             onChange={handleFileChange}
//             className="w-full p-2 border border-gray-300 rounded-md"
//             required
//           />
//         </div>

//         {/* Dealership Fee and Area */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block">Franchise Fee</label>
//             <input
//               type="number"
//               name="franchiseFee"
//               value={formData.franchiseFee}
//               onChange={handleChange}
//               placeholder="Franchise Fee"
//               className="w-full p-2 border border-gray-300 rounded-md"
//               required
//             />
//           </div>
//           <div>
//             <label className="block">Royalty Percentage</label>
//             <input
//               type="number"
//               name="royaltyPercentage"
//               value={formData.royaltyPercentage}
//               onChange={handleChange}
//               placeholder="Royalty Percentage"
//               className="w-full p-2 border border-gray-300 rounded-md"
//               required
//             />
//           </div>
//         </div>

//         {/* Additional Details */}
//         <div>
//           <label className="block">Required Area (Sq Ft)</label>
//           <input
//             type="number"
//             name="requiredArea"
//             value={formData.requiredArea}
//             onChange={handleChange}
//             placeholder="Required Area (Sq Ft)"
//             className="w-full p-2 border border-gray-300 rounded-md"
//             required
//           />
//         </div>
//         <div>
//           <label className="block">Support Provided</label>
//           <textarea
//             name="supportProvided"
//             value={formData.supportProvided}
//             onChange={handleChange}
//             placeholder="Support Provided"
//             className="w-full p-2 border border-gray-300 rounded-md"
//             required
//           />
//         </div>
//         <div>
//           <label className="block">Territory Availability</label>
//           <textarea
//             name="territoryAvailability"
//             value={formData.territoryAvailability}
//             onChange={handleChange}
//             placeholder="Dealership Types & Territory Availability"
//             className="w-full p-2 border border-gray-300 rounded-md"
//             required
//           />
//         </div>

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
//             <p>Your proposal is under review and will be reflected within 24 hours if correct. If any query, please email @enquiry@businessxstream.com</p>
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

// export default FranchiseForm;
import React, { useState } from "react";

const FranchiseForm = () => {
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
    franchiseDealership: "Dealership",
    franchiseFee: "",
    royaltyPercentage: "",
    requiredArea: "",
    supportProvided: "",
    businessPhoto: null,
    logoPhoto: null,
    territoryAvailability: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <div className="form-container max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Franchise Registration</h2>
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
          <textarea
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
          <label className="block">Franchise / Dealership</label>
          <select
            name="franchiseDealership"
            value={formData.franchiseDealership}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md bg-white text-black"
          >
            <option value="Franchise">Franchise</option>
            <option value="Dealership">Dealership</option>
          </select>
        </div>

        <div>
          <label className="block">Upload Business Photo</label>
          <input
            type="file"
            name="businessPhoto"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block">Upload Logo Photo</label>
          <input
            type="file"
            name="logoPhoto"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block">Franchise Fee</label>
            <input
              type="number"
              name="franchiseFee"
              value={formData.franchiseFee}
              onChange={handleChange}
              placeholder="Franchise Fee"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block">Royalty Percentage</label>
            <input
              type="number"
              name="royaltyPercentage"
              value={formData.royaltyPercentage}
              onChange={handleChange}
              placeholder="Royalty Percentage"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>

        <div>
          <label className="block">Required Area (Sq Ft)</label>
          <input
            type="number"
            name="requiredArea"
            value={formData.requiredArea}
            onChange={handleChange}
            placeholder="Required Area (Sq Ft)"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block">Support Provided</label>
          <textarea
            name="supportProvided"
            value={formData.supportProvided}
            onChange={handleChange}
            placeholder="Support Provided"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block">Territory Availability</label>
          <textarea
            name="territoryAvailability"
            value={formData.territoryAvailability}
            onChange={handleChange}
            placeholder="Dealership Types & Territory Availability"
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
            <p>Your proposal is under review and will be reflected within 24 hours if correct. If any query, please email @enquiry@businessxstream.com</p>
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

export default FranchiseForm;