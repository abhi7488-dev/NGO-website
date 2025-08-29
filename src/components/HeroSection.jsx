import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/BASIS_Logo.png";
import BgImg1 from "../assets/image1.webp";
import BgImg2 from "../assets/image2.webp";
import BgImg3 from "../assets/image.webp";
import userImg from "../assets/user.svg";
import logo_img from "../assets/logo_basisBooster.png";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Menu, X } from "lucide-react";
import Navbar from "./Navbar";

export default function HeroSection() {
  const [openMenu, setOpenMenu] = useState(null);
   const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (idx) => {
    setOpenMenu(openMenu === idx ? null : idx);
  };




  // 👇 Background images
  const images = [BgImg1, BgImg2, BgImg3];

  const [current, setCurrent] = useState(0);

  // Auto change every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Slider */}
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Slide ${idx}`}
          className={`absolute inset-0 top-20 w-full h-full object-cover transition-opacity duration-1000 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute"></div>

    <Navbar />

      {/* Left/Right Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/40 p-3 rounded-full text-white hover:bg-black/70 z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/40 p-3 rounded-full text-white hover:bg-black/70 z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              idx === current ? "bg-white" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
