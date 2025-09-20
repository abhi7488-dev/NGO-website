import React, { useState } from "react";
import img from "../assets/img.jpg";

const ProfileComponent = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [userData, setUserData] = useState({
    name: "Abishek Kumar",
    email: "abisheksingh70223@gmail.com",
    phone: "7488007465",
    role: "Parent of Emily Smith (Grade 5)",
    children: [
      { name: "Emily Smith", grade: "Grade 5", teacher: "Mrs. Johnson" },
    ],
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(userData);

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // save updates
  const handleSave = () => {
    setUserData(formData);
    setIsEditing(false);
  };

  return (
    <section className="bg-gray-200">
      <div className="flex flex-col md:flex-row h-[calc(100vh-84px)] max-w-[600px] mx-auto">
        <div className="flex-1 p-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Profile Header */}
            <div className="bg-slate-500 p-6 text-white">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-blue-600 text-2xl font-bold mb-4 md:mb-0 md:mr-6 overflow-hidden">
                  <img
                    src={img}
                    alt="Profile"
                    className="w-full h-full object-cover object-center rounded-full"
                  />
                </div>

                <div className="text-center md:text-left">
                  <h1 className="text-xl font-bold">{userData.name}</h1>
                  <p className="text-blue-100">{userData.role}</p>
                  <p className="text-blue-100 mt-1">
                    <i className="fas fa-envelope mr-2"></i>
                    {userData.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Profile Details */}
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Personal Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Full Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="p-2 w-full bg-gray-50 rounded border border-gray-200"
                    />
                  ) : (
                    <div className="p-2 bg-gray-50 rounded border border-gray-200">
                      {userData.name}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Phone Number
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="p-2 w-full bg-gray-50 rounded border border-gray-200"
                    />
                  ) : (
                    <div className="p-2 bg-gray-50 rounded border border-gray-200">
                      {userData.phone}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Email Address
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="p-2 w-full bg-gray-50 rounded border border-gray-200"
                    />
                  ) : (
                    <div className="p-2 bg-gray-50 rounded border border-gray-200">
                      {userData.email}
                    </div>
                  )}
                </div>
              </div>

              {/* Children Info */}
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Children Information
              </h2>
              {userData.children.map((child, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded border border-gray-200 p-3 mb-4"
                >
                  <div className="flex flex-col md:flex-row justify-between">
                    <div>
                      <h3 className="font-medium text-gray-800">
                        {child.name}
                      </h3>
                      <p className="text-sm text-gray-600">{child.grade}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <p className="text-sm text-gray-600">
                        Teacher: {child.teacher}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Buttons */}
              <div className="mt-6 flex justify-end space-x-2">
                {isEditing ? (
                  <>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-4 py-2 bg-[#c1621e] text-white rounded hover:bg-[#82320d] transition-colors"
                  >
                    Edit Profile
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileComponent;
