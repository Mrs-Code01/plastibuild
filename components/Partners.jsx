import Image from "next/image";
import { partnersCollections } from "../lib/data/partnersData";

export default function Partners({ dataset }) {
  const partners = partnersCollections[dataset];

  return (
    <div className="flex justify-between flex-wrap w-[100%] gap-y-[30px]">
      {partners.map((partner, index) => (
        <div
          key={index}
          className="w-[23%] rounded-[10px] p-[30px] shadow-[0_4px_10px_rgba(0,0,0,0.25)] bg-[#ffffff] text-center"
        >
          <Image
            src={partner.src}
            alt={partner.alt}
            width={100}
            height={100}
            unoptimized
            className="h-[100px] w-[100px] object-cover mx-auto"
          />
          <h3 className="font-catamaran text-[18px] text-[#262626] my-[15px] leading-[1.2]">
            {partner.title}
          </h3>
          <p className="font-raleway text-[15px] text-[#000000]">
            {partner.description}
          </p>
        </div>
      ))}
    </div>
  );
}
