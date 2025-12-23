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
            label: "Industrial Waste Management Solutions",
            href: "#"
          }
        ]}
      />
      {/* End of header */}
      {/* End of header */}
      <section className="w-[90%] mx-auto mb-[150px]">
        <div className="w-[70%] mx-auto text-center mb-[50px]">
          <h2 className="font-catamaran text-[35px]">
            Industrial Waste Management Solutions
          </h2>
          <p className="font-raleway text-[17px]">
            We work with manufacturers, SMEs, and production facilities to
            manage waste streams more efficiently and sustainably.
          </p>
        </div>
        <div>
          <h3 className="font-catamaran text-[20px] mb-[15px]">
            Our industrial services cover:
          </h3>
          <ul className="font-raleway">
            <li className="border-b-[1px] border-[#000000] py-[15px]">
              Waste audits and material flow analysis
            </li>
            <li className="border-b-[1px] border-[#000000] py-[15px]">
              Resource recovery and reuse pathways
            </li>
            <li className="border-b-[1px] border-[#000000] py-[15px]">
              Processing of plastics, sawdust, textiles, metals, and agro-waste
            </li>
            <li className="border-b-[1px] border-[#000000] py-[15px]">
              Safe disposal and compliance support
            </li>
            <li className="border-b-[1px] border-[#000000] py-[15px]">
              Waste-to-value transformation strategies
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default page;
