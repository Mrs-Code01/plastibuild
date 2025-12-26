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
    </>
  );
};

export default Header;
