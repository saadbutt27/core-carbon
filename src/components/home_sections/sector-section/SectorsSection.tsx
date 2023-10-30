import React from "react";
import Card from "../../reusable/Card";
import EnergyImage from "public/images/service-icons/energy.png";
import ClimateChangeImage from "public/images/service-icons/climate-change.png";
import WaterImage from "public/images/service-icons/water.png";
import ForestryImage from "public/images/service-icons/forestry.png";
import AggricultureImage from "public/images/service-icons/aggriculture.png";
import SocioImage from "public/images/service-icons/sociao.png";
import Link from "next/link";

export default function SectorsSection() {
  const cardDetails = [
    {
      imagesrc: EnergyImage,
      title: "Energy",
      text: "We collaborate to shift from fossil fuels to sustainable energy sources like wind and solar, minimizing dependency.",
      path: "/sectors/energy",
    },
    {
      imagesrc: ClimateChangeImage,
      title: "Climate Change",
      text: "We assist in understanding climate change impacts on your business and preparing for the future.",
      path: "/services/advisory_services",
    },
    {
      imagesrc: WaterImage,
      title: "Water and Waste Water",
      text: "We aid in efficient water usage through innovative solutions that conserve and reduce wastage.",
      path: "/sectors/water_and_waste_water",
    },
    {
      imagesrc: ForestryImage,
      title: "Forestry and Biodiversity",
      text: "Biodiversity, vital for human survival, is supported through our expertise, aiding in its restoration and sustenance.",
      path: "/sectors/forestry_and_biodiversity",
    },
    {
      imagesrc: AggricultureImage,
      title: "Aggriculture",
      text: "Our sustainable agriculture experts facilitate affordable solutions for farmers, enhancing their access and implementation.",
      path: "/sectors/aggriculture",
    },
    {
      imagesrc: SocioImage,
      title: "Socio-econmic Capacity Development",
      text: "Our experts collaborate with you to provide both your staff and the community the necessary training and resources for sustainable practices.",
      path: "/sectors/capacity_development",
    },
  ];
  return (
    <section className="py-4 px-10 mb-20">
      <h1 className="text-4xl sm:text-5xl md:text-7xl text-center">
        Sectors we serve
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-20 gap-y-10 mt-10">
        {cardDetails.map((card, index) => (
          <Link href={card.path} key={card.path + index}>
            <Card
              key={card.imagesrc.src}
              imageSrc={card.imagesrc}
              title={card.title}
              text={card.text}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
