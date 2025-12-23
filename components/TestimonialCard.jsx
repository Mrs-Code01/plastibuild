import React from "react";

const TestimonialCard = ({ image, quote, name, role, isCenter = false }) => {
  return (
    <div
      className={`bg-white rounded-lg p-6 md:p-8 shadow-xl transition-all duration-500 ${
        isCenter
          ? "opacity-100 scale-100 z-10"
          : "opacity-60 scale-90 z-0 hidden md:block"
      }`}
      style={{ width: "100%", maxWidth: "350px" }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-6 -mt-12 md:-mt-16">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[black] overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <blockquote className="text-[#333333] italic mb-6 leading-relaxed text-sm md:text-base">
          "{quote}"
        </blockquote>

        <h4 className="text-[#222222] font-semibold text-base md:text-lg">
          {name}
        </h4>
        <p className="text-[green] text-xs md:text-sm">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
