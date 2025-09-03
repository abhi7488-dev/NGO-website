import React, { useState } from "react";

const Directory = () => {
  const [search, setSearch] = useState("");

  // Example Data (replace with your data source)
  const data = [
    {
      parent1: "Agarwal, Santosh",
      parent2: "Agarwal, Sunita",
      students: ["Aarav Agarwal (8th Grade)"],
    },
    {
      parent1: "Akhre, Rachit",
      parent2: "",
      students: ["Sanchi Akhre (9th Grade)"],
    },
    {
      parent1: "Aldarondo, Charles",
      parent2: "Aldarondo, Moriah",
      students: ["Jack Aldarondo (11th Grade)"],
    },
    {
      parent1: "Armstead, Melissa",
      parent2: "Armstead, Matt",
      students: ["Asher Armstead (9th Grade)", "Jenna Allen (12th Grade)"],
    },
  ];

  // Filter Logic
  const filteredData = data.filter((entry) => {
    const searchLower = search.toLowerCase();
    return (
      entry.parent1.toLowerCase().includes(searchLower) ||
      entry.parent2.toLowerCase().includes(searchLower) ||
      entry.students.some((s) => s.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="p-6">
      {/* Search Input */}
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Parent–Student Directory</h2>
        <input
          type="text"
          placeholder="Search by name or grade..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-80 focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-6 py-3">Parent 1</th>
              <th className="px-6 py-3">Parent 2</th>
              <th className="px-6 py-3">Students</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((entry, idx) => (
                <tr
                  key={idx}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 font-medium">{entry.parent1}</td>
                  <td className="px-6 py-4">{entry.parent2 || "-"}</td>
                  <td className="px-6 py-4">
                    <ul className="list-disc pl-4">
                      {entry.students.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center py-6 text-gray-500">
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Directory;
