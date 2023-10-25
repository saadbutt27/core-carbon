import React from "react";
import Image from "next/image";
import Link from "next/link";
import Project1 from "public/images/project-images/brick-kiln.jpg";
import Project2 from "public/images/project-images/brick-kiln-2.jpg";
import Project from "./Project";
import { ChevronRightCircleIcon } from "lucide-react";

export default function RecentProjects() {
  // const projectDetails = [
  //   {
  //     imagesrc: Project1,
  //     title: "Sustainablity Stratergies",
  //     text: "Protecting Natural Resources and Ensuring Food Security with Nature-Based Solutions",
  //   },
  //   {
  //     imagesrc: Project2,
  //     title: "Sustainablity Stratergies",
  //     text: "Protecting Natural Resources and Ensuring Food Security with Nature-Based Solutions",
  //   },
  //   {
  //     imagesrc: Project3,
  //     title: "Sustainablity Stratergies",
  //     text: "Protecting Natural Resources and Ensuring Food Security with Nature-Based Solutions",
  //   },
  // ];
  return (
    <section className="py-28 px-10 mb-20 bg-cyan-100">
      <h1 className="text-4xl sm:text-5xl md:text-7xl text-center">
        Our Recent Impact-Focused Projects
      </h1>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-20 gap-y-10 mt-10"> */}
      {/* {projectDetails.map((project) => (
          <Project
            key={project.imagesrc.src}
            imageSrc={project.imagesrc}
            title={project.title}
            text={project.text}
          />
        ))} */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-x-3.5 gap-y-3.5 lg:gap-y-0 mt-12">
        <Image
          src={Project1.src}
          alt={"Brick Kiln"}
          width={500}
          height={100}
          className="group-hover:scale-110 duration-300 max-w-full h-96"
        />
        <div className="flex flex-col justify-center items-center">
          <Link href={"/"} className="hover:text-green-400 duration-300">
            <h4 className="text-xl">Sustainable Stratergies</h4>
          </Link>

          <h3 className="text-3xl leading-8 text-center">
            Protecting Natural Resources and Ensuring Food Security with
            Nature-Based Solutions
          </h3>

          <Link
            href={"/"}
            className="flex items-center gap-x-1.5 text-base mt-10 group hover:text-green-400 duration-300"
          >
            Read more{" "}
            <ChevronRightCircleIcon className="group-hover:translate-x-1 group-hover:text-green-400 duration-300 w-5 h-5 text-gray-400" />
          </Link>
        </div>
        <Image
          src={Project2.src}
          alt={"Brick Kiln"}
          width={500}
          height={100}
          className="group-hover:scale-110 duration-300 max-w-full h-96"
        />
      </div>
      {/* </div> */}
    </section>
  );
}
