import React from "react";
import { useState } from "react";
import memberImg from "../assets/member.jpg";

const MembershipForm = () => {

    const [loaded, setLoaded] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
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
    <div className="h-[calc(100vh-84px)] flex flex-col md:flex-row">
      {/* Left side text */}
      <div className="hidden md:block flex-1 relative justify-center items-center md:pl-20 ml-10 bg-cover bg-center">
          {!loaded && (
        <div className="absolute w-[540px] h-[540px] inset-0 bg-gray-200 animate-pulse rounded" />
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
      <div className="flex-1 flex items-start justify-center p-10">
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8">
          <h3 className="text-2xl font-bold mb-5 text-center text-[#0C2C66]">
            Membership Registration
          </h3>

          {/* Name */}
          <div className="mb-2">
            <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-1 border rounded-lg focus:ring-2 focus:ring-[#0C2C66] focus:outline-none"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="mb-2">
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-1 border rounded-lg focus:ring-2 focus:ring-[#0C2C66] focus:outline-none"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Phone */}
          <div className="mb-2">
            <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              
              className="w-full px-4 py-1 border rounded-lg focus:ring-2 focus:ring-[#0C2C66] focus:outline-none"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
                name="password"
              placeholder="Create a password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0C2C66] focus:outline-none"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
           {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Retype Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Retype your password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0C2C66] focus:outline-none"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#0C2C66] text-white font-semibold py-2 rounded-lg hover:bg-[#123b88] transition"
          >
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default MembershipForm;
