import React from "react";
import Breadcrumbs from "../BreadCrumbs";

const Header = ({ title, paths }) => {
  return (
    <>
      <header className="pt-[130px] pb-[60px] relative bg-[#DAD7CD] text-[#000000]">
        <div className="relative z-10 w-[90%] mx-auto flex flex-col justify-center items-center">
          <h2 className="font-catamaran text-[35px] font-bold mb-[5px] max-[700px]:text-[30px] leading-[1.2]">
            {title}
          </h2>
          <Breadcrumbs paths={paths} />
        </div>
      </header>
      {/* End Of Header */}
      {/* End Of Header */}
      <section>
        <p className="font-raleway rounded-[10px] w-[60%] mx-auto my-[100px] text-[18px] text-[#ffffff] bg-[#3C2115] p-[30px] text-center max-[700px]:text-[15px] max-[700px]:w-[90%]">
          At PlastiBuild Creative Solutions, we provide end-to-end
          sustainability, circular economy, and climate-tech solutions that help
          organisations, communities, and innovators transition toward a cleaner
          and more resilient future. Our services cut across training,
          consulting, digital solutions, product innovation, and waste-to-value
          systems.
        </p>
      </section>
    </>
  );
};

export default Header;
