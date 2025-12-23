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
            label: "Digital Waste Upcycling Hub",
            href: "#"
          }
        ]}
      />
      {/* End of header */}
      {/* End of header */}
      <section className="w-[90%] mx-auto mb-[150px]">
        <div className="w-[70%] mx-auto text-center mb-[50px]">
          <h2 className="font-catamaran text-[35px]">
            Digital Waste Upcycling Hub
          </h2>
          <p className="font-raleway text-[17px]">
            Our Digital Waste Upcycling Hub serves as the central engine
            powering our innovation ecosystem.
          </p>
        </div>
        <div className="flex justify-between">
          <Image
            src="/images/plasti15.jpg"
            alt="Digital Waste Upcycling Hub"
            width={200}
            height={200}
            className="w-[48%] rounded-[10px]"
            unoptimized
          />
          <p className="font-raleway text-[17px] w-[48%]">
            It integrates digital learning, AI-powered climate education,
            hardware prototyping, and smart waste-to-product manufacturing.
            <br /> <br />
            Through the Hub, young creators access courses, design tools,
            virtual collaboration, and a marketplace for showcasing
            eco-products. It makes climate literacy practical by connecting
            learners directly to production tools, mentoring, and hands-on
            project development.
          </p>
        </div>
      </section>
    </>
  );
};

export default page;
