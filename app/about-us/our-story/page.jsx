import React from "react";
import Image from "next/image";
import Header from "../../../components/about-header/Header";

const page = () => {
  return (
    <>
      <Header
        title="Our Story"
        paths={[
          { label: "Home", href: "/" },
          {
            label: "Our story",
            href: "#"
          }
        ]}
      />
      {/* End of header */}
      {/* End of header */}
      <section className="w-[90%] mx-auto flex justify-between my-[100px]">
        <Image
          src="/images/ourstory/plasti2.png"
          alt="founder and colleagues"
          width={230}
          height={230}
          unoptimized
          className="w-[48%] object-cover object-top"
        />
        <div className="w-[52%] pl-[50px] text-[#000000]">
          <h2 className="font-catamaran text-[35px] text-[#262626] leading-[1.2] mb-[20px]">
            Our Story: How a Backyard Dream in Bariga Sparked a Climate-Tech
            Movement
          </h2>
          <p className="font-raleway text-[17px] ">
            PlastiBuild Creative Solutions was born from the journey of a young
            innovator, Amidu, who grew up in the vibrant but heavily underserved
            community of Bariga, Lagos. From an early age, Amidu saw what many
            others had learned to ignore—mountains of waste choking the streets,
            plastics filling drainages, smoky dumpsites darkening the sky, and
            the daily reality of a community struggling under the weight of poor
            waste management. But while others saw a problem, Amidu saw
            potential.
            <br />
            <br /> As a teenager, he became fascinated with the idea that waste
            could be transformed—reshaped into something useful, beautiful, and
            sustainable. With no resources and no fancy lab, he began collecting
            discarded plastics, textiles, and wood scraps from neighborhood
            dumps and sawmills. His curiosity grew into a passion, and that
            passion would soon grow into a vision far larger than he imagined.
          </p>
        </div>
      </section>
      <section className="w-[90%] mx-auto mb-[100px]">
        <p className="font-raleway text-[17px] text-[#000000]">
          Behind his family home in Bariga sat a small, rough, makeshift
          space—barely more than an open shed patched together with wood and
          zinc sheets. Most people wouldn’t look at it twice. But for Amidu, it
          became his very first innovation studio. With only a few basic tools
          and a burning drive to experiment, he spent countless nights melting,
          molding, stitching, and shaping waste into new prototypes. Many
          attempts failed; some caught fire; others broke apart. But every
          failure pushed him to learn, adapt, and try again. <br />
          <br />
          People in the community soon began noticing the young man “turning
          waste into amazing things.” Children gathered to watch. Local artisans
          stopped by out of curiosity. A few young people asked if they could
          learn, and Amidu welcomed them in. What started as a one-man
          experiment quietly grew into a community of makers—individuals
          inspired by the possibility of creating value from the very waste that
          surrounded them.
          <br />
          <br />
          As the vision expanded, so did the impact. From that tiny backyard
          workshop emerged the foundation of what would become PlastiBuild
          Creative Solutions Limited—a climate-tech startup committed to
          sustainable manufacturing, waste-to-energy innovations, green skills
          development, and circular economy solutions.
        </p>
      </section>
      <section className="w-[90%] mx-auto flex justify-between">
        <Image
          src="/images/plasti3.jpg"
          alt="award"
          width={230}
          height={230}
          unoptimized
          className="w-[48%] h-[450px] object-cover object-top"
        />
        <p className="font-raleway w-[52%] h-[450px] mb-[100px] text-[#ffffff] text-[17px] bg-[#000000] p-[50px]">
          Today, PlastiBuild stands as one of Nigeria’s promising climate-tech
          enterprises, running upcycling hubs, makerspaces, training programs,
          and product innovation labs that empower young people, women, and
          communities to turn waste into livelihood opportunities. The company
          now partners with organizations across Nigeria, designing
          climate-smart products and delivering sustainable solutions with
          national relevance. <br />
          <br />
          Yet, no matter how far PlastiBuild grows, its roots remain firmly in
          Bariga—where a young boy’s imagination, a backyard workshop, and a
          belief that waste is a resource sparked a movement redefining the
          future of sustainability in Nigeria.
        </p>
      </section>
      <section className="w-[40%] mx-auto mb-[100px]">
        <h2 className="font-catamaran text-[25px] text-[#262626] leading-[1.2]  text-center">
          Meet Our Founder: Amidu
        </h2>
        <p className="font-raleway text-[17px] italic text-center mb-[10px]">
          CEO of PlastiBuild Creative Solutions
        </p>
        <Image
          src="/images/plasti7.jpg"
          alt="founder"
          width={230}
          height={230}
          unoptimized
          className="w-[100%] h-[400px] object-cover object-center"
        />
      </section>
    </>
  );
};

export default page;
