import React from "react";
import Header from "../../../components/about-header/Header";
import Partners from "../../../components/Partners";
import PartnersForm from "../../../components/register/Partners";

const page = () => {
  return (
    <>
      <Header
        title="Partners and Collaborators"
        paths={[
          { label: "Home", href: "/" },
          {
            label: "Partners and collaborators",
            href: "#"
          }
        ]}
      />
      {/* End of header */}
      {/* End of header */}
      <section>
        <p className="font-raleway rounded-[10px] w-[60%] max-[700px]:w-[90%] mx-auto my-[100px] text-[18px] max-[700px]:text-[15px] text-[#ffffff] bg-[#3C2115] p-[30px] text-center">
          Over the years, PlastiBuild Creative Solutions Limited has grown
          through meaningful collaborations with organizations that share our
          vision for a cleaner, more innovative, and more inclusive future. Our
          work is strengthened by a diverse network of international NGOs,
          development agencies, government institutions, academic bodies, and
          private-sector partners who believe in the power of climate innovation
          and circular economy solutions.
        </p>
      </section>
      {/* PARTNERS */}
      <section className="w-[90%] mx-auto  mb-[150px]">
        <div className="w-[60%] max-[700px]:w-[100%] mx-auto mb-[50px] text-center">
          <h2 className="font-catamaran text-[35px] max-[700px]:text-[30px] text-[#262626] leading-[1.2] mb-[10px]">
            International & Development Partners
          </h2>
          <p className="font-raleway text-[17px] max-[700px]:text-[15px] text-[#000000]">
            Our global impact is anchored by strong partnerships with leading
            development organizations.
          </p>
        </div>
        {/* End of partner top */}
        <Partners dataset="partnersData1" />
      </section>
      {/* End of partner 1 */}
      {/* End of partner 1 */}
      <section className="w-[90%] mx-auto  mb-[150px]">
        <div className="w-[60%] max-[700px]:w-[100%] mx-auto mb-[50px] text-center">
          <h2 className="font-catamaran text-[35px] max-[700px]:text-[30px] text-[#262626] leading-[1.2] mb-[10px]">
            Academic & Research Institutions
          </h2>
          <p className="font-raleway text-[17px] max-[700px]:text-[15px] text-[#000000]">
            We collaborate closely with universities and research bodies that
            serve as hubs for climate education, experimentation, and talent
            development.
          </p>
        </div>
        {/* End of partner top */}
        <Partners dataset="partnersData2" />
      </section>
      {/* End of partner 2 */}
      {/* End of partner 2 */}
      <section className="w-[90%] mx-auto  mb-[150px]">
        <div className="w-[60%] max-[700px]:w-[100%] mx-auto mb-[50px] text-center">
          <h2 className="font-catamaran text-[35px] max-[700px]:text-[30px] text-[#262626] leading-[1.2] mb-[10px]">
            Government & Public-Sector Partners
          </h2>
          <p className="font-raleway text-[17px] max-[700px]:text-[15px] text-[#000000]">
            Our work aligns with public sector goals for environmental
            sustainability, youth empowerment, technology adoption, and job
            creation.
          </p>
        </div>
        {/* End of partner top */}
        <Partners dataset="partnersData3" />
      </section>
      {/* End of partner 3*/}
      {/* End of partner 3 */}
      <section className="w-[90%] mx-auto  mb-[150px]">
        <div className="w-[60%] max-[700px]:w-[100%] mx-auto mb-[50px] text-center">
          <h2 className="font-catamaran text-[35px] max-[700px]:text-[30px] text-[#262626] leading-[1.2] mb-[10px]">
            Corporate & Philanthropic Support
          </h2>
          <p className="font-raleway text-[17px] max-[700px]:text-[15px] text-[#000000]">
            Our projects have also benefited from trusted corporate and
            philanthropic partners committed to sustainability and community
            transformation.
          </p>
        </div>
        {/* End of partner top */}
        <Partners dataset="partnersData4" />
      </section>
      {/* End of partner 4*/}
      {/* End of partner 4 */}
      <PartnersForm />
    </>
  );
};

export default page;
