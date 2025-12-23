import React from "react";
import Image from "next/image";
import Header from "../../../components/program-header/Header";

const page = () => {
  return (
    <>
      <Header
        title="Programs & Projects"
        paths={[
          { label: "Home", href: "/" },
          {
            label: "PlastiBuild Makerspace",
            href: "#"
          }
        ]}
      />
      {/* End of header */}
      {/* End of header */}
      <section className="w-[90%] mx-auto mb-[150px]">
        <div className="w-[70%] mx-auto text-center mb-[50px]">
          <h2 className="font-catamaran text-[35px]">
            PlastiBuild Makerspace — Bariga
          </h2>
          <p className="font-raleway text-[17px]">
            Our community makerspace in Bariga provides an inclusive environment
            where young people, artisans, women, and students can learn, design,
            and fabricate sustainable products from waste.
          </p>
        </div>
        <div className="flex justify-between">
          <Image
            src="/images/plasti14.jpg"
            alt="Digital Waste Upcycling Hub"
            width={200}
            height={200}
            className="w-[48%] rounded-[10px]"
            unoptimized
          />
          <p className="font-raleway text-[17px] w-[48%]">
            The makerspace supports training in plastics recycling, footwear
            upcycling, low-cost fabrication, electronics, and green prototyping.
            <br /> <br />
            It also hosts workshops, hackathons, and team-based co-creation
            sessions, helping local talents turn ideas into real climate-tech
            solutions.
          </p>
        </div>
      </section>
    </>
  );
};

export default page;
