import React from "react";
import Image from "../assets/team_img.png";
import image1 from "../assets/team1.jpg";
import image2 from "../assets/team2.jpg";
import image3 from "../assets/team3.jpeg";
import image4 from "../assets/team4.jpg";
import image5 from "../assets/team5.jpg";

// Team data (easy to edit)
const teamMembers = [
  {
    name: "John Doe",
    role: "President",
    description:
      "Provides leadership and oversees the overall vision and direction of the NGO.",
    image: image1,
  },
  {
    name: "Jane Smith",
    role: "Vice President",
    description:
      "Assists the president, supervises projects, and ensures smooth daily operations.",
    image: image2,
  },
  {
    name: "Michael Brown",
    role: "Treasurer",
    description:
      "Manages financial planning, budgeting, and proper utilization of funds.",
    image: image3,
  },
  {
    name: "Emily Johnson",
    role: "Communications Director",
    description:
      "Handles public relations, outreach, and communication with the community.",
    image: image4,
  },
  {
    name: "David Wilson",
    role: "Secretary",
    description:
      "Maintains records, organizes meetings, and ensures proper documentation.",
    image: image5,
  },
];

const Team = () => {
  return (
    <section className="bg-gray-100 h-[calc(100vh-84px)] py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">
          Meet Our Team
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300 flex flex-col items-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-[16px] text-black mb-2">{member.role}</p>
              <p className="text-[14px] text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
