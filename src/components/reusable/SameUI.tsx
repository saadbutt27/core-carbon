import React from "react";
import Card from "@/components/reusable/Card";
import { type StaticImageData } from "next/image";
import clsx from "clsx";

interface Card {
  title: string;
  text?: string;
  imgSrc: StaticImageData;
}

interface UIProps {
  index: number;
  title: string;
  text1: string;
  text2: string;
  cards: Card[];
}

export default function SameUI({ index, title, text1, text2, cards }: UIProps) {
  return (
    <section className="mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center">
        <div className={index % 2 == 1 ? `order-first md:order-last` : ""}>
          <h2 className="text-2xl md:text-4xl font-semibold mb-3">{title}</h2>
          <p className="text-sm md:text-lg">
            {text1}
            <br />
            <br />
            {text2}
          </p>
        </div>
        <div
          className={clsx("grid grid-cols-1", {
            "sm:grid-cols-2 gap-6": cards.length > 2,
          })}
        >
          {cards.map((card, index) => (
            <Card
              key={index}
              imageSrc={card.imgSrc}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
