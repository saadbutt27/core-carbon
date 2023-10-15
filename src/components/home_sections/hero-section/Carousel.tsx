"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image1 from "public/images/climate_change.avif";
import Image2 from "public/images/climate_change_2.avif";
import Image3 from "public/images/climate_change_4.avif";
import Hero from "./Hero";

export default function CarouselHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [Image1, Image2, Image3];

  const handleSlideChange = (index: number) => {
    if (index !== currentSlide) {
      setCurrentSlide(index);
    }
  };

  return (
    <>
      <div className="mb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Hero
              imageSrc={images[currentSlide]}
              setCurrentSlide={setCurrentSlide}
              totalImages={images.length}
            />
          </motion.div>
        </AnimatePresence>
        <div className="mt-10 flex items-center justify-center">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`mx-2 h-3 rounded-full bg-[#009f7f] duration-300 ${
                currentSlide === index ? "w-10" : "w-3"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
}
