import React from "react";
import Project1 from "public/images/project-images/project-iamge-1.jpg";
import Project2 from "public/images/project-images/project-iamge-1.jpg";
import Project3 from "public/images/project-images/project-iamge-1.jpg";
import Project from "./Project";

export default function RecentProjects() {
  const projectDetails = [
    {
      imagesrc: Project1,
      title: "Sustainablity Stratergies",
      text: "Protecting Natural Resources and Ensuring Food Security with Nature-Based Solutions",
    },
    {
      imagesrc: Project2,
      title: "Sustainablity Stratergies",
      text: "Protecting Natural Resources and Ensuring Food Security with Nature-Based Solutions",
    },
    {
      imagesrc: Project3,
      title: "Sustainablity Stratergies",
      text: "Protecting Natural Resources and Ensuring Food Security with Nature-Based Solutions",
    },
  ];
  return (
    <section className="py-28 px-10 mb-20 bg-cyan-100">
      <h1 className="text-5xl md:text-7xl text-center">
        Our Recent Impact-Focused Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-20 gap-y-10 mt-10">
        {projectDetails.map((project) => (
          <Project
            key={project.imagesrc.src}
            imageSrc={project.imagesrc}
            title={project.title}
            text={project.text}
          />
        ))}
      </div>
    </section>
  );
}
