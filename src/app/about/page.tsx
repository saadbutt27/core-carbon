import React from "react";
import TetimonaialBG from "public/images/tetimonial_image.webp";
import Title from "@/components/reusable/Title";
import Team from "./components/Team";
import Wrapper from "@/components/reusable/Wrapper";

export default function About() {
  return (
    <Wrapper>
      <section className="mb-20">
        <Title
          imgSrc={TetimonaialBG}
          title="About Core Carbon Canada"
          description="Aiding Businesses for a Positive Climate Impact and Sustainable
          Projects."
        />
        <div className="grid lg:grid-cols-[1fr,0.5fr] gap-16 justify-center items-center py-4 px-10 my-16">
          <div className="flex flex-col gap-y-6">
            <h2 className="text-2xl md:text-4xl font-semibold">Who are we</h2>
            <p className="md:text-lg">
              A global climate change management consulting firm. Empowering
              governments, corporations, and institutions to pioneer climate
              change solutions for a just and sustainable future.
            </p>
            <h2 className="text-2xl md:text-4xl font-semibold">What we do</h2>
            <ul className="flex flex-col list-disc ml-5 md:text-lg">
              <li>
                <strong className="hover:text-[#009f7f] duration-300">
                  Green Projects:{" "}
                </strong>
                We support and implement sustainable projects, assisting in
                credits and transactions.
              </li>
              <li>
                <strong className="hover:text-[#009f7f] duration-300">
                  Education:{" "}
                </strong>
                We support and implement sustainable projects, assisting in
                credits and transactions.
              </li>
              <li>
                <strong className="hover:text-[#009f7f] duration-300">
                  Finance:{" "}
                </strong>
                We finance and facilitate financing for climate projects.
              </li>
              <li>
                <strong className="hover:text-[#009f7f] duration-300">
                  Comprehensive Solutions:{" "}
                </strong>
                We design tailored climate solutions covering mitigation and
                adaptation.
              </li>
              <li>
                <strong className="hover:text-[#009f7f] duration-300">
                  Carbon Footprints:{" "}
                </strong>
                We assess and reduce environmental impacts for our clients.
              </li>
              <li>
                <strong className="hover:text-[#009f7f] duration-300">
                  Regulatory Navigations:{" "}
                </strong>
                We ensure clients comply with evolving climate-related
                regulations.
              </li>
              <li>
                <strong className="hover:text-[#009f7f] duration-300">
                  Sustainable Tech:{" "}
                </strong>
                We help clients integrate green technologies into their
                operations.
              </li>
              <li>
                <strong className="hover:text-[#009f7f] duration-300">
                  Risk Assesment:{" "}
                </strong>
                We assess climate-related risks and help clients mitigate them.
              </li>
              <li>
                <strong className="hover:text-[#009f7f] duration-300">
                  Effective Communication:{" "}
                </strong>
                We educate clients and the public about climate change issues
                and solutions.
              </li>
              <li>
                <strong className="hover:text-[#009f7f] duration-300">
                  Collaboration:{" "}
                </strong>
                We partner with environmental organizations, research
                institutions, and government bodies.
              </li>
              <li>
                <strong className="hover:text-[#009f7f] duration-300">
                  Carbon Credits:{" "}
                </strong>
                We assist clients in claiming carbon credits, from registration
                to transaction.
              </li>
              <li>
                <strong className="hover:text-[#009f7f] duration-300">
                  Data Driven:{" "}
                </strong>
                We use data and analytics to track progress and improve
                strategies.
              </li>
              <li>
                <strong className="hover:text-[#009f7f] duration-300">
                  Long-term Commitment:{" "}
                </strong>
                We stand by our clients for lasting climate change solutions.
              </li>
              <li>
                <strong className="hover:text-[#009f7f] duration-300">
                  Advocacy:{" "}
                </strong>
                We promote policies and practices for sustainability and
                resilience.
              </li>
            </ul>
          </div>
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/YoV01yU7FXc?si=sw-vH2zF5klb-86K"
              title="YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </div>
        <Team />
      </section>
    </Wrapper>
  );
}
