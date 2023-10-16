import React from "react";
import TetimonaialBG from "public/images/tetimonial_image.webp";

export default function About() {
  return (
    <section>
      <div
        style={{
          backgroundImage: `url('${TetimonaialBG.src}')`,
        }}
        className="bg-cover bg-center h-full"
      >
        <h1 className="text-5xl md:text-7xl text-center font-semibold text-slate-50 p-32 flex justify-center items-center">
          About Core Carbon Canada
        </h1>
      </div>
      <div>
        <h2>Who are we</h2>
        <p>
          A global climate change management consulting firm. Empowering
          governments, corporations, and institutions to pioneer climate change
          solutions for a just and sustainable future.
        </p>
        <h2>What we do</h2>
        <ul>
          <li>
            <strong>Green Projects: </strong>We support and implement
            sustainable projects, assisting in credits and transactions.
          </li>
          <li>
            <strong>Education: </strong>We support and implement sustainable
            projects, assisting in credits and transactions.
          </li>
          <li>
            <strong>Finance: </strong>We finance and facilitate financing for
            climate projects.
          </li>
          <li>
            <strong>Comprehensive Solutions: </strong>We design tailored climate
            solutions covering mitigation and adaptation.
          </li>
          <li>
            <strong>Carbon Footprints: </strong>We assess and reduce
            environmental impacts for our clients.
          </li>
          <li>
            <strong>Regulatory Navigations: </strong>We ensure clients comply
            with evolving climate-related regulations.
          </li>
          <li>
            <strong>Sustainable Tech: </strong>We help clients integrate green
            technologies into their operations.
          </li>
          <li>
            <strong>Risk Assesment: </strong>We assess climate-related risks and
            help clients mitigate them.
          </li>
          <li>
            <strong>Effective Communication: </strong>We educate clients and the
            public about climate change issues and solutions.
          </li>
          <li>
            <strong>Collaboration: </strong>We partner with environmental
            organizations, research institutions, and government bodies.
          </li>
          <li>
            <strong>Carbon Credits: </strong>We assist clients in claiming
            carbon credits, from registration to transaction.
          </li>
          <li>
            <strong>Data Driven: </strong>We use data and analytics to track
            progress and improve strategies.
          </li>
          <li>
            <strong>Long-term Commitment: </strong>We stand by our clients for
            lasting climate change solutions.
          </li>
          <li>
            <strong>Advocacy: </strong>We promote policies and practices for
            sustainability and resilience.
          </li>
        </ul>
      </div>
    </section>
  );
}
