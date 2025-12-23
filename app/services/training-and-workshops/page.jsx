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
            label: "Training & Workshops",
            href: "#"
          }
        ]}
      />
      {/* End of header */}
      {/* End of header */}
      <section className="w-[90%] mx-auto mb-[150px]">
        <div className="w-[70%] mx-auto text-center mb-[50px]">
          <h2 className="font-catamaran text-[35px]">Training & Workshops</h2>
          <p className="font-raleway text-[17px]">
            We deliver high-impact, hands-on training programs that build
            practical green skills for individuals, schools, corporate teams,
            and community groups.
          </p>
        </div>
        <div>
          <h3 className="font-catamaran text-[20px] mb-[15px]">
            Our training modules include:
          </h3>
          <ul className="font-raleway">
            <li className="border-b-[1px] border-[#000000] py-[15px]">
              Waste-to-wealth upcycling workshops
            </li>
            <li className="border-b-[1px] border-[#000000] py-[15px]">
              Climate literacy and circular economy education
            </li>
            <li className="border-b-[1px] border-[#000000] py-[15px]">
              Green product design and prototyping
            </li>
            <li className="border-b-[1px] border-[#000000] py-[15px]">
              School-based environmental sustainability programs
            </li>
            <li className="border-b-[1px] border-[#000000] py-[15px]">
              Corporate ESG and climate strategy workshops
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default page;
