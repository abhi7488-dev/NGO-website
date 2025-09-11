import React, { useState } from "react";

const Directory = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const data = [
    {
      parent1: {
        name: "Santosh Agarwal",
        email: "santosh@email.com",
        phone: "555-123-4567",
        address: "123 Main St, Phoenix, AZ",
      },
      parent2: {
        name: "Sunita Agarwal",
        email: "sunita@email.com",
        phone: "324-555-6789",
        address: "123 Main St, Phoenix, AZ",
      },
      students: [{ name: "Aarav Agarwal", grade: "8th Grade" }],
    },
    {
      parent1: {
        name: "Charles Aldarondo",
        email: "charles@email.com",
        phone: "324-456-7890",
        address: "45 Palm St, Phoenix, AZ",
      },
      parent2: {
        name: "Moriah Aldarondo",
        email: "moriah@email.com",
        phone: "555-444-5555",
        address: "45 Palm St, Phoenix, AZ",
      },
      students: [{ name: "Jack Aldarondo", grade: "11th Grade" }],
    },
    {
      parent1: {
        name: "John Doe",
        email: "john@email.com",
        phone: "555-111-2222",
        address: "678 Elm St, Phoenix, AZ",
      },
      parent2: {
        name: "Jane Doe",
        email: "jane@email.com",
        phone: "865-183-2450",
        address: "678 Elm St, Phoenix, AZ",
      },
      students: [{ name: "Emily Doe", grade: "9th Grade" }],
    },
    {
      parent1: {
        name: "Alice Smith",
        email: "alice@email.com",
        phone: "727-303-3045",
        address: "123 Oak St, Phoenix, AZ",
      },
      parent2: {
        name: "Bob Smith",
        email: "bob@email.com",
        phone: "555-666-6666",
        address: "123 Oak St, Phoenix, AZ",
      },
      students: [{ name: "Charlie Smith", grade: "10th Grade" }],
    },
  ];

  // Filter search
  const filteredData = data.filter((entry) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      entry.parent1.name.toLowerCase().includes(searchLower) ||
      (entry.parent2 &&
        entry.parent2.name.toLowerCase().includes(searchLower)) ||
      entry.students.some((student) =>
        student.name.toLowerCase().includes(searchLower)
      )
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header and Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
            Parent-Student Directory
          </h1>
          <input
            type="text"
            placeholder="Search by name..."
            className="pl-3 pr-4 py-2 w-full md:w-64 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Table */}
        {filteredData.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <p className="text-gray-500">No matching families found.</p>
          </div>
        ) : (
          <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                    Family Address
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                    Parent 1
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                    Parent 2
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                    Students
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredData.map((entry, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    {/* Address */}
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {entry.parent1.address}
                    </td>

                    {/* Parent 1 */}
                    <td className="px-4 py-3 text-sm">
                      <div className="font-medium text-gray-800">
                        {entry.parent1.name}
                      </div>
                      <div className="text-gray-500 text-xs">
                        {entry.parent1.email}
                      </div>
                      <div className="text-gray-500 text-xs">
                        {entry.parent1.phone}
                      </div>
                    </td>
                    
                    {/* Parent 2 */}
                    <td className="px-4 py-3 text-sm">
                      {entry.parent2 ? (
                        <>
                          <div className="font-medium text-gray-800">
                            {entry.parent2.name}
                          </div>
                          <div className="text-gray-500 text-xs">
                            {entry.parent2.email}
                          </div>
                          <div className="text-gray-500 text-xs">
                            {entry.parent2.phone}
                          </div>
                        </>
                      ) : (
                        <span className="text-gray-400 italic">N/A</span>
                      )}
                    </td>

                    {/* Students - Always visible */}
                    <td className="px-4 py-3 text-sm">
                      <div className="space-y-1">
                        {entry.students.map((student, sIdx) => (
                          <div key={sIdx}>
                            <span className="font-medium text-gray-800 block">
                              {student.name}
                            </span>
                            <span className="text-gray-500 text-xs">
                              {student.grade}
                            </span>
                          </div>
                        ))}
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="px-4 py-3 text-right text-sm space-x-3">
                      <button className="text-gray-600 hover:text-gray-800">
                        Message
                      </button>
                      <button className="text-blue-600 hover:text-blue-800">
                        Call
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Directory;
