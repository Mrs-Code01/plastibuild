import React from "react";

const Breadcrumbs = ({ paths }) => {
  return (
    <section className="font-raleway text-[17px] max-[700px]:text-[14px] text-[#ffffff] text-center">
      <ol className="flex space-x-[6px]">
        {paths.map((path, index) => (
          <li key={index} className="flex items-center">
            {index !== 0 && <span className="mx-[4px] text-[#ffffff]">/</span>}
            <a href={path.href}>{path.label}</a>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Breadcrumbs;
