import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../forms.css";

const BusinessForm = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    gstNumber: "",
    entityType: "",
    industryType: "",
    businessAddress: "",
    businessOverview: "",
    businessType: "",
    phoneNumber: "",
    email: "",
    contactPerson: "",
    businessDetails: "",
    businessPhoto: null,
    businessLocation: "",
    premisesType: "",
    area: "",
    reasonToSell: "",
  });

  const [selectedForm, setSelectedForm] = useState("");
  const [showPopup, setShowPopup] = useState(false);  // State for popup visibility
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, businessPhoto: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setShowPopup(true);  // Show popup upon form submission
  };

  const handleFormSelect = (e) => {
    const formType = e.target.value.toLowerCase().replace(/\s+/g, '-');
    setSelectedForm(e.target.value);
    navigate(`/${formType}`);
  };

  return (
    <div className="form-container p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Business Registration Form</h2>

      {/* Dropdown to select form type */}
      <div className="input-group mb-4">
        <label>Select Business Type</label>
        <select onChange={handleFormSelect} className="w-full p-2 border">
          <option value="">Select</option>
          <option value="Franchise Seller">Franchise Seller</option>
          <option value="Dealership Seller">Dealership Seller</option>
          <option value="Sell Your Business">Sell Your Business</option>
        </select>
      </div>

      {/* Render form fields based on selected business type */}
      {selectedForm && (
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Business Name</label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>GST Number</label>
            <input
              type="text"
              name="gstNumber"
              value={formData.gstNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Entity Type</label>
            <input
              type="text"
              name="entityType"
              value={formData.entityType}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Industry Type</label>
            <input
              type="text"
              name="industryType"
              value={formData.industryType}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Business Address</label>
            <textarea
              name="businessAddress"
              value={formData.businessAddress}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Business Overview</label>
            <textarea
              name="businessOverview"
              value={formData.businessOverview}
              onChange={handleChange}
              required
            />
          </div>

          {/* Fields specific to the business type */}
          {selectedForm === "Sell Your Business" && (
            <>
              <div className="input-group">
                <label>Business Details</label>
                <textarea
                  name="businessDetails"
                  value={formData.businessDetails}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>Upload Business Photo & Logo</label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>Business Location</label>
                <input
                  type="text"
                  name="businessLocation"
                  value={formData.businessLocation}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>Type of Business Premises</label>
                <select
                  name="premisesType"
                  value={formData.premisesType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="Rent">Rent</option>
                  <option value="Owned">Owned</option>
                </select>
              </div>

              <div className="input-group">
                <label>Area (Sq Ft)</label>
                <input
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>Reason to Sell</label>
                <textarea
                  name="reasonToSell"
                  value={formData.reasonToSell}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          {/* Common fields for all forms */}
          {selectedForm !== "Sell Your Business" && (
            <>
              <div className="input-group">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>Email ID</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>Contact Person & Designation</label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      )}

      {/* Popup for successful submission */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50000">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p>Your proposal is under review and will be reflected within 24 hours if correct.If any query please mail @enquiry@businessxstream.com</p>
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

export default BusinessForm;
