import { useState } from "react";
import Navbar from "../Navbar";

export default function MembershipForm() {
  const [formData, setFormData] = useState({
    connection: "",
    email: "",
    title: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    // second parent fields
    secondEmail: "",
    secondTitle: "",
    secondFirstName: "",
    secondLastName: "",
    secondAddress: "",
    secondCity: "",
    secondState: "",
    secondZip: "",
    secondHomePhone: "",
    secondWorkPhone: "",
    secondMobilePhone: "",
  });

  const [showSecondParent, setShowSecondParent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSecondParentToggle = (checked) => {
    setShowSecondParent(checked);
    if (!checked) {
      // clear second parent fields when unchecked
      setFormData((prev) => ({
        ...prev,
        secondEmail: "",
        secondTitle: "",
        secondFirstName: "",
        secondLastName: "",
        secondAddress: "",
        secondCity: "",
        secondState: "",
        secondZip: "",
        secondHomePhone: "",
        secondWorkPhone: "",
        secondMobilePhone: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted! Check console for data.");
  };

  return (
    <div className="bg-gray-100 h-full">
      <section className="max-w-7xl mx-auto px-4 py-10 flex flex-col gap-5">
        <h1 className="text-blue-400 text-[24px]">
          Step 1: Set Up Your Family Information
        </h1>
        <p className="text-gray-600">
          Begin by entering your parent and student details. You'll have the
          opportunity to enroll in the BASIS Phoenix Boosters Club as soon as
          this action is complete. Interested in carpooling? Simply mark your
          preference below and open the car door to connecting with other nearby
          families.
        </p>

        <div className="max-w-3xl bg-white border rounded-lg border-white">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* ================== PARENT/FACULTY ================== */}
            <div className="p-4 text-[14px] rounded">
              <h2 className="text-xl font-bold mb-6">PARENT/FACULTY</h2>

              {/* Connection */}
              <div>
                <label className="block mb-2 font-medium">
                  How are you connected to our school?*
                </label>
                <select
                  name="connection"
                  value={formData.connection}
                  onChange={handleChange}
                  className="w-[200px] bg-white border p-1 rounded"
                >
                  <option value="">Select</option>
                  <option value="Parent">Parent or Guardian</option>
                  <option value="Faculty">Faculty</option>
                </select>
              </div>

              {/* Email */}
              <div className="mt-2">
                <label className="block mb-2 font-medium">E-mail Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-[200px] bg-white border p-1 rounded"
                />
              </div>

              {/* Name */}
              <div className="grid grid-cols-3 mt-2 gap-2">
                <div>
                  <label className="block mb-2 font-medium">Title</label>
                  <select
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full bg-white border p-1 rounded"
                  >
                    <option>Mr.</option>
                    <option>Mrs.</option>
                    <option>Ms.</option>
                    <option>Dr.</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 font-medium">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-white border p-1 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-white border p-1 rounded"
                  />
                </div>
              </div>

              {/* Address */}
              <div className="mt-2">
                <label className="block mb-2 font-medium">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full bg-white border p-2 rounded"
                />
              </div>

              {/* City, State, Zip */}
              <div className="grid grid-cols-3 mt-2 gap-2">
                <div>
                  <label className="block mb-2 font-medium">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full bg-white border p-1 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">State</label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full bg-white border p-1 rounded"
                  >
                    <option>Arizona</option>
                    <option>California</option>
                    <option>Texas</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 font-medium">Zip Code</label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    className="w-full bg-white border p-1 rounded"
                  />
                </div>
              </div>
            </div>

            {/* ================== Checkbox for 2nd Parent ================== */}
            <div className="p-4 border-t">
              <label className="flex items-center gap-2 font-medium cursor-pointer">
                <input
                  type="checkbox"
                  checked={showSecondParent}
                  onChange={(e) => handleSecondParentToggle(e.target.checked)}
                  className="w-4 h-4"
                />
                Add Second Parent
              </label>
            </div>

            {/* ================== 2ND PARENT ================== */}
            {showSecondParent && (
              <div className="p-4">
                <h2 className="text-xl font-bold mb-4">2nd PARENT</h2>

                {/* Email */}
                <div className="mt-2">
                  <label className="block mb-1 font-medium">E-mail Address</label>
                  <input
                    type="email"
                    name="secondEmail"
                    value={formData.secondEmail}
                    onChange={handleChange}
                    className="w-[200px] bg-white border p-1 rounded"
                  />
                </div>

                {/* Name */}
                <div className="grid grid-cols-3 mt-2 gap-2">
                  <div>
                    <label className="block mb-1 font-medium">Title</label>
                    <select
                      name="secondTitle"
                      value={formData.secondTitle}
                      onChange={handleChange}
                      className="w-full bg-white border p-1 rounded"
                    >
                      <option>Mr.</option>
                      <option>Mrs.</option>
                      <option>Ms.</option>
                      <option>Dr.</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">First Name</label>
                    <input
                      type="text"
                      name="secondFirstName"
                      value={formData.secondFirstName}
                      onChange={handleChange}
                      className="w-full bg-white border p-1 rounded"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Last Name</label>
                    <input
                      type="text"
                      name="secondLastName"
                      value={formData.secondLastName}
                      onChange={handleChange}
                      className="w-full bg-white border p-1 rounded"
                    />
                  </div>
                </div>

                {/* Address */}
                <div className="mt-2">
                  <label className="block mb-1 font-medium">Address</label>
                  <input
                    type="text"
                    name="secondAddress"
                    value={formData.secondAddress}
                    onChange={handleChange}
                    className="w-full bg-white border p-2 rounded"
                  />
                </div>

                {/* City, State, Zip */}
                <div className="grid grid-cols-3 mt-2 gap-2">
                  <div>
                    <label className="block mb-1 font-medium">City</label>
                    <input
                      type="text"
                      name="secondCity"
                      value={formData.secondCity}
                      onChange={handleChange}
                      className="w-full bg-white border p-1 rounded"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">State</label>
                    <select
                      name="secondState"
                      value={formData.secondState}
                      onChange={handleChange}
                      className="w-full bg-white border p-1 rounded"
                    >
                      <option>Arizona</option>
                      <option>California</option>
                      <option>Texas</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Zip Code</label>
                    <input
                      type="text"
                      name="secondZip"
                      value={formData.secondZip}
                      onChange={handleChange}
                      className="w-full bg-white border p-1 rounded"
                    />
                  </div>
                </div>

                {/* Phones */}
                <div className="grid grid-cols-3 mt-2 gap-2">
                  <div>
                    <label className="block mb-1 font-medium">Home Phone</label>
                    <input
                      type="text"
                      name="secondHomePhone"
                      value={formData.secondHomePhone}
                      onChange={handleChange}
                      className="w-full bg-white border p-1 rounded"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Work Phone</label>
                    <input
                      type="text"
                      name="secondWorkPhone"
                      value={formData.secondWorkPhone}
                      onChange={handleChange}
                      className="w-full bg-white border p-1 rounded"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Mobile Phone</label>
                    <input
                      type="text"
                      name="secondMobilePhone"
                      value={formData.secondMobilePhone}
                      onChange={handleChange}
                      className="w-full bg-white border p-1 rounded"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Submit */}
            <div className="text-right">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Next Step &gt;
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
