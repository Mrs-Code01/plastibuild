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
        <div className="w-[70%] mx-auto text-center mb-[50px] max-[700px]:w-[100%] ">
          <h2 className="font-catamaran text-[35px] max-[700px]:text-[30px] leading-[1.2] mb-[10px]">
            Corporate Recycling Programs
          </h2>
          <p className="font-raleway text-[17px] max-[700px]:text-[15px]">
            We help companies design and execute efficient in-house recycling
            and waste recovery systems.
          </p>
        </div>
        <div>
          <h3 className="font-catamaran text-[20px] mb-[15px]">
            This includes:
          </h3>
          <ul className="font-raleway">
            <li className="border-b-[1px] border-[#000000] py-[15px]">
              Workplace waste segregation systems
            </li>
            <li className="border-b-[1px] border-[#000000] py-[15px]">
              Collection, sorting, and aggregation pathways
            </li>
            <li className="border-b-[1px] border-[#000000] py-[15px]">
              Plastic, paper, textile, and e-waste solutions
            </li>
            <li className="border-b-[1px] border-[#000000] py-[15px]">
              Employee sustainability engagement activities
            </li>
            <li className="border-b-[1px] border-[#000000] py-[15px]">
              Reporting and impact tracking
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default page;
