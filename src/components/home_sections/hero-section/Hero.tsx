"use client";
import React from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { type StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";

type StateFunction<T> = Dispatch<SetStateAction<T>>;

export default function Hero({
  imageSrc,
  setCurrentSlide,
  totalImages,
}: {
  imageSrc: StaticImageData;
  setCurrentSlide: StateFunction<number>;
  totalImages: number;
}) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.2,
      },
    },
  };
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        mass: 0.5,
      },
    },
  };
  const handleNextImage = () => {
    setCurrentSlide((prevImage) => (prevImage + 1) % totalImages);
  };

  const handlePrevImage = () => {
    setCurrentSlide((prevImage) => (prevImage - 1 + totalImages) % totalImages);
  };
  const backgroundImageStyle = imageSrc
    ? { backgroundImage: `url('${imageSrc.src}')` }
    : {};

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={backgroundImageStyle}
      className="h-screen bg-cover bg-center"
    >
      <motion.div
        variants={container}
        className="flex h-full w-auto flex-col items-center justify-center space-y-6 overflow-hidden px-4 py-8 backdrop-blur-sm"
        initial="hidden"
        animate="visible"
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          variants={child}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-center text-slate-50"
        >
          Climate change is unavoidable.
        </motion.h2>
        <motion.p variants={child} className="text-xl text-slate-50 font-bold tracking-wider">
          Stay ahead of it.
        </motion.p>
        <Link href={"/"} className="group">
          <motion.button
            variants={child}
            className="bg-gray-950 text-slate-50 text-sm sm:text-base px-4 py-3 sm:px-6 sm:py-4 font-semibold tracking-wide group-hover:scale-110 duration-300"
          >
            Let&apos;s Work Together
          </motion.button>
        </Link>
        <ChevronLeft
          onClick={handlePrevImage}
          className="text-slate-50 absolute left-10 cursor-pointer hover:-translate-x-1 duration-300"
          aria-label={`Previous Iamge Button`}

        />
        <ChevronRight
          onClick={handleNextImage}
          className="text-slate-50 absolute right-10 cursor-pointer hover:translate-x-1 duration-300"
          aria-label={`Next Image Button`}
        />
      </motion.div>
    </motion.section>
  );
}
