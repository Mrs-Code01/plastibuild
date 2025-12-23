import React from "react";
import Header from "../../../components/service-header/Header";

const page = () => {
  return (
    <>
      <Header
        title="Services"
        paths={[
          { label: "Home", href: "/" },
          {
            label: "Circular product design & climate-Tech innovation",
            href: "#"
          }
        ]}
      />
      {/* End of header */}
      {/* End of header */}
      <section className="w-[90%] mx-auto mb-[150px]">
        <div className="w-[70%] mx-auto text-center mb-[50px]">
          <h2 className="font-catamaran text-[35px]">
            Circular Product Design & Climate-Tech Innovation
          </h2>
          <p className="font-raleway text-[17px]">
            We support innovators, startups, schools, research teams, and
            corporates in developing climate-smart products and solutions.
          </p>
        </div>
        <div>
          <h3 className="font-catamaran text-[20px] mb-[15px]">
            Our services include:
          </h3>
          <ul className="font-raleway">
            <li className="border-b-[1px] border-[#000000] py-[15px]">
              Circular product design and prototyping
            </li>
            <li className="border-b-[1px] border-[#000000] py-[15px]">
              Climate-tech hardware and software development
            </li>
            <li className="border-b-[1px] border-[#000000] py-[15px]">
              Upcycled product development (e.g., footwear, household items,
              energy briquettes)
            </li>
            <li className="border-b-[1px] border-[#000000] py-[15px]">
              Testing, piloting, and commercialization support
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default page;
