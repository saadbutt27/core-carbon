import React from "react";
import Image from "next/image";
import { type StaticImageData } from "next/image";
import Link from "next/link";
import { ChevronRightCircleIcon } from "lucide-react";

export default function ProfileCard({
  imageSrc,
  title,
  text,
}: {
  imageSrc: StaticImageData;
  title: string;
  text?: string;
}) {
  return (
    <div className="group flex flex-col gap-y-4 p-7 sm:p-10 shadow-lg duration-300">
      <div className="border-b-2 border-b-gray-600">
        <Image
          src={imageSrc.src}
          alt={title}
          width={350}
          height={350}
          className="mx-auto group-hover:scale-105 duration-300 rounded-full"
        />
        <h3 className="text-lg font-semibold  mt-3">{title}</h3>
        {text && <p className=" text-sm mb-3">{text}</p>}
      </div>
      {/* <Link
        href={""}
        className="flex items-center justify-start gap-x-1.5 text-sm group-hover:text-[#009f7f] duration-300"
      >
        Read more{" "}
        <ChevronRightCircleIcon className="group-hover:translate-x-1 group-hover:text-[#009f7f] duration-300 w-5 h-5 text-gray-400" />
      </Link> */}
    </div>
  );
}
