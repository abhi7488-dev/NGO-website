import React, { useState } from 'react';
import donateImg from '../assets/donate_img.png';

const DonationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: 'United States',
    phone: '',
    donationAmount: '',
    paymentMethod: '',
    isAnonymous: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Donation Data:', formData);
    // Here you would integrate with your payment processing API
  };

  return (
    <div className="h-[calc(100vh-84px)] flex flex-col lg:flex-row items-center justify-center p-8 bg-gray-100">
      
       {/* Placeholder for Illustration (replace with your image) */}
      <div className="w-full pr-25 lg:w-1/2 mt-4 flex justify-center items-center">
        <img
          src={donateImg}
          alt="Two people placing hearts into a jar"
          className="w-[600px] h-[520px] "
        />
      </div>

      {/* Donation Form */}
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Be a Donor</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Name Fields */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First name*</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="p-1 mt-1 block w-full rounded-md border border-gray-300 shadow-sm"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last name*</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 p-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                required
              />
            </div>
          </div>
          
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address*</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>

          {/* Country & Phone */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="mt-1 p-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              >
                <option>United States</option>
                <option>Canada</option>
                {/* Add more countries here */}
              </select>
            </div>
            <div className="flex-1">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone number</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 p-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
          </div>
          
          {/* Donation Amount */}
          <div>
            <label htmlFor="donationAmount" className="block text-sm font-medium text-gray-700">Donation Amount*</label>
            <input
              type="text"
              name="donationAmount"
              id="donationAmount"
              value={formData.donationAmount}
              onChange={handleChange}
              className="mt-1 p-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>
          
          {/* Payment Method */}
          <div>
            <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">Payment method*</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="mt-1 p-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            >
              <option value="">Please Select Your Payment Method</option>
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>
          
          {/* Anonymous Checkbox */}
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="isAnonymous"
                name="isAnonymous"
                type="checkbox"
                checked={formData.isAnonymous}
                onChange={handleChange}
                className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="isAnonymous" className="font-medium text-gray-700">I would like to donate anonymously.</label>
            </div>
          </div>
          
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#b25022] hover:bg-[#a03e1f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b25022]"
            >
              Donate
            </button>
          </div>
          
        </form>
      </div>

     
      
    </div>
  );
};

export default DonationForm;