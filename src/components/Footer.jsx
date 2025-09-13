import React from "react";
import Logo from "../assets/phoenixBKG.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#c87047] text-gray-200 py-9">
      <div className="max-w-[1170px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-8">
          <div className="flex flex-col items-start space-y-6">
            <div className="flex items-center">
              <img src={Logo} alt="Basis Phoenix" className="h-16" />
              <span className="ml-2 text-xl font-semibold">Basis Phoenix</span>
            </div>
            <div>
              <h3 className="mb-2 font-bold text-center">Stay in Touch</h3>
              <button
                className="bg-gray-200 text-[#873a17] py-2 px-6 rounded-full 
                hover:bg-[#c87047] hover:outline hover:outline-[#873a17] hover:outline-offset-2"
              >
                Subscribe Now
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-3">About Us</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Meet the Team
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Take Action</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Donate
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Community Hub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Media
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Programs</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Our Programs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Children & Learning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Youth & Skilling
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Girls & Women Empowerment
                </a>
              </li>
            </ul>
          </div>

          {/* Contact + Social + Address */}
          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-2">Contact</h3>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@prathamusa.org"
                  className="hover:text-gray-300"
                >
                  info@basisphoenix.org
                </a>
              </p>
              <p>Phone: 1-866-BASIS</p>
              <p>Fax: 713-583-6779</p>
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            {/* Left Section */}
            <div className="space-y-1">
              <p className="text-sm">
                &copy; 2024 Basis Phoenix. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-sm hover:underline">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm hover:underline">
                  Terms of Service
                </a>
                <a href="#" className="text-sm hover:underline">
                  Sitemap
                </a>
              </div>
            </div>

            {/* Right Section (Social Links) */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
