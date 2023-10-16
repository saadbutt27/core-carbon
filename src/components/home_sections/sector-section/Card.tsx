import React from "react";
import Image from "next/image";
import { type StaticImageData } from "next/image";

export default function Card({
  imageSrc,
  title,
  text,
}: {
  imageSrc: StaticImageData;
  title: string;
  text: string | undefined;
}) {
  return (
    <div className="group flex flex-col items-center justify-center gap-y-4 p-6 hover:border hover:shadow-lg duration-300 border-b-2">
      <Image
        src={imageSrc.src}
        alt={title}
        width={100}
        height={100}
        className="group-hover:scale-110 duration-300"
      />
      <h3 className="text-lg font-semibold text-center">{title}</h3>
      {text &&<p className="text-center text-sm font-light">{text}</p>}
    </div>
  );
}
