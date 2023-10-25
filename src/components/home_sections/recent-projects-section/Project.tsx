import React from "react";
import Image from "next/image";
import { type StaticImageData } from "next/image";
import Link from "next/link";
import { ChevronRightCircleIcon } from "lucide-react";

export default function Project({
  imageSrc,
  title,
  text,
}: {
  imageSrc: StaticImageData;
  title: string;
  text: string;
}) {
  return (
    <div className="border bg-slate-50 shadow-md">
      <Image
        src={imageSrc.src}
        alt={title}
        width={500}
        height={100}
        className="group-hover:scale-110 duration-300 max-w-full h-80"
      />
      <div className="flex flex-col gap-y-4 p-10 ">
        <Link href={"/"} className="hover:text-green-400 duration-300">
          <h4>Sustainable Stratergies</h4>
        </Link>
        <Link href={"/"}>
          {" "}
          <h3
            className="text-2xl leading-8 truncate overflow-ellipsis hover:text-green-400 duration-300">
            Protecting Natural Resources and Ensuring Food Security with
            Nature-Based Solutions
          </h3>
        </Link>
        <Link
          href={"/"}
          className="flex items-center gap-x-1.5 text-sm mt-10 group hover:text-green-400 duration-300"
        >
          Read more{" "}
          <ChevronRightCircleIcon className="group-hover:translate-x-1 group-hover:text-green-400 duration-300 w-5 h-5 text-gray-400" />
        </Link>
      </div>
    </div>
  );
}
