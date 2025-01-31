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
    // Submit the form to the API or any backend logic
  };

  const handleFormSelect = (e) => {
    const formType = e.target.value.toLowerCase().replace(/\s+/g, '-');
    console.log(`Navigating to: /${formType}`); // Debug the navigation
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
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>GST Number</label>
            <input
              type="text"
              name="gstNumber"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Entity Type</label>
            <input
              type="text"
              name="entityType"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Industry Type</label>
            <input
              type="text"
              name="industryType"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Business Address</label>
            <textarea
              name="businessAddress"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Business Overview</label>
            <textarea
              name="businessOverview"
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
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>Type of Business Premises</label>
                <select
                  name="premisesType"
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
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>Reason to Sell</label>
                <textarea
                  name="reasonToSell"
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
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>Email ID</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>Contact Person & Designation</label>
                <input
                  type="text"
                  name="contactPerson"
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      )}
    </div>
  );
};

export default BusinessForm;
