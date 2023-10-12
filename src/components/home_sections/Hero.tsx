"use client";
import React, { useState } from "react";
import Image1 from "../../../public/images/climate_change.avif";
import Image2 from "../../../public/images/climate_change_2.jpg";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";

const images = [Image1.src, Image2.src];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };
  return (
    <section>
      <div
        style={{ backgroundImage: `url('${images[currentImage]}')` }}
        className="relative h-screen bg-cover bg-center text-white flex flex-col items-center justify-center gap-y-5 px-10 transition-opacity"
      >
        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-center">
          Climate change is ineveitable.
        </h2>
        <p className="text-xl font-bold tracking-wider">Stay ahead of it.</p>
        <button className="bg-black px-6 py-4 font-semibold tracking-wide hover:scale-105 duration-300">
          Let's Work Together
        </button>
        <ChevronLeft
          onClick={handlePrevImage}
          className="absolute left-10 cursor-pointer hover:-translate-x-1 duration-300"
        />
        <ChevronRight
          onClick={handleNextImage}
          className="absolute right-10 cursor-pointer hover:translate-x-1 duration-300"
        />
      </div>
    </section>
  );
}
