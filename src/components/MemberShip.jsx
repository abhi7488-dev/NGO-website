import React from "react";
import { useState } from "react";
import memberImg from "../assets/member.png";

const MembershipForm = () => {

    const [loaded, setLoaded] = useState(false);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

     const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log("Form submitted");
        setFormData({
          name: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
        });
        console.log(formData);
    };

  return (
    <div className="h-[calc(100vh-84px)] flex flex-col md:flex-row items-center justify-center p-8 bg-gray-100">
      {/* Left side text */}
      <div className="hidden md:block flex-1 relative justify-center items-center md:pl-20 ml-10 bg-cover bg-center">
          {!loaded && (
        <div className="absolute w-[540px] h-[540px] inset-0 animate-pulse rounded" />
      )}
      <img
        src={memberImg}
        alt="Membership Illustration"
        onLoad={() => setLoaded(true)}
        className={`object-cover rounded transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />

      </div>

      {/* Right side form */}
      <div className="flex-1 flex items-start justify-center p-10 py-20">
            <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Membership Registration
                </h3>

              
                <div className="grid grid-cols-1 gap-5 mb-4">
                    
                    <div className="grid grid-cols-2 gap-4">
                          <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name*</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="Enter your first name"
                            className="mt-1 p-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name*</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Enter your last name"
                            className="mt-1 p-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                    </div>
                   
                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address*</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            className="mt-1 p-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Phone */}
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number*</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        className="mt-1 p-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>

                {/* Password Fields in a two-column layout */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password*</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Create a password"
                            className="mt-1 p-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            required
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    {/* Retype Password */}
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Retype Password*</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Retype your password"
                            className="mt-1 p-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            required
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Submit */}
                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Register Now
                    </button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default MembershipForm;
