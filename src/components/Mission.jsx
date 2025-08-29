import React from "react";

const Mission = () => {
  const missions = [
    {
      title: "Strengthen the School Experience",
      description:
        "Fostering meaningful collaboration between parents, students, and educators to enhance learning beyond the classroom.",
    },
    {
      title: "Invest in Growth & Opportunity",
      description:
        "Driving a $50,000 annual investment to fund student programs, campus enhancements, and the ATF—ensuring long-term impact.",
    },
    {
      title: "Elevate Parent Engagement & School Pride",
      description:
        "Achieving 50% family involvement to build a culture of participation, engagement, and lasting school pride.",
    },
  ];

  return (
    <section className="bg-gray-100 h-[calc(100vh-84px)] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          – Our Mission –
        </h2>
        <p className="text-xl text-gray-700 mb-12 font-medium">
          Strengthen. Invest. Elevate.
        </p>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missions.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold text-black mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
