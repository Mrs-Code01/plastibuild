import React from "react";
import Breadcrumbs from "../BreadCrumbs";

const Header = ({ title, paths }) => {
  return (
    <>
      <header className="pt-[130px] pb-[60px] relative bg-[#DAD7CD] text-[#000000]">
        <div className="relative z-10 w-[90%] mx-auto flex flex-col justify-center items-center">
          <h2 className="font-catamaran text-[35px] font-bold mb-[5px] tracking-[1.5px]">
            {title}
          </h2>
          <Breadcrumbs paths={paths} />
        </div>
      </header>
      {/* End Of Header */}
      {/* End Of Header */}
      <section>
        <p className="font-raleway  rounded-[10px] w-[60%] mx-auto my-[100px] text-[18px] text-[#ffffff] bg-[#3C2115] p-[30px] text-center">
          At PlastiBuild Creative Solutions, our projects and programs are
          designed to drive circular economy innovation, climate education, and
          community transformation. We combine hands-on upcycling, digital
          learning, research, and youth empowerment to turn waste into
          opportunity and inspire the next generation of green innovators. Below
          is an overview of our flagship initiatives.
        </p>
      </section>
    </>
  );
};

export default Header;
