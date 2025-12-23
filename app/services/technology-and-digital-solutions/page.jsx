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
            label: "Technology & Digital Solutions",
            href: "#"
          }
        ]}
      />
      {/* End of header */}
      {/* End of header */}
      <section className="w-[90%] mx-auto mb-[150px]">
        <div className="w-[70%] mx-auto text-center mb-[50px]">
          <h2 className="font-catamaran text-[35px]">
            Technology & Digital Solutions
          </h2>
          <p className="font-raleway text-[17px]">
            We build and deploy technology that enhances sustainability, waste
            management, and climate innovation across industries.
          </p>
        </div>
        <div>
          <h3 className="font-catamaran text-[20px] mb-[15px]">
            Our tech-based services include:
          </h3>
          <ul className="font-raleway">
            <li className="border-b-[1px] border-[#000000] py-[15px]">
              AI-powered waste tracking systems
            </li>
            <li className="border-b-[1px] border-[#000000] py-[15px]">
              Waste management technology deployment
            </li>
            <li className="border-b-[1px] border-[#000000] py-[15px]">
              AI + IoT product integration for smart waste monitoring
            </li>
            <li className="border-b-[1px] border-[#000000] py-[15px]">
              Data dashboards for ESG and climate performance
            </li>
            <li className="border-b-[1px] border-[#000000] py-[15px]">
              Digital tools for circular product lifecycle management
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default page;
