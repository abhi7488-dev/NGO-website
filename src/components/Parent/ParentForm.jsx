import React, { useState } from 'react';

const FamilyInformationForm = () => {
  const [formData, setFormData] = useState({
    connection: '',
    email: '',
    title: 'Mr.',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: 'Arizona',
    zip: '',
    secondEmail: '',
    secondTitle: 'Mr.',
    secondFirstName: '',
    secondLastName: '',
    secondAddress: '',
    secondCity: '',
    secondState: 'Arizona',
    secondZip: '',
    secondHomePhone: '',
    secondWorkPhone: '',
    secondMobilePhone: ''
  });

  const [showSecondParent, setShowSecondParent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSecondParentToggle = (checked) => {
    setShowSecondParent(checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-gray-50 min-h-screen font-['Inter'] py-8">
      <div className="max-w-[1180px] mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6 border border-blue-50">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-semibold mr-3">
              1
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Set Up Your Family Information</h1>
          </div>
          <p className="text-gray-600 ml-11">
            Begin by entering your parent and student details. You'll have the opportunity to enroll in the BASIS Phoenix Boosters Club as soon as this action is complete. Interested in carpooling? Simply mark your preference below and open the car door to connecting with other nearby families.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-6">
          {/* Left Column - Parent/Faculty Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 h-full">
              <div className="space-y-0">
                {/* PARENT/FACULTY Section */}
                <div className="p-6 border-b border-gray-100 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <i className="fas fa-user-circle text-blue-600 text-xl"></i>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 ml-3">PARENT/FACULTY INFORMATION</h2>
                  </div>

                  {/* Connection */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How are you connected to our school?<span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="connection"
                        value={formData.connection}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 text-gray-700 py-2.5 px-4 pr-8 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 appearance-none"
                        required
                      >
                        <option value="">Select connection type</option>
                        <option value="Parent">Parent or Guardian</option>
                        <option value="Faculty">Faculty</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <i className="fas fa-chevron-down"></i>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">E-mail Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <i className="fas fa-envelope text-gray-400"></i>
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10 w-full bg-gray-50 border border-gray-200 text-gray-700 py-2.5 px-4 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                      <div className="relative">
                        <select
                          name="title"
                          value={formData.title}
                          onChange={handleChange}
                          className="w-full bg-gray-50 border border-gray-200 text-gray-700 py-2.5 px-4 pr-8 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 appearance-none"
                        >
                          <option>Mr.</option>
                          <option>Mrs.</option>
                          <option>Ms.</option>
                          <option>Dr.</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <i className="fas fa-chevron-down"></i>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 text-gray-700 py-2.5 px-4 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                        placeholder="First name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 text-gray-700 py-2.5 px-4 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                        placeholder="Last name"
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <i className="fas fa-home text-gray-400"></i>
                      </div>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="pl-10 w-full bg-gray-50 border border-gray-200 text-gray-700 py-2.5 px-4 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                        placeholder="Your full address"
                      />
                    </div>
                  </div>

                  {/* City, State, Zip */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 text-gray-700 py-2.5 px-4 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                        placeholder="City"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                      <div className="relative">
                        <select
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className="w-full bg-gray-50 border border-gray-200 text-gray-700 py-2.5 px-4 pr-8 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 appearance-none"
                        >
                          <option>Arizona</option>
                          <option>California</option>
                          <option>Texas</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <i className="fas fa-chevron-down"></i>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Zip Code</label>
                      <input
                        type="text"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 text-gray-700 py-2.5 px-4 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                        placeholder="ZIP code"
                      />
                    </div>
                  </div>
                </div>

                {/* Second Parent Toggle */}
                <div className="p-6 border-b border-gray-100 transition-all duration-200 hover:bg-gray-50">
                  <label className="flex items-center gap-3 font-medium text-gray-700 cursor-pointer">
                    <div className="relative">
                      <input
                        type="checkbox"
                        className="sr-only"
                        id="second-parent-toggle"
                        checked={showSecondParent}
                        onChange={(e) => handleSecondParentToggle(e.target.checked)}
                      />
                      <div className={`block w-10 h-6 rounded-full transition-colors ${showSecondParent ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                      <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${showSecondParent ? 'transform translate-x-4' : ''}`}></div>
                    </div>
                    <span>Add Second Parent</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Second Parent Form (Visible when toggled) */}
          <div className="w-full lg:w-1/2">
            {showSecondParent && (
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 h-full mb-6">
                <div className="p-6 border-b border-gray-100 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <i className="fas fa-users text-blue-600 text-xl"></i>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 ml-3">SECOND PARENT INFORMATION</h2>
                  </div>

                  {/* Email */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">E-mail Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <i className="fas fa-envelope text-gray-400"></i>
                      </div>
                      <input
                        type="email"
                        name="secondEmail"
                        value={formData.secondEmail}
                        onChange={handleChange}
                        className="pl-10 w-full bg-gray-50 border border-gray-200 text-gray-700 py-2.5 px-4 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                      <div className="relative">
                        <select
                          name="secondTitle"
                          value={formData.secondTitle}
                          onChange={handleChange}
                          className="w-full bg-gray-50 border border-gray-200 text-gray-700 py-2.5 px-4 pr-8 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 appearance-none"
                        >
                          <option>Mr.</option>
                          <option>Mrs.</option>
                          <option>Ms.</option>
                          <option>Dr.</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <i className="fas fa-chevron-down"></i>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        name="secondFirstName"
                        value={formData.secondFirstName}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 text-gray-700 py-2.5 px-4 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                        placeholder="First name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        name="secondLastName"
                        value={formData.secondLastName}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 text-gray-700 py-2.5 px-4 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                        placeholder="Last name"
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <i className="fas fa-home text-gray-400"></i>
                      </div>
                      <input
                        type="text"
                        name="secondAddress"
                        value={formData.secondAddress}
                        onChange={handleChange}
                        className="pl-10 w-full bg-gray-50 border border-gray-200 text-gray-700 py-2.5 px-4 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                        placeholder="Your full address"
                      />
                    </div>
                  </div>

                  {/* City, State, Zip */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                      <input
                        type="text"
                        name="secondCity"
                        value={formData.secondCity}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 text-gray-700 py-2.5 px-4 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                        placeholder="City"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                      <div className="relative">
                        <select
                          name="secondState"
                          value={formData.secondState}
                          onChange={handleChange}
                          className="w-full bg-gray-50 border border-gray-200 text-gray-700 py-2.5 px-4 pr-8 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 appearance-none"
                        >
                          <option>Arizona</option>
                          <option>California</option>
                          <option>Texas</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <i className="fas fa-chevron-down"></i>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Zip Code</label>
                      <input
                        type="text"
                        name="secondZip"
                        value={formData.secondZip}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 text-gray-700 py-2.5 px-4 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                        placeholder="ZIP code"
                      />
                    </div>
                  </div>

                  {/* Phones */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Home Phone</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <i className="fas fa-phone text-gray-400"></i>
                        </div>
                        <input
                          type="text"
                          name="secondHomePhone"
                          value={formData.secondHomePhone}
                          onChange={handleChange}
                          className="pl-10 w-full bg-gray-50 border border-gray-200 text-gray-700 py-2.5 px-4 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Work Phone</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <i className="fas fa-briefcase text-gray-400"></i>
                        </div>
                        <input
                          type="text"
                          name="secondWorkPhone"
                          value={formData.secondWorkPhone}
                          onChange={handleChange}
                          className="pl-10 w-full bg-gray-50 border border-gray-200 text-gray-700 py-2.5 px-4 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Phone</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <i className="fas fa-mobile-alt text-gray-400"></i>
                        </div>
                        <input
                          type="text"
                          name="secondMobilePhone"
                          value={formData.secondMobilePhone}
                          onChange={handleChange}
                          className="pl-10 w-full bg-gray-50 border border-gray-200 text-gray-700 py-2.5 px-4 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Submit Button - Always positioned at the bottom right */}
            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-sm transition duration-200"
              >
                Next Step
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FamilyInformationForm;