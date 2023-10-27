import React from "react";
import TetimonaialBG from "public/images/tetimonial_image.webp";
import Title from "@/components/reusable/Title";
import Link from "next/link";
import Wrapper from "@/components/reusable/Wrapper";
import SameUI from "@/components/reusable/SameUI";
import { advisoryServices } from "@/lib/data";

export default function AdvisoryServices() {
  return (
    <Wrapper>
      <section>
        <Title
          imgSrc={TetimonaialBG}
          title="Advisory Services"
          description="Guiding Your Success: Providiong services for strategic excellence."
        />
        <div className="px-10 py-6 mt-10">
          {advisoryServices.map((service, index) => (
            <SameUI
              key={service.slug}
              index = {index}
              title={service.title}
              text1={service.text1}
              text2={service.text2}
              cards={service.cards}
            />
          ))}
        </div>
        <div className="py-10 px-10 my-10 bg-gray-100">
          <h2 className="text-2xl md:text-4xl font-semibold">Why us</h2>
          <ul className="flex flex-col gap-y-2 list-disc ml-5 my-5">
            <li>
              <strong className="hover:text-[#009f7f] duration-300">
                Compact yet impactful:{" "}
              </strong>
              In contrast to the major consulting firms, CCC is staffed by a
              select group of experts who dedicate their focus and passion to
              every project they undertake.
            </li>
            <li>
              <strong className="hover:text-[#009f7f] duration-300">
                Adaptable Solutions:{" "}
              </strong>
              Regardless of where you stand in your sustainability journey, our
              team possesses the knowledge and experience to enhance your
              results. Our streamlined approach allows us to provide customized
              insights and strategies perfectly suited to your business.
            </li>
            <li>
              <strong className="hover:text-[#009f7f] duration-300">
                Client-Centric Approach:{" "}
              </strong>
              Unlike large consulting firms, we tailor our services to fit your
              needs, no matter your size.
            </li>
            <li>
              <strong className="hover:text-[#009f7f] duration-300">
                Practical Expertise:{" "}
              </strong>
              Our consultants and experts bring hands-on experience in
              overseeing field projects across diverse global scales. Whether in
              carbon trading or civil engineering, their firsthand involvement
              uniquely positions us to provide invaluable insights and strategic
              guidance.
            </li>
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
