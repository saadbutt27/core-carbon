import React from "react";
import TetimonaialBG from "public/images/tetimonial_image.webp";
import { QuoteIcon } from "lucide-react";
import TestimonialCarousel from "./TestimonialCarousel";

export default function Testimonials() {
  return (
    <section className="mb-20 2xl:mb-32 h-screen">
      <div
        style={{
          backgroundImage: `url('${TetimonaialBG.src}')`,
        }}
        className="relative bg-cover bg-center"
      >
        <h1 className="text-5xl md:text-7xl text-center text-slate-50 p-32 flex justify-center items-center">
          Our Testimonial
        </h1>
        <div className="min-h-[75vh] absolute top-60 bg-cyan-100 px-6 py-10 md:mx-10 flex flex-col items-center justify-center gap-y-6">
          <QuoteIcon className="w-20 h-20" />
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  );
}
