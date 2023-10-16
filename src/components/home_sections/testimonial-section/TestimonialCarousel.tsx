"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function TestimonialCarousel() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      remarks:
        "I deeply appreciate the climate firm's creativity and professionalism in the consulting task they completed for me. Their straightforward and timely delivery of results highlighted their commitment to addressing climate issues. It was a pleasure working with them, and I look forward to future collaborations.",
      position: "Chief Executive",
      companyName: "National Project Managers Pvt. Ltd, Dubaiw",
    },
    {
      remarks:
        "The expertise, vision, and determination of the Core Carbon team have firmly set us on the path to a sustainable and conscientious future.",
      position: "Chief Executive",
      companyName: "Projex International, Brampton Canada",
    },
    {
      remarks:
        "As a partner of Core Carbon, our only regret is not having started sooner. Their impactful contributions to our clients, the nation, and the global community are highly commendable, reflecting their unwavering commitment and exceptional professionalism.",
      position: "Chief Executive",
      companyName: "Feroze Power, Karachi, Pakistan",
    },
  ];
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTestimonial}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center items-center gap-y-6"
        >
          <p className="italic font-semibold text-2xl text-center tracking-wider">
            "{testimonials[currentTestimonial].remarks}"
          </p>
          <p>{testimonials[currentTestimonial].position}</p>
          <p className="text-gray-500">
            {testimonials[currentTestimonial].companyName}
          </p>
        </motion.div>
      </AnimatePresence>
      <div className="mt-10 flex items-center justify-center">
        {testimonials.map((testimonial, index) => (
          <button
            key={index}
            onClick={() => setCurrentTestimonial(index)}
            className={`mx-2 h-3 rounded-full bg-gray-950 duration-300 ${
              currentTestimonial === index ? "w-10" : "w-3"
            }`}
          ></button>
        ))}
      </div>
    </>
  );
}
