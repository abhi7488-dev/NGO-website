import React from "react";
import chairmanImg from "../assets/chairmanimg.jpg";
import image from "../assets/images.png";
import stuImage from "../assets/students.webp";
import parentImg from "../assets/Parents.jpg";
import teacherImg from "../assets/teachers.webp";

import feesImg from "../assets/fee.png";
import scholarshipImg from "../assets/scholar.png";
import learningImg from "../assets/project.png";

import strengthImg from "../assets/empowerment.png";
import investImg from "../assets/profits.svg";
import parentsImg from "../assets/parents.svg";



const DirectorSection = () => {
  const stats = [
    { value: "9+", label: "Schools" },
    { value: "580+", label: "Volunteers" },
    { value: "4,000+", label: "Alumni" },
    { value: "85+", label: "Scholarships" },
    { value: "500+", label: "Books" },
  ];

  const data = [
    {
      title: "Students",
      img: stuImage, // replace with real img
    },
    {
      title: "Parents",
      img: parentImg,
    },
    {
      title: "Teachers",
      img: teacherImg,
    },
  ];

  const features = [
    {
      title: "Strengthen the School Experience",
      img: <img src={strengthImg} alt="Strengthen" className="w-10 h-10" />,
      color: "bg-sky-400",
      data: "Fostering meaningful collaboration between parents, students, and educators to enhance learning beyond the classroom.",
    },
    {
      title: "Invest in Growth & Opportunity",
      img: <img src={investImg} alt="Invest" className="w-10 h-10 text-white" />,
      color: "bg-amber-300",
      data: "Driving a $50,000 annual investment to fund student programs, campus enhancements, and the ATF—ensuring long-term impact.",
    },
    {
      title: "Elevate Parent Engagement & School Pride",
      img: <img src={parentsImg} alt="Elevate" className="w-10 h-10" />,
      color: "bg-red-400",
      data: "Achieving 50% family involvement to build a culture of participation, engagement, and lasting school pride.",
      
    },
  ];

  const feature = [
    {
      icon: "🎯",
      title: "Purpose-Driven Impact",
      desc: "Every dollar raised fuels teacher appreciation, student recognition, campus projects, and more.",
    },
    {
      icon: "🤝",
      title: "Parent-Powered Connection",
      desc: "Be part of something bigger — connect with like-minded parents and make a meaningful difference.",
    },
    {
      icon: "🔔",
      title: "Stay in the Know",
      desc: "Get insider access to upcoming events, initiatives, and volunteer opportunities — all in one place.",
    },
    {
        icon: "🚀",
        title: "Make an Immediate Difference",
        desc:"Whether you give an hour, a dollar, or an idea — it all moves our mission forward." 
    }
  ];

  const cardData = [
    {
      title: "Saving on School Fees",
      img: feesImg,
      link: "#",
    },
    {
      title: "Scholarships",
      img: scholarshipImg,
      link: "#",
    },
    {
      title: "Experiential Learning",
      img: learningImg,
      link: "#",
    },
  ];

  return (
   <main className="pt-[84px]">
     <div className="max-w-[1180px] mx-auto">
         <section className="mb-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-[25px] md:text-4xl font-bold text-[#c87047]">
          Welcome to BASIS Phoenix Boosters
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Welcome to the start of something special. By joining the Boosters,
          you're helping create a vibrant, well-supported school experience
          where students thrive, teachers feel appreciated, and parents stay
          meaningfully connected.
        </p>

        {/* Feature Strip */}
        <div className="mt-15 grid grid-cols-1 md:grid-cols-4 gap-8">
          {feature.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-6">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
      <h1 className="text-[#c87047] text-[25px] md:text-[34px] font-bold text-center">
        OUR PURPOSE
      </h1>
      <span className="block h-1 w-35 bg-[#204E94] mt-2 mx-auto"></span>
      <div className="mt-4">
        <p className="text-[17px] md:text-[24px] text-center text-[#4a4747]">
          Our purpose is to empower individuals and communities through
          education, innovation, and collaboration.
        </p>
      </div>

      <section className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={chairmanImg}
            alt="Chairman"
            className="w-[320px] h-auto object-cover"
          />
        </div>

        {/* Right Side - Text */}
        <div>
          <h2 className="text-[#c87047] font-bold text-xl mb-4">
            PRESIDENT MESSAGE
          </h2>

          <p className="text-gray-700 text-[18px] leading-relaxed mb-6">
            Hi, I’m Mary Aranki, honored to serve as your Boosters President!
            I’ve been part of the BASIS community for five years, with a
            8th-grade son and an 12th-grade daughter at BASIS Phoenix.
            Previously active in the PTA at our former district, I’m excited to
            bring that experience here. My goal is to enhance the school
            experience through meaningful initiatives that support our students,
            families, and teachers. I look forward to a fantastic year working
            together!
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12 text-center">
        {/* Heading */}
        <h2 className="text-[#c87047] font-bold text-[25px] md:text-[34px] mb-12">
          AFEF IN NUMBERS
        </h2>

       {/* Stats Section */}
<section id="stats" className="mt-[84px]">
  <div className="flex flex-wrap justify-center gap-y-12">
    {stats.map((item, index) => (
      <div
        key={index}
        className="w-1/2 md:w-1/3 flex flex-col items-center justify-center relative"
      >
        {/* Vertical Divider */}
        {(index === 0 || index === 1 || index === 3) && (
          <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-20 w-px bg-gray-300"></span>
        )}

        <h3 className="text-[30px] md:text-[69px] font-bold text-[#0C2C66]">
          {item.value}
        </h3>
        <p className="text-gray-700 font-semibold text-[18px] md:text-[28px] mt-2">
          {item.label}
        </p>
      </div>
    ))}
  </div>
</section>

      </section>

      <section className="text-center mt-[50px] mb-[50px]">
        {/* Heading */}
        <h2 className="text-red-500 font-bold text-[25px] md:text-[34px] mb-6">OUR SCHOOLS</h2>

        <div className="flex items-center justify-center">
          <img
            //   src={school.logo}
            src={image}
            className="h-15 md:h-20 object-contain"
          />
        </div>
      </section>

      <section>
        <h1 className="text-[#c87047] font-bold text-[25px] md:text-[34px] mb-10 mt-20">
          HEAR FROM OUR COMMUNITY
        </h1>
      </section>

      <section className="text-center mt-[50px] mb-[50px]">
        {/* Heading */}
        <h2 className="text-[#c87047] font-bold text-[25px] md:text-[34px] mb-3">
          THE AFEF EDGE
        </h2>
        <span className="block h-1 w-43 bg-[#204E94] mx-auto"></span>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden shadow-md cursor-pointer"
          >
            {/* Background Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[350px] object-cover transform group-hover:scale-105 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>

            {/* Title */}
            <h3 className="absolute top-3 left-3 text-white text-lg font-semibold">
              {item.title}
            </h3>

            {/* Arrow */}
            <div className="absolute bottom-3 right-3 text-white text-xl">
              ➝
            </div>
          </div>
        ))}
      </div>

      <div className="w-full px-6 py-10">
        {/* Top Right "Explore All" */}
        <div className="flex justify-end mb-8">
          <a href="#" className="text-sm font-medium hover:underline">
            Explore All
          </a>
        </div>

        {/* Features Grid */}
         <h2 className="text-2xl md:text-3xl font-bold text-[#c87047] mb-13 text-center">
          OUR MISSION
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Circle Icon */}
              <div
                className={`w-28 h-28 flex items-center justify-center rounded-full ${item.color}`}
              >
                {item.img}
              </div>

              {/* Title */}
              <h3
                className={`mt-4 text-lg font-medium ${
                  index === 0
                    ? "text-sky-500"
                    : index === 1
                    ? "text-amber-400"
                    : index === 2
                    ? "text-red-500"
                    : "text-blue-900"
                }`}
              >
                {item.title}
              </h3>

              {/* Read More */}
              <p
                href={item.link}
                className="mt-3 inline-block text-sm font-medium text-black hover:underline"
              >
                {item.data}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 my-18">
        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#c87047] mb-8">
          SUPPORTING OUR STUDENTS AND FAMILIES
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-md cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[400px] object-cover transform group-hover:scale-105 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>

              {/* Title */}
              <h3 className="absolute top-3 left-3 text-white text-lg font-semibold">
                {item.title}
              </h3>

              {/* Read More */}
              <a
                href={item.link}
                className="absolute bottom-3 right-3 text-white text-sm font-medium flex items-center gap-1 hover:underline"
              >
                Read More <span>➝</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
   </main>
  );
};

export default DirectorSection;
