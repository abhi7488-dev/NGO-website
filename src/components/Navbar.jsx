import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/BASIS_Logo.png";
import { useLocation } from "react-router-dom";
import userImg from "../assets/team3.jpeg";

const Navbar = ({ bgColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    { title: "Home", link: "/" }, // normal link
    {
      title: "About Us",
      items: [
        { name: "Our Mission", link: "/about/mission" },
        { name: "Meet the Team", link: "/about/team" },
        { name: "Our School Info", link: "/about/school" },
      ],
    },

    {
      title: "Membership",
      items: [
        { name: "Become a Member", link: "/membership" },
        { name: "Volunteer", link: "/membership/volunteer" },
        { name: "Donate", link: "/donate" },
      ],
    },
    {
      title: "Community",
      items: [
        { name: "Community Chat", link: "/community/chat" },
        { name: "Events Calendar", link: "/community/events" },
      ],
    },

    {
      title: "Parent Portal",
      items: [
        { name: "Directory", link: "/parent/directory" },
        { name: "Parent Form", link: "/parent-form" },
        { name: "Carpool", link: "/carpool" },
      ],
    },
   

    
  ];

  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden"; // disable scroll
  } else {
    document.body.style.overflow = "auto"; // re-enable scroll
  }
}, [isOpen]);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`w-full flex items-center justify-between px-6 md:px-10 h-[70px] md:h-[84px] z-[22000]
        ${
          isHome
            ? "fixed left-0 top-0 backdrop-blur-md bg-white text-black shadow-sm"
            : "sticky top-0 backdrop-blur-md bg-white text-black shadow-sm"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2 md:pl-6">
          <img src={Logo} alt="Logo" className="h-13 md:h-16 " />
        </div>

        {/* Right side */}
        <div className="flex items-center gap-22">
          <ul className="hidden md:flex justify-center items-center space-x-13 font-semibold ${isHome ? 'text-[#f9f9fe]' : 'text-[#c87047]'} text-[19px]">
            {menus.map((menu, idx) => (
              <li key={idx} className="relative inline-block group">
                {/* Normal link if no dropdown */}
                {!menu.items ? (
                  <Link to={menu.link}>{menu.title}</Link>
                ) : (
                  <>
                    {/* Dropdown trigger */}
                    <button>{menu.title}</button>
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#c87047] group-hover:left-0 group-hover:w-full transition-all duration-300"></span>

                    {/* Dropdown menu */}
                    <div className="absolute left-0 text-[14px] font-semibold top-full hidden group-hover:block bg-white text-black shadow-lg rounded min-w-[160px] z-50">
                      {menu.items.map((item, i) => (
                        <Link
                          key={i}
                          to={item.link}
                          className="block px-4 py-2 hover:bg-[#c87047] hover:text-white"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden md:inline-block relative group">
            <img
              src={userImg}
              alt=""
              className={`h-11 w-11 rounded-full object-cover transition-transform duration-300 hover:scale-110 object-center ${isHome ? "bg-white" : ""}`}
            />
            <div className="absolute right-1 text-[14px] font-semibold top-full hidden group-hover:block bg-white text-black shadow-lg rounded mt-0 min-w-[160px] z-50">
              <Link to="/profile" className="block px-4 py-2 hover:bg-[#c87047] hover:text-white">
                Profile
              </Link>
              <Link to="/dashboards" className="block px-4 py-2 hover:bg-[#c87047] hover:text-white">
                Dashboards
              </Link>
              <Link to="/orders" className="block px-4 py-2 hover:bg-[#c87047] hover:text-white">
                Orders
              </Link>
              <Link to="#" className="block px-4 py-2 hover:bg-[#c87047] hover:text-white">
                Log Out
              </Link>
            </div>
          </div>

         
        </div>
        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
  {isOpen && (
  <div className="fixed inset-0 top-14 w-full h-auto bg-white text-black flex flex-col items-center py-6 space-y-4 shadow-md md:hidden z-20 animate-slide-down">
    {menus.map((menu, idx) => (
      <div key={idx} className="w-full text-center">
        {!menu.items ? (
          <Link
            to={menu.link} // ✅ use "to" instead of "href"
            className="block py-2 text-lg font-semibold hover:text-[#c87047] transition"
            onClick={() => setIsOpen(false)}
          >
            {menu.title}
          </Link>
        ) : (
          <div className="flex flex-col space-y-2">
            <span className="font-semibold">{menu.title}</span>
            {menu.items.map((item, i) => (
              <Link
                key={i}
                to={item.link} // ✅ use item.link
                className="block text-gray-600 hover:text-[#c87047] pl-4 transition"
                onClick={() => setIsOpen(false)}
              >
                {item.name} {/* ✅ show item.name */}
              </Link>
            ))}
          </div>
        )}
      </div>
    ))}
    <div>
      <button
        className="bg-gray-200 font-semibold text-[#873a17] py-2 px-6 rounded-full 
        hover:bg-[#c87047] hover:text-white hover:outline hover:outline-[#873a17] 
        hover:outline-offset-2 transition"
        onClick={() => setIsOpen(false)}
      >
        Log In
      </button>
    </div>
  </div>
)}


    </>
  );
};

export default Navbar;
