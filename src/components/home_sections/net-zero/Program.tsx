import Link from "next/link";
import React from "react";
import Card from "../../reusable/Card";
import Carbon from "public/images/service-icons/carbon.png";
import Plastic from "public/images/service-icons/plastic.png";
import Stratergy from "public/images/service-icons/stratergy.png";
import ForestryImage from "public/images/service-icons/forestry.png";

export default function Program() {
  const cardDetails = [
    {
      imagesrc: Carbon,
      title: "Carbon Credits",
      text: "We collaborate to shift from fossil fuels to sustainable energy sources like wind and solar, minimizing dependency.",
      path: "/services/advisory_services",
    },
    {
      imagesrc: Plastic,
      title: "Plastic Credits",
      text: "We assist in understanding climate change impacts on your business and preparing for the future.",
      path: "/services/advisory_services",
    },
    {
      imagesrc: Stratergy,
      title: "Stratergy and Insights",
      text: "We aid in efficient water usage through innovative solutions that conserve and reduce wastage.",
      path: "/services/advisory_services",
    },
    {
      imagesrc: ForestryImage,
      title: "Program Managemnet",
      path: "/services/advisory_services",
    },
  ];
  return (
    <section className="py-4 px-10 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-y-6">
          <p>Climate Change</p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold">
            Achieve Net Zero
          </h1>
          <p className="text-2xl italic leading-10 font-thin">
            Accomplishing a Net Zero status - when your carbon emissions are
            replaced by elimination of carbon by sustainable practices or
            exchange is challenging. We&apos;re here to help.
          </p>
          <Link href={"/services/advisory_services"}>
            <button className="bg-gray-900 text-slate-50 text-sm sm:text-base px-4 py-3 sm:px-6 sm:py-4 font-semibold tracking-wide hover:scale-105 duration-300">
              Learn more about our programs
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cardDetails.map((card, index) => (
            <Link href={card.path} key={card.path + index}>
              <Card
                key={card.imagesrc.src}
                imageSrc={card.imagesrc}
                title={card.title}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
