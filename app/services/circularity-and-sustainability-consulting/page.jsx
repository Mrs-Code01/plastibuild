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
            label: "Circularity & sustainability consulting",
            href: "#"
          }
        ]}
      />
      {/* End of header */}
      {/* End of header */}
      <section className="w-[90%] mx-auto mb-[150px]">
        <div className="w-[70%] mx-auto text-center mb-[50px]">
          <h2 className="font-catamaran text-[35px]">
            Circularity & Sustainability Consulting
          </h2>
          <p className="font-raleway text-[17px]">
            We support organisations in integrating circular economy principles,
            responsible production, and climate-smart operations.
          </p>
        </div>
        <div>
          <h3 className="font-catamaran text-[20px] mb-[15px]">
            Our consultancy services include:
          </h3>
          <ul className="font-raleway">
            <li className="border-b-[1px] border-[#000000] py-[15px]">
              Design for circularity
            </li>
            <li className="border-b-[1px] border-[#000000] py-[15px]">
              Sustainability strategy development
            </li>
            <li className="border-b-[1px] border-[#000000] py-[15px]">
              ESG policy formulation and reporting
            </li>
            <li className="border-b-[1px] border-[#000000] py-[15px]">
              Carbon data tracking, measurement, and validation
            </li>
            <li className="border-b-[1px] border-[#000000] py-[15px]">
              Waste minimization audits and assessments
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default page;
