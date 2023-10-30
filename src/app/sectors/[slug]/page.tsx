import React from "react";
import TetimonaialBG from "public/images/hero_images/tetimonial_image.webp";
import Title from "@/components/reusable/Title";
import Link from "next/link";
import Wrapper from "@/components/reusable/Wrapper";
import SameUI from "@/components/reusable/SameUI";
import { sectors } from "@/lib/data";
import { Metadata } from "next";
import { StaticImageData } from "next/image";

export const metadata: Metadata = {
  title: "Advisory Services",
};

interface Card {
  title: string;
  text?: string;
  imgSrc: StaticImageData;
}

interface UIProps {
  title: string;
  text1: string;
  text2: string;
  cards: Card[];
}

interface ServicesData {
  slug: string;
  title: string;
  imageData: StaticImageData;
  text: string;
  advisoryServices: UIProps;
  whyUs: {
    title: string;
    text: string;
  };
}

const getSectorsData = (slug: string) => {
  const data = sectors.find((sector) => sector.slug === slug);
  //   console.log(data);
  return data;
};
export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const data = getSectorsData(slug);
  //   console.log(data)
  return (
    <Wrapper>
      <section>
        <Title
          imgSrc={(data && data.imageData) || TetimonaialBG}
          title={(data && data.title) || "Services"}
          description={data && data.text}
        />
        <div className="px-10 py-6 mt-10">
          {data &&
            data.sector.map((sector, index) => (
              <SameUI
                key={sector.slug}
                index={index}
                title={sector.title}
                text1={sector.text1}
                text2={sector.text2}
                cards={sector.cards}
              />
            ))}
        </div>
        <div className="py-10 px-10 mb-10 bg-gray-100">
          <h2 className="text-2xl md:text-4xl font-semibold">Why us</h2>
          <ul className="flex flex-col gap-y-2 list-disc ml-5 my-5">
            {data &&
              data.whyUs.map((point, index) => (
                <li key={point.title + index}>
                  <strong className="hover:text-[#009f7f] duration-300">
                    {point.title}:{" "}
                  </strong>
                  {point.text}
                </li>
              ))}
          </ul>
          <Link href={"/contact"} className="group">
            <button className="bg-gray-950 text-slate-50 text-sm sm:text-base px-4 py-3 sm:px-6 sm:py-4 font-semibold tracking-wide group-hover:scale-110 duration-300">
              Let&apos;s work, Contact us
            </button>
          </Link>
        </div>
      </section>
    </Wrapper>
  );
}
