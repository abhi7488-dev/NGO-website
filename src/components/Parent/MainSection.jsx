import { Link } from "react-router-dom";
import React from "react";
import { TiTick } from "react-icons/ti";

const MainSection = () => {
  return (
    <div className="bg-gray-100 min-h-[calc(100vh-84px)] pt-10">
      <section className="mt-10 mb-10 mx-auto max-w-7xl px-4">
      <h2 className="text-[28px] font-bold text-[#c87047] text-center mb-15">
        <span className="w-15 h-1 bg-[#c87047] inline-block mr-2"></span>
        Welcome to the Parent Portal
        <span className="w-15 h-1 bg-[#c87047] inline-block ml-2"></span>
      </h2>
     <div className="flex w-[900px] mx-auto">
       <div className="flex flex-col max-w-[550px] mx-auto bg-white border px-5 py-8 border-gray-200 rounded-lg transition-transform duration-300 hover:scale-105">
        <div className="flex justify-between border-b border-gray-300  pb-1 mb-2">
          <h2 className="text-[18px] font-semibold">
            BASIS Phoenix Family Information
          </h2>
          <p className="text-sky-500 pl-4">hide section</p>
        </div>
        <div className="flex items-center gap-2 border-b border-gray-300 pb-1 mb-2">
          <TiTick size={15} className="bg-green-700 rounded-full text-white" />
          <h2>
            <Link to="/firebird-information">FIREBIRD INFORMATION</Link>
          </h2>
        </div>
        <div className="flex items-center gap-2 ">
          <TiTick size={15} className="bg-green-700 rounded-full text-white" />
          <h2>Manage Directory Preferences</h2>
        </div>
      </div>
      <div className="flex flex-col max-w-[550px] mx-auto bg-white border px-11 py-6 border-gray-200 rounded-lg transition-transform duration-300 hover:scale-105">
        <div className="flex justify-between border-b border-gray-300 pb-1 mb-2">
          <h2 className="text-[18px] font-semibold">Volunteer Today!</h2>
          <p className="text-sky-500">hide section</p>
        </div>
        <h2 className="border-b border-gray-300 pb-1 mb-2">
          School Events Volunteer
        </h2>
        <h2 className="border-b border-gray-300 pb-1 mb-2">
          Grade-Level Ambassadors
        </h2>
        <div className="flex items-center gap-2">
          <TiTick size={15} className="bg-green-700 rounded-full text-white" />
          <h2>Board Member and Chair Volunteer</h2>
        </div>
      </div>
     </div>
    </section>
    </div>
  );
};

export default MainSection;
