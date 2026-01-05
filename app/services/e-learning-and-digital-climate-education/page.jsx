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
            label: "E-learning & digital climate education",
            href: "#"
          }
        ]}
      />
      {/* End of header */}
      {/* End of header */}
      <section className="w-[90%] mx-auto mb-[150px]">
        <div className="w-[70%] mx-auto text-center mb-[50px] max-[700px]:w-[100%] ">
          <h2 className="font-catamaran text-[35px] max-[700px]:text-[30px] leading-[1.2] mb-[10px]">
            E-Learning & Digital Climate Education
          </h2>
          <p className="font-raleway text-[17px] max-[700px]:text-[15px]">
            Our digital learning ecosystem makes climate literacy accessible to
            everyone — across borders and learning levels.
          </p>
        </div>
        <div>
          <h3 className="font-catamaran text-[20px] mb-[15px]">We offer:</h3>
          <ul className="font-raleway">
            <li className="border-b-[1px] border-[#000000] py-[15px]">
              Self-paced e-learning courses
            </li>
            <li className="border-b-[1px] border-[#000000] py-[15px]">
              Virtual masterclasses and live training sessions
            </li>
            <li className="border-b-[1px] border-[#000000] py-[15px]">
              Digital bootcamps for climate innovators
            </li>
            <li className="border-b-[1px] border-[#000000] py-[15px]">
              Micro-learning videos and certification programs
            </li>
            <li className="border-b-[1px] border-[#000000] py-[15px]">
              Access to our Climate-Tech Digital Academy
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default page;
