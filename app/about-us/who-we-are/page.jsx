import React from "react";
import Image from "next/image";
import Header from "../../../components/about-header/Header";

const page = () => {
  return (
    <>
      <Header
        title="Who We Are"
        paths={[
          { label: "Home", href: "/" },
          {
            label: "Who we are",
            href: "#"
          }
        ]}
      />
      {/* End of header */}
      {/* End of header */}
      <section className="w-[90%] mx-auto my-[100px]">
        <h2 className="font-catamaran text-[35px] text-[#262626] w-[80%] mx-auto text-center leading-[1.2]">
          PlastiBuild Creative Solutions Limited is a climate-tech and
          sustainable manufacturing company
        </h2>
        <Image
          src="/images/plasti1.jpg"
          alt="logo"
          width={230}
          height={230}
          unoptimized
          className="w-[100%] h-[450px] object-cover object-top my-[50px]"
        />
        <p className="font-raleway text-[17px] text-[#000000]">
          We transform how communities manage waste, create value, and build
          climate resilience. We exist to solve one of Africa’s most pressing
          environmental challenges—urban waste pollution—by converting discarded
          materials into functional products, green technologies, and empowering
          learning experiences that unlock economic opportunity.
          <br />
          <br /> At our core, we are innovators, makers, and problem-solvers. We
          design and deploy sustainable waste management systems, build smart
          upcycling technologies, and run circular economy programs that turn
          plastic, textile, wood, and organic waste into high-quality,
          market-ready solutions. From eco-friendly footwear and accessories to
          modular furniture, building materials, low-carbon products, and
          community recycling tools, we demonstrate how waste can become a
          powerful resource for climate action, job creation, and local
          development.
          <br />
          <br /> We do this through a combination of sustainable manufacturing
          technologies, digital upcycling hubs, and makerspaces that serve as
          training, production, and innovation centers. Our hubs bring together
          young people, students, artisans, women, and community members to
          learn practical green skills—taking climate literacy beyond theory
          into hands-on, collaborative problem-solving. Through our structured
          programs, bootcamps, digital courses, and expert-led workshops,
          participants learn how to design, prototype, and build functional
          hardware and software climate solutions that solve real local
          challenges.
        </p>
      </section>
      <section className="w-[90%] mx-auto flex justify-between">
        <Image
          src="/images/plasti9.jpg"
          alt="founder and colleagues"
          width={230}
          height={230}
          unoptimized
          className="w-[48%] h-[450px] object-cover object-top"
        />
        <p className="font-raleway w-[52%] h-[450px] mb-[100px] text-[#ffffff] text-[17px] bg-[#000000] p-[50px]">
          Beyond upcycling and training, PlastiBuild also delivers
          waste-to-energy innovations, developing low-emission briquettes,
          clean-burning materials, and community energy solutions that optimize
          organic and sawdust waste streams. We work with households, small
          businesses, and local institutions to create cleaner, safer, and more
          affordable energy alternatives.
          <br />
          <br /> Our consultancy services support organizations, schools, and
          governments in designing circular systems, sustainability strategies,
          recycling programs, and climate-smart product development. We provide
          end-to-end guidance—from research and technology adaptation to
          prototyping, manufacturing, and impact evaluation.
        </p>
      </section>
      <section className="w-[90%] mx-auto mb-[100px]">
        <p className="font-raleway text-[17px] text-[#000000]">
          We are driven by a simple belief: waste is not a problem; it is an
          untapped resource waiting to be transformed into opportunity. Our
          mission is to build climate-smart communities where young people can
          innovate, collaborate, and create sustainable livelihoods while
          contributing to a cleaner and more inclusive world. <br />
          <br />
          PlastiBuild Creative Solutions is more than a company—we are building
          a movement of circular innovators committed to rethinking waste,
          redefining sustainability, and redesigning the future of African
          climate solutions.
        </p>
      </section>
    </>
  );
};

export default page;
