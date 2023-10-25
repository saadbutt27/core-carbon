import React from "react";
import ProfileCard from "./ProfileCard";
import Member1 from "public/images/team/arif_sir.jpg";

export default function Team() {
  return (
    <section className="px-10">
      <h1 className="text-4xl sm:text-5xl md:text-7xl text-center mb-3">
        Our Team
      </h1>
      <p className="text-base md:text-lg text-gray-800 text-center mb-10 italic">
        Our leadership team brings a wealth of experience from diverse sectors,
        spanning various industries and geographies. We are actively pursuing
        two goals: equal opportunity in the workplace and gender parity. We are
        committed to creating a more inclusive and equitable workplace for all
        employees.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        <ProfileCard
          imageSrc={Member1}
          title="Arif Allaudin"
          text="Managing Director"
        />
        <ProfileCard
          imageSrc={Member1}
          title="Arif Allaudin"
          text="Managing Director"
        />
        <ProfileCard
          imageSrc={Member1}
          title="Arif Allaudin"
          text="Managing Director"
        />
        <ProfileCard
          imageSrc={Member1}
          title="Arif Allaudin"
          text="Managing Director"
        />
        <ProfileCard
          imageSrc={Member1}
          title="Arif Allaudin"
          text="Managing Director"
        />
      </div>
    </section>
  );
}
