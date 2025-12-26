import React from "react";

const Breadcrumbs = ({ paths }) => {
  return (
    <section className="font-raleway text-[17px] text-[#000000]">
      <ol className="flex space-x-[6px]">
        {paths.map((path, index) => (
          <li key={index} className="flex items-center">
            {index !== 0 && <span className="mx-[4px] text-[#000000]">/</span>}
            <a href={path.href} className="hover:text-[#008000]">
              {path.label}
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Breadcrumbs;
