import React from "react";
import TetimonaialBG from "../../../../public/images/tetimonial_image.webp";
import { QuoteIcon } from "lucide-react";

export default function Testimonails() {
  return (
    <section className="py-28 px-10 mb-80">
      <div
        style={{
          backgroundImage: `url('${TetimonaialBG.src}')`,
        }}
        className="relative bg-cover bg-center flex flex-col justify-center items-center"
      >
        <h1 className="text-5xl md:text-7xl text-center text-slate-50 p-40">
          Our Testimonial
        </h1>
        <div className="absolute top-72 bg-cyan-100 p-20 flex flex-col items-center justify-center gap-y-6 w-4/5">
          <QuoteIcon className="w-20 h-20" />
          <p className="italic font-semibold text-2xl text-center tracking-wider">
            "I deeply appreciate the climate firm's creativity and
            professionalism in the consulting task they completed for me. Their
            straightforward and timely delivery of results highlighted their
            commitment to addressing climate issues. It was a pleasure working
            with them, and I look forward to future collaborations."
          </p>
          <p>Chief Executive</p>
          <p className="text-gray-500">National Project Managers Pvt. Ltd, Dubai</p>
        </div>
      </div>
    </section>
  );
}
