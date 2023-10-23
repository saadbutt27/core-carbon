import React from "react";
import Card from "./Card";
import EnergyImage from "public/images/service-icons/energy.png";
import ClimateChangeImage from "public/images/service-icons/climate-change.png";
// import ClimateChangeImage from "public/images/service-icons/climate-change-2.png";
import WaterImage from "public/images/service-icons/water.png";
import ForestryImage from "public/images/service-icons/forestry.png";
import AggricultureImage from "public/images/service-icons/aggriculture.png";
import SocioImage from "public/images/service-icons/sociao.png";

export default function SectorsSection() {
  const cardDetails = [
    {
      imagesrc: EnergyImage,
      title: "Energy",
      text: "We collaborate to shift from fossil fuels to sustainable energy sources like wind and solar, minimizing dependency.",
    },
    {
      imagesrc: ClimateChangeImage,
      title: "Climate Change",
      text: "We assist in understanding climate change impacts on your business and preparing for the future.",
    },
    {
      imagesrc: WaterImage,
      title: "Water and Waste Water",
      text: "We aid in efficient water usage through innovative solutions that conserve and reduce wastage.",
    },
    {
      imagesrc: ForestryImage,
      title: "Forestry and Biodiversity",
      text: "Biodiversity, vital for human survival, is supported through our expertise, aiding in its restoration and sustenance.",
    },
    {
      imagesrc: AggricultureImage,
      title: "Aggriculture",
      text: "Our sustainable agriculture experts facilitate affordable solutions for farmers, enhancing their access and implementation.",
    },
    {
      imagesrc: SocioImage,
      title: "Socio-econmic Capacity Development",
      text: "Our experts collaborate with you to provide both your staff and the community the necessary training and resources for sustainable practices.",
    },
  ];
  return (
    <section className="py-4 px-10 mb-20">
      <h1 className="text-5xl md:text-7xl text-center">Sectors we serve</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-20 gap-y-10 mt-10">
        {cardDetails.map((card) => (
          <Card
            key={card.imagesrc.src}
            imageSrc={card.imagesrc}
            title={card.title}
            text={card.text}
          />
        ))}
      </div>
    </section>
  );
}
