import React from "react";
import Breadcrumbs from "../../components/BreadCrumbs";
import Waitlist from "../../components/register/Waitlist";

const page = () => {
  return (
    <>
      <header className="pt-[130px] pb-[60px] relative bg-[#ffffff] text-[#000000]">
        <div className=" relative z-10 w-[90%] mx-auto flex flex-col justify-center items-center">
          <h2 className="font-catamaran text-[35px] font-bold mb-[5px] tracking-[1.5px]">
            Our Waitlist
          </h2>
          <Breadcrumbs
            paths={[
              { label: "Home", href: "/" },
              {
                label: "Join The Waitlist",
                href: "#"
              }
            ]}
          />
        </div>
      </header>
      {/* End Of Header */}
      {/* End Of Header */}

      <Waitlist />
    </>
  );
};

export default page;
