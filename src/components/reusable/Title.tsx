import { StaticImageData } from "next/image";
import React from "react";

export default function Title({
  imgSrc,
  title,
  description,
}: {
  imgSrc: StaticImageData;
  title: string;
  description?: string;
}) {
  return (
    <div
      style={{
        backgroundImage: `url('${imgSrc.src}')`,
      }}
      className="bg-cover bg-center h-full"
    >
      <div className="flex flex-col gap-y-4 justify-center items-center px-10 py-40 text-slate-50">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold ">
          {title}
        </h1>
        <p className="text-lg md:text-2xl text-slate-50">
          {description}
        </p>
      </div>
    </div>
  );
}
