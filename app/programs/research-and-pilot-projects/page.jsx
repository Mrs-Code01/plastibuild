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
            label: "Research and Pilot Projects",
            href: "#"
          }
        ]}
      />
      {/* End of header */}
      {/* End of header */}
      <section className="w-[90%] mx-auto mb-[150px]">
        <div className="w-[70%] mx-auto text-center mb-[50px] max-[700px]:w-[100%]">
          <h2 className="font-catamaran text-[35px] max-[700px]:text-[30px] leading-[1.2] mb-[10px]">
            Research & Pilot Projects
          </h2>
          <p className="font-raleway text-[17px] max-[700px]:text-[15px]">
            We conduct applied research that bridges waste management,
            climate-tech innovation, and practical solutions for underserved
            communities.
          </p>
        </div>
        <div className="flex justify-between flex-wrap  flex-col gap-y-[30px]">
          <div className="w-[48%] border-[1px] text-[#000000] rounded-[10px] p-[30px] max-[700px]:w-[100%]">
            <h3 className="font-catamaran text-[30px] leading-[1.1] mb-[10px] max-[700px]:text-[25px]">
              Sawdust to Fire-Bricks & Briquettes Pilot
            </h3>
            <p className="font-raleway text-[17px] max-[700px]:text-[15px]">
              A pilot in Bariga exploring how abundant sawmill waste can be
              transformed into clean, decarbonized briquettes and fire-bricks
              for households, street vendors, and small businesses. The project
              advances cleaner cooking and reduces deforestation.
            </p>
          </div>
          <div className="w-[48%] border-[1px] text-[#000000] rounded-[10px] p-[30px] max-[700px]:w-[100%]">
            <h3 className="font-catamaran text-[30px] leading-[1.1] mb-[10px] max-[700px]:text-[25px]">
              Plastogas Project — Yaba College of Technology (YABATECH)
            </h3>
            <p className="font-raleway text-[17px] max-[700px]:text-[15px]">
              A research collaboration converting plastic waste into synthetic
              gas (syngas) for energy use. The Plastogas project demonstrates
              how pyrolysis and small-scale thermochemical systems can turn
              problematic waste into alternative fuel solutions while cutting
              emissions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
