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
      <div className="flex-1 flex flex-col justify-center items-start p-10 text-white pl-[100px]">
  <img
    src={volunteerImg}
    alt="Volunteer"
    className="h-[500px] w-[600px] object-cover object-center rounded-lg"
  />
</div>


      {/* Right Side Form */}
      <div className="flex-1 flex justify-center items-start p-7 pt-3">
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
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-1 focus:ring-2 focus:ring-[#c87047] focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-1 focus:ring-2 focus:ring-[#c87047] focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-1 focus:ring-2 focus:ring-[#c87047] focus:outline-none"
              />
            </div>

            {/* Availability */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Availability
              </label>
              <select
                name="availability"
                required
                value={formData.availability}
                onChange={handleChange}
                className="w-full border text-[14px] font-normal rounded-lg px-4 py-1.5 focus:ring-2 focus:ring-[#c87047] focus:outline-none"
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
                className="w-full text-[14px] border rounded-lg px-4 py-1.5 focus:ring-2 focus:ring-[#c87047] focus:outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Additional Message
              </label>
              <textarea
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-1 focus:ring-2 focus:ring-[#c87047] focus:outline-none"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#0C2C66] text-white py-2 rounded-lg font-semibold hover:bg-[#123b88] transition"
            >
              Register Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
