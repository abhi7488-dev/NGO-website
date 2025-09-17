import React, { useState } from 'react';

const AddFamilyModal = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    parent1Name: '',
    parent2Name: '',
    address: '',
    teacher: '',
    grade: '',
    email1: '',
    email2: '',
    phone1: '',
    phone2: '',
  });

  if (!isOpen) {
    return null;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.studentName || !formData.parent1Name) {
      alert('Student Name and at least one Parent Name are required.');
      return;
    }
    onSave(formData);
  };

  return (
    // Main modal overlay - THIS LINE IS UPDATED
    <div 
      className="fixed inset-0 bg-gray-500 bg-opacity-50 backdrop-blur-sm z-40 flex justify-center items-center"
      onClick={onClose}
    >
      {/* Modal content */}
      <div 
        className="bg-white p-4 rounded-lg shadow-xl w-full max-w-2xl mt-15 max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-gray-300 border-b pb-3 mb-3">
          <h2 className="text-xl font-semibold">Add New Family</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Form Fields */}
            <div className="md:col-span-2">
              <label htmlFor="studentName" className="block text-sm font-medium text-gray-700">Student's Full Name</label>
              <input type="text" name="studentName" id="studentName" value={formData.studentName} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-1" required />
            </div>

            <div>
              <label htmlFor="parent1Name" className="block text-sm font-medium text-gray-700">Parent/Guardian 1 Name</label>
              <input type="text" name="parent1Name" id="parent1Name" value={formData.parent1Name} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-1" required />
            </div>
            <div>
              <label htmlFor="parent2Name" className="block text-sm font-medium text-gray-700">Parent/Guardian 2 Name</label>
              <input type="text" name="parent2Name" id="parent2Name" value={formData.parent2Name} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-1" />
            </div>

             <div>
              <label htmlFor="email1" className="block text-sm font-medium text-gray-700">Parent 1 Email</label>
              <input type="email" name="email1" id="email1" value={formData.email1} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-1" />
            </div>
             <div>
              <label htmlFor="email2" className="block text-sm font-medium text-gray-700">Parent 2 Email</label>
              <input type="email" name="email2" id="email2" value={formData.email2} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-1" />
            </div>

            <div>
              <label htmlFor="phone1" className="block text-sm font-medium text-gray-700">Parent 1 Phone</label>
              <input type="tel" name="phone1" id="phone1" value={formData.phone1} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-1" />
            </div>
            <div>
              <label htmlFor="phone2" className="block text-sm font-medium text-gray-700">Parent 2 Phone</label>
              <input type="tel" name="phone2" id="phone2" value={formData.phone2} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-1" />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <input type="text" name="address" id="address" value={formData.address} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-1" />
            </div>
            
            <div>
              <label htmlFor="teacher" className="block text-sm font-medium text-gray-700">Teacher</label>
              <input type="text" name="teacher" id="teacher" value={formData.teacher} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-1" />
            </div>
            <div>
              <label htmlFor="grade" className="block text-sm font-medium text-gray-700">Grade</label>
              <input type="text" name="grade" id="grade" value={formData.grade} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-1" />
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex justify-end mt-6 pt-4 border-t border-gray-300">
            <button type="button" onClick={onClose} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg mr-2">
              Cancel
            </button>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
              Save Family
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFamilyModal;