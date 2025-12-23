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
            label: "Community Empowerment",
            href: "#"
          }
        ]}
      />
      {/* End of header */}
      {/* End of header */}
      <section className="w-[90%] mx-auto mb-[150px]">
        <div className="w-[70%] mx-auto text-center mb-[50px]">
          <h2 className="font-catamaran text-[35px]">
            Community Empowerment & Climate Education
          </h2>
          <p className="font-raleway text-[17px]">
            Across Nigeria, we run community workshops, digital courses, live
            sessions, and school-based outreaches that make climate literacy
            accessible to all.
          </p>
        </div>
        <div className="flex justify-between">
          <Image
            src="/images/plasti15.jpg"
            alt="Digital Waste Upcycling Hub"
            width={200}
            height={200}
            className="w-[48%] rounded-[10px] object-cover object-top-right"
            unoptimized
          />
          <div className=" w-[48%]">
            <p className="font-raleway text-[22px] italic pb-[10px]">
              Our hybrid model; digital learning backed by physical hubs and
              makerspaces_helps young people learn, collaborate, and build
              real-world solutions that address local climate challenges.
            </p>
            <Image
              src="/images/plasti16.png"
              alt="Digital Waste Upcycling Hub"
              width={200}
              height={200}
              className="w-[100%]"
              unoptimized
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
