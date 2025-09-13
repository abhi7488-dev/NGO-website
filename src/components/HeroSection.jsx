import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "./Navbar";

// 👇 Replace with your assets
// import BgImg1 from "../assets/image1.webp";
// import BgImg2 from "../assets/image2.webp";
import BgImg3 from "../assets/image.webp";

export default function HeroSection() {
  const images = [BgImg3];
  const [current, setCurrent] = useState(0);
  
  return (
<div className="relative w-full h-[calc(100vh-50px)] rounded-b-3xl overflow-hidden">
  {/* Background Slider */}
  {images.map((img, idx) => (
    <div
      key={idx}
      className={`absolute inset-x-0 mt-20 w-full h-[calc(100vh-80px)] transition-opacity duration-1000 ${
        idx === current ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background Image */}
      <img
        src={img}
        alt={`Slide ${idx}`}
        className="w-full h-full object-cover object-top"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
    </div>
  ))}

  {/* Navbar */}                       
  <Navbar />

  {/* Hero Content */}                
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 z-10 pt-[220px]">
    <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
      Together for a Brighter Future
    </h1>
    <p className="max-w-2xl mb-6 text-lg md:text-xl drop-shadow-md">
      Empowering students, supporting families, and building a stronger
      community through education, compassion, and opportunity.
    </p>
  </div>
</div>
  );
}
