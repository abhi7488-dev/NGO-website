import React, { useState, useEffect } from 'react';

const EditFamilyModal = ({ isOpen, onClose, onSave, student }) => {
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

  useEffect(() => {
    if (student) {
      setFormData({
        studentName: student.studentName,
        parent1Name: student.parentsNames[0] || '',
        parent2Name: student.parentsNames[1] || '',
        address: student.address,
        teacher: student.teacher,
        grade: student.grade,
        email1: student.email[0] || '',
        email2: student.email[1] || '',
        phone1: student.phone[0] || '',
        phone2: student.phone[1] || '',
      });
    }
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...formData, id: student.id });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-lg w-full m-4 relative transform transition-all sm:my-8 sm:align-middle">
        <h2 className="text-2xl font-bold mb-4">Edit Family</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-gray-700">Student Name</span>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>
          {/* Add all other form fields here with similar structure */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-gray-700">Parent 1 Name</span>
              <input
                type="text"
                name="parent1Name"
                value={formData.parent1Name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Parent 2 Name</span>
              <input
                type="text"
                name="parent2Name"
                value={formData.parent2Name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Address</span>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Teacher</span>
              <input
                type="text"
                name="teacher"
                value={formData.teacher}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Grade</span>
              <input

                type="text"
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Email 1</span>
              <input
                type="email"
                name="email1"
                value={formData.email1}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Email 2</span>
              <input

                type="email"
                name="email2"
                value={formData.email2}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Phone 1</span>
              <input
                type="text"
                name="phone1"
                value={formData.phone1}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Phone 2</span>
              <input
                type="text"
                name="phone2"
                value={formData.phone2}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
          </div>
          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-[#b25022] rounded-md hover:bg-[#a03e1f]"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditFamilyModal;