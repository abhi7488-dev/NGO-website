import React, { useState } from "react";

const FamilyInformationForm = () => {
  const [formData, setFormData] = useState({
    connection: "",
    email: "",
    title: "Mr.",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "Arizona",
    zip: "",
    secondEmail: "",
    secondTitle: "Mr.",
    secondFirstName: "",
    secondLastName: "",
    secondAddress: "",
    secondCity: "",
    secondState: "Arizona",
    secondZip: "",
    secondHomePhone: "",
    secondWorkPhone: "",
    secondMobilePhone: "",
  });

  const [showSecondParent, setShowSecondParent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSecondParentToggle = (checked) => {
    setShowSecondParent(checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  // Common styles for labels and inputs
  const labelStyle = "block text-sm font-medium text-gray-700 mb-2";
  const inputContainerStyle = "relative";
  const inputIconStyle = "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400";
  const inputFieldStyle =
    "w-full bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5";
  const selectFieldStyle =
    "w-full bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 appearance-none pr-10"; // Added pr-10 for select arrow

  return (
    <div className="bg-gray-50 min-h-screen font-['Inter'] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header Section - Enhanced */}
        <div className="">
          <div className="flex items-start mb-4">
           
            <div>
              <h1 className="text-2xl text-center font-bold text-gray-800 mb-2">
                Set Up Your Family Information
              </h1>
              <p className="text-gray-600 text-sm">
                Begin by entering your parent and student details. You'll have the
                opportunity to enroll in the BASIS Phoenix Boosters Club as soon as
                this action is complete. Interested in carpooling? Simply mark your
                preference below and open the car door to connecting with other
                nearby families.
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* PARENT/FACULTY INFORMATION Card - Enhanced */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                PARENT INFORMATION
              </h2>
            </div>

            <div className="space-y-6">
              {/* Connection & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="connection" className={labelStyle}>
                    How are you connected to our school? <span className="text-red-500">*</span>
                  </label>
                  <div className={inputContainerStyle}>
                    <select
                      id="connection"
                      name="connection"
                      value={formData.connection}
                      onChange={handleChange}
                      className={selectFieldStyle}
                      required
                    >
                      <option value="">Select connection type</option>
                      <option value="Parent">Parent or Guardian</option>
                      <option value="Faculty">Faculty</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                      <i className="fas fa-chevron-down text-xs"></i>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className={labelStyle}>
                    E-mail Address
                  </label>
                  <div className={inputContainerStyle}>
                   
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`${inputFieldStyle}`}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </div>

              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="title" className={labelStyle}>
                    Title
                  </label>
                  <div className={inputContainerStyle}>
                    <select
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className={selectFieldStyle}
                    >
                      <option>Mr.</option>
                      <option>Mrs.</option>
                      <option>Ms.</option>
                      <option>Dr.</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                      <i className="fas fa-chevron-down text-xs"></i>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="firstName" className={labelStyle}>
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={inputFieldStyle}
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className={labelStyle}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={inputFieldStyle}
                    placeholder="Last name"
                  />
                </div>
              </div>

              {/* Address Field */}
              <div>
                <label htmlFor="address" className={labelStyle}>
                  Address
                </label>
                <div className={inputContainerStyle}>
                 
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={`${inputFieldStyle}`}
                    placeholder="Your full address"
                  />
                </div>
              </div>

              {/* City, State, Zip Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="city" className={labelStyle}>
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={inputFieldStyle}
                    placeholder="City"
                  />
                </div>
                <div>
                  <label htmlFor="state" className={labelStyle}>
                    State
                  </label>
                  <div className={inputContainerStyle}>
                    <select
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className={selectFieldStyle}
                    >
                      <option>Arizona</option>
                      <option>California</option>
                      <option>Texas</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                      <i className="fas fa-chevron-down text-xs"></i>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="zip" className={labelStyle}>
                    Zip Code
                  </label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    className={inputFieldStyle}
                    placeholder="ZIP code"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Add Second Parent Toggle Card - Enhanced */}
          <div className="bg-white max-w-[250px] rounded-xl shadow-md p-5 border border-gray-200 transition-all duration-300 hover:shadow-lg flex justify-between items-center">
            <span className="font-semibold text-gray-800">Add Second Parent</span>
            <label htmlFor="second-parent-toggle" className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  id="second-parent-toggle"
                  className="sr-only"
                  checked={showSecondParent}
                  onChange={(e) => handleSecondParentToggle(e.target.checked)}
                />
                <div
                  className={`block w-12 h-7 rounded-full transition-colors ${
                    showSecondParent ? "bg-[#b25022]" : "bg-gray-300"
                  }`}
                ></div>
                <div
                  className={`dot absolute left-1 top-1 bg-white w-5 h-5 rounded-full shadow transition-transform ${
                    showSecondParent ? "transform translate-x-5" : ""
                  }`}
                ></div>
              </div>
            </label>
          </div>

          {/* SECOND PARENT INFORMATION Card - Conditional & Enhanced */}
          {showSecondParent && (
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  SECOND PARENT INFORMATION
                </h2>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div>
                  <label htmlFor="secondEmail" className={labelStyle}>
                    E-mail Address
                  </label>
                  <div className={inputContainerStyle}>
                    
                    <input
                      type="email"
                      id="secondEmail"
                      name="secondEmail"
                      value={formData.secondEmail}
                      onChange={handleChange}
                      className={`${inputFieldStyle} pl-10`}
                      placeholder="secondparent@email.com"
                    />
                  </div>
                </div>

                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="secondTitle" className={labelStyle}>
                      Title
                    </label>
                    <div className={inputContainerStyle}>
                      <select
                        id="secondTitle"
                        name="secondTitle"
                        value={formData.secondTitle}
                        onChange={handleChange}
                        className={selectFieldStyle}
                      >
                        <option>Mr.</option>
                        <option>Mrs.</option>
                        <option>Ms.</option>
                        <option>Dr.</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                        <i className="fas fa-chevron-down text-xs"></i>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="secondFirstName" className={labelStyle}>
                      First Name
                    </label>
                    <input
                      type="text"
                      id="secondFirstName"
                      name="secondFirstName"
                      value={formData.secondFirstName}
                      onChange={handleChange}
                      className={inputFieldStyle}
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label htmlFor="secondLastName" className={labelStyle}>
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="secondLastName"
                      name="secondLastName"
                      value={formData.secondLastName}
                      onChange={handleChange}
                      className={inputFieldStyle}
                      placeholder="Last name"
                    />
                  </div>
                </div>

                {/* Address Field */}
                <div>
                  <label htmlFor="secondAddress" className={labelStyle}>
                    Address
                  </label>
                  <div className={inputContainerStyle}>
                    <input
                      type="text"
                      id="secondAddress"
                      name="secondAddress"
                      value={formData.secondAddress}
                      onChange={handleChange}
                      className={`${inputFieldStyle}`}
                      placeholder="Second parent's full address"
                    />
                  </div>
                </div>

                {/* City, State, Zip Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="secondCity" className={labelStyle}>
                      City
                    </label>
                    <input
                      type="text"
                      id="secondCity"
                      name="secondCity"
                      value={formData.secondCity}
                      onChange={handleChange}
                      className={inputFieldStyle}
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label htmlFor="secondState" className={labelStyle}>
                      State
                    </label>
                    <div className={inputContainerStyle}>
                      <select
                        id="secondState"
                        name="secondState"
                        value={formData.secondState}
                        onChange={handleChange}
                        className={selectFieldStyle}
                      >
                        <option>Arizona</option>
                        <option>California</option>
                        <option>Texas</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                        <i className="fas fa-chevron-down text-xs"></i>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="secondZip" className={labelStyle}>
                      Zip Code
                    </label>
                    <input
                      type="text"
                      id="secondZip"
                      name="secondZip"
                      value={formData.secondZip}
                      onChange={handleChange}
                      className={inputFieldStyle}
                      placeholder="ZIP code"
                    />
                  </div>
                </div>

                {/* Phone Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="secondHomePhone" className={labelStyle}>
                      Home Phone
                    </label>
                    <div className={inputContainerStyle}>
                      <input
                        type="text"
                        id="secondHomePhone"
                        name="secondHomePhone"
                        value={formData.secondHomePhone}
                        onChange={handleChange}
                        className={`${inputFieldStyle}`}
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="secondWorkPhone" className={labelStyle}>
                      Work Phone
                    </label>
                    <div className={inputContainerStyle}>
                      <input
                        type="text"
                        id="secondWorkPhone"
                        name="secondWorkPhone"
                        value={formData.secondWorkPhone}
                        onChange={handleChange}
                        className={`${inputFieldStyle}`}
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="secondMobilePhone" className={labelStyle}>
                      Mobile Phone
                    </label>
                    <div className={inputContainerStyle}>
                      <input
                        type="text"
                        id="secondMobilePhone"
                        name="secondMobilePhone"
                        value={formData.secondMobilePhone}
                        onChange={handleChange}
                        className={`${inputFieldStyle}`}
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Submit Button - Always at the bottom */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="flex items-center justify-center bg-[#b25022] hover:bg-[#78350e] text-white font-medium py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              Next Step
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FamilyInformationForm;