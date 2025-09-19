import { useState } from "react";
import volunteerImg from "../assets/Volunteer.png";

export default function VolunteerReg() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    availability: "",
    interests: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Thank you for registering as a volunteer!");
  };

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-84px)] bg-gray-100">
      {/* Left Side Text */}
      <div className="hidden md:flex-1 md:flex flex-col justify-center items-start p-10 text-white pl-[100px]">
  <img
    src={volunteerImg}
    alt="Volunteer"
    className="h-[500px] w-[600px] object-cover object-center rounded-lg"
  />
</div>


      {/* Right Side Form */}
      <div className="flex-1 flex justify-center items-start p-7 pt-8">
        <div className="bg-white p-8 w-full max-w-lg rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-[#0C2C66] mb-6">
            Volunteer Registration
          </h2>

          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="e.g., +1234567890"
                required
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 p-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
        </div>

            {/* Availability */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Availability
              </label>
              <select
                name="availability"
                placeholder="Select your availability"
                required
                value={formData.availability}
                onChange={handleChange}
                className="w-full border border-gray-300 text-[14px] font-normal rounded-md shadow-sm px-4 py-1.5  focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select...</option>
                <option value="Weekdays">Weekdays</option>
                <option value="Weekends">Weekends</option>
                <option value="Evenings">Evenings</option>
                <option value="Flexible">Flexible</option>
              </select>
            </div>

            {/* Interests */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Areas of Interest
              </label>
              <input
                type="text"
                name="interests"
                placeholder="e.g., Teaching, Event Support"
                value={formData.interests}
                onChange={handleChange}
                className="w-full text-[14px] border border-gray-300 rounded-md px-4 py-1.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Additional Message
              </label>
              <textarea
                name="message"
                placeholder="Any additional information..."
                rows="3"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition"
            >
              Register Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
