import React from "react";
import Breadcrumbs from "../../components/program-header/BreadCrumbs";

const page = () => {
  return (
    <>
      <header className="pt-[130px] pb-[60px] relative bg-[#DAD7CD] text-[#000000]">
        {/* Content */}
        <div className="relative z-10 w-[90%] mx-auto flex flex-col justify-center items-center">
          <h2 className="font-catamaran text-[35px] font-bold mb-[5px] tracking-[1.5px]">
            Partners & Collaborators
          </h2>
          <Breadcrumbs
            paths={[
              { label: "Home", href: "/" },
              {
                label: "Partners & Collaborators",
                href: "/partners-and-collaborators"
              }
            ]}
          />
        </div>
      </header>
    </>
  );
};

export default page;
