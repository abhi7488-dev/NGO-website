import React from "react";

const SchoolInfo = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 text-center">
          BASIS Phoenix School Information
        </h2>

        {/* Intro */}
        <p className="text-gray-700 text-lg mb-8">
          <strong>BASIS Phoenix</strong> is a high-performing, tuition-free
          public charter school in Phoenix, Arizona, that serves grades 6
          through 12. It is part of the BASIS Charter Schools network and is
          known for its rigorous, STEM-focused, liberal arts curriculum.
        </p>

        {/* Campuses */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-black mb-4">
            Campuses
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong>BASIS Phoenix (Grades 6–12):</strong> 13231 N. 22nd St.,
              Phoenix, AZ 85022.
            </li>
            <li>
              <strong>BASIS Phoenix Central (Grades K–5):</strong> 201 E.
              Indianola Ave., Phoenix, AZ 85012.
            </li>
          </ul>
        </div>

        {/* Curriculum */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-black mb-4">
            Curriculum
          </h3>
          <p className="text-gray-700 mb-4">
            The BASIS curriculum is advanced and demanding, with the goal of
            preparing students for college and beyond.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong>Core structure:</strong> STEM-infused, liberal arts
              program taught by Subject Expert Teachers.
            </li>
            <li>
              <strong>Accelerated learning:</strong> The curriculum moves at an
              accelerated rate, especially in high school.
            </li>
            <li>
              <strong>Early foundations:</strong> Lower grades focus on strong
              foundations in Math, Science, Humanities, and Literacy.
            </li>
            <li>
              <strong>High school:</strong> Students master advanced content and
              can take Capstone Courses.
            </li>
          </ul>
        </div>

        {/* Academics and Rankings */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-black mb-4">
            Academics and Rankings
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Consistently ranked among the best schools in Arizona and the
              nation.
            </li>
            <li>Top U.S. high school, especially noted for its STEM programs.</li>
            <li>
              Students achieve high proficiency in Math and Reading, with strong
              AP exam pass rates.
            </li>
          </ul>
        </div>

        {/* School Culture */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-black mb-4">
            School Culture
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Environment is academically challenging and competitive, appealing
              to motivated students.
            </li>
            <li>
              Some students thrive, while others may find the pace intense.
            </li>
            <li>
              Areas for improvement: school events and certain policies (e.g.,
              cellphone use).
            </li>
          </ul>
        </div>

        {/* Admissions */}
        <div>
          <h3 className="text-2xl font-semibold text-black mb-4">
            Admissions
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              BASIS Phoenix is a free public charter school with no entrance
              exams.
            </li>
            <li>
              Enrollment is open to all students; if applications exceed seats, a
              lottery is held.
            </li>
            <li>Applicants must provide proof of Arizona residency.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SchoolInfo;
