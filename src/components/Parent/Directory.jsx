import React from 'react';
import AddFamilyModal from './AddFamilyModal';
import EditFamilyModal from './EditFamilyModal'; // Import the new component
import { useState } from 'react';

// Student data remains the same...
const initialStudentsData = [
  {
    id: 1,
    studentName: 'Andy Brayden J',
    parentsNames: ['Nicole Andy', 'Kurt Andy'],
    address: '6623 Springford Terrace Harrisburg,PA, 17111',
    teacher: 'Mrs Maggie Carter',
    grade: '3rd',
    email: ['nicoleandy@outlook.com', 'kurtandy@gmail.com'],
    phone: ['1234567890', '1234567890'],
  },
  {
    id: 2,
    studentName: 'Armstrong Sabina',
    parentsNames: ['Megan Armstrong', 'Jay Armstrong'],
    address: '501 Lopax Road Harrisburg,PA, 17112',
    teacher: 'Ms Tianna Harner',
    grade: '1st',
    email: ['meganarmstrong@gmail.com', 'jayarmstrong@hotmail.com'],
    phone: ['1234567890', '1234567890'],
  },
  {
    id: 3,
    studentName: 'Arnold Nastasious',
    parentsNames: ['Nastasious Arnold', 'Nastasious Arnold'],
    address: '3660 ashbill court rex Rex,GA,30273',
    teacher: 'Mr Bill Thomas',
    grade: '4th',
    email: ['stasi.arnold@aol.com', 'stasi.arnold@aol.com'],
    phone: ['4049643007', ''],
  },
  {
    id: 4,
    studentName: 'Boring Mason',
    parentsNames: ['Sara Borrng', 'Kris Boring'],
    address: 'Harris Drive Harrisburg,PA,17112',
    teacher: 'Mr James Brown',
    grade: '2nd',
    email: ['saraboring@gmail.com', 'krisboring@gmail.com'],
    phone: ['1234567890', '1234567890'],
  },
  {
    id: 5,
    studentName: 'Boxwood Murphy',
    parentsNames: ['Mark Boxwood', 'Robin Boxwood'],
    address: 'Alfano Dr Harrisburg,PA,17112',
    teacher: 'Dr David Thomas',
    grade: '5th',
    email: ['mboxwood@gmail.com', 'roboxwood@gmail.com'],
    phone: ['1234567890', '1234567890'],
  },
  {
    id: 6,
    studentName: 'Bridge Emma',
    parentsNames: ['Grace Bridge', 'Kevin Bridge'],
    address: 'Red Top Road Harrisburg,PA,17112',
    teacher: 'Ms Emily Snyder',
    grade: '2nd',
    email: ['gracebridge@hotmail.com', 'kevinbridge@hotmail.com'],
    phone: ['1234567890', '1234567890'],
  },
  {
    id: 7,
    studentName: 'Brightbill Tina',
    parentsNames: ['Lisa Brightbill', 'Doug Brightbill'],
    address: 'Meadow Lane Harrisburg,PA,17112',
    teacher: 'Mrs Eva Nixen',
    grade: '3rd',
    email: ['lisabrightbill@gmail.com', 'dougbrightbill@gmail.com'],
    phone: ['1234567890', '1234567890'],
  },
];

const StudentTable = () => {
  const [students, setStudents] = useState(initialStudentsData);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // Renamed state for clarity
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // New state for edit modal
  const [editingStudent, setEditingStudent] = useState(null);

  const handleSaveFamily = (formData) => {
    const newFamily = {
      id: students.length + 1, // Simple ID generation
      studentName: formData.studentName,
      parentsNames: [formData.parent1Name, formData.parent2Name].filter(Boolean),
      address: formData.address,
      teacher: formData.teacher,
      grade: formData.grade,
      email: [formData.email1, formData.email2].filter(Boolean),
      phone: [formData.phone1, formData.phone2].filter(Boolean),
    };

    setStudents((prevStudents) => [...prevStudents, newFamily]);
    setIsAddModalOpen(false); // Close the add modal
  };

  const openEditModal = (student) => {
    setEditingStudent(student);
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = (editedFormData) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === editedFormData.id
          ? {
              ...student,
              studentName: editedFormData.studentName,
              parentsNames: [editedFormData.parent1Name, editedFormData.parent2Name].filter(Boolean),
              address: editedFormData.address,
              teacher: editedFormData.teacher,
              grade: editedFormData.grade,
              email: [editedFormData.email1, editedFormData.email2].filter(Boolean),
              phone: [editedFormData.phone1, editedFormData.phone2].filter(Boolean),
            }
          : student
      )
    );
    closeEditModal();
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditingStudent(null);
  };

  return (
    <div>
      <div className="h-[calc(100vh-84px)] overflow-auto shadow-md rounded-lg scroll-smooth bg-gray-50 pt-7 ">
        <div className="flex justify-end mb-4 mr-[120px]">
          <button
            onClick={() => setIsAddModalOpen(true)} // Use the new state
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Add Family
          </button>
        </div>
        <table className="max-w-5xl mx-auto">
          <thead>
            <tr>
              <th scope="col" className="sticky top-0 z-10 px-5 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider bg-gray-400">
                <span>Student Name</span>
              </th>
              <th scope="col" className="sticky top-0 z-10 px-5 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider bg-gray-400">
                <span>Parents Names</span>
              </th>
              <th scope="col" className="sticky top-0 z-10 px-5 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider bg-gray-400">
                Address
              </th>
              <th scope="col" className="sticky top-0 z-10 px-5 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider bg-gray-400">
                Teacher
              </th>
              <th scope="col" className="sticky top-0 z-10 px-5 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider bg-gray-400">
                <span>Grade</span>
              </th>
              <th scope="col" className="sticky top-0 z-10 px-5 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider bg-gray-400">
                Email
              </th>
              <th scope="col" className="sticky top-0 z-10 px-5 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider bg-gray-400">
                Phone
              </th>
              <th scope="col" className="sticky top-0 z-10 px-5 py-3 text-right text-xs font-medium text-gray-800 uppercase tracking-wider bg-gray-400">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student.id}>
                <td className="px-5 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  {student.studentName}
                </td>
                <td className="px-5 py-3 whitespace-nowrap text-sm text-gray-700">
                  {student.parentsNames.map((name, index) => (
                    <div key={index}>{name}</div>
                  ))}
                </td>
                <td className="px-5 py-3 whitespace-nowrap text-sm text-gray-700">
                  {student.address}
                </td>
                <td className="px-5 py-3 whitespace-nowrap text-sm text-gray-700">
                  {student.teacher}
                </td>
                <td className="px-5 py-3 whitespace-nowrap text-sm text-gray-700">
                  {student.grade}
                </td>
                <td className="px-5 py-3 whitespace-nowrap text-sm text-gray-700">
                  {student.email.map((emailAddr, index) => (
                    <div key={index}>{emailAddr}</div>
                  ))}
                </td>
                <td className="px-5 py-3 whitespace-nowrap text-sm text-gray-700">
                  {student.phone.map((phoneNumber, index) => (
                    <div key={index}>{phoneNumber}</div>
                  ))}
                </td>
                <td className="px-5 py-3 whitespace-nowrap text-sm text-gray-700 text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <svg
                      onClick={() => AddFamilyModal(student.id)}
                      className="h-5 w-5 text-gray-400 cursor-pointer"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Render the modal for adding a new family */}
      <AddFamilyModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleSaveFamily}
      />

      {/* Render the modal for editing a family */}
      <EditFamilyModal
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        onSave={handleSaveEdit}
        student={editingStudent}
      />
    </div>
  );
};

export default StudentTable;