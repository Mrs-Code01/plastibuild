import React from "react";
import Image from "next/image";
import Header from "../../../components/program-header/Header";

const page = () => {
  return (
    <>
      <Header
        title="Programs & Projects"
        paths={[
          { label: "Home", href: "/" },
          {
            label: "School and Youth Programs",
            href: "#"
          }
        ]}
      />
      {/* End of header */}
      {/* End of header */}
      <section className="w-[90%] mx-auto mb-[150px]">
        <div className="w-[70%] mx-auto text-center mb-[50px]">
          <h2 className="font-catamaran text-[35px]">
            School & Training Programs
          </h2>
          <p className="font-raleway text-[17px]">
            Our Digital Waste Upcycling Hub divide this program into four (4)
            categories
          </p>
        </div>
        <div className="flex justify-between mb-[100px]">
          <Image
            src="/images/plasti15.jpg"
            alt="Digital Waste Upcycling Hub"
            width={200}
            height={200}
            className="w-[48%] h-[400px] object-cover object-top rounded-[10px]"
            unoptimized
          />
          <div className="w-[48%]">
            <h3 className="font-catamaran text-[30px] leading-[1.1] mb-[10px]">
              Climate Innovators Bootcamp
            </h3>
            <p className="font-raleway text-[17px]">
              A practical, project-based program that teaches young people
              climate literacy, green design, circular economy skills, basic
              engineering, and climate-tech innovation. <br />
              <br />
              Participants work in teams to co-create functional hardware or
              software solutions while learning to prototype using our
              makerspace and digital hub.
            </p>
          </div>
        </div>
        {/* Category 1 */}
        <div className="flex justify-between mb-[100px]">
          <div className="w-[48%]">
            <h3 className="font-catamaran text-[30px] leading-[1.1] mb-[10px]">
              EcoInnovators Project
            </h3>
            <p className="font-raleway text-[17px]">
              An outreach initiative delivered across schools and youth centers,
              introducing students to recycling, creative reuse, and
              environmental leadership. <br />
              <br />
              The program combines storytelling, hands-on upcycling, and digital
              learning to build early climate innovation skills.
            </p>
          </div>
          <Image
            src="/images/plasti18.jpg"
            alt="Students learning to build"
            width={200}
            height={200}
            className="w-[48%] h-[400px] object-cover object-top rounded-[10px]"
            unoptimized
          />
        </div>
        {/* Category 2 */}
        <div className="flex justify-between mb-[100px]">
          <Image
            src="/images/plasti16.png"
            alt="Students learning to build"
            width={200}
            height={200}
            className="w-[48%] h-[400px] object-cover object-top rounded-[10px]"
            unoptimized
          />
          <div className="w-[48%]">
            <h3 className="font-catamaran text-[30px] leading-[1.1] mb-[10px]">
              Green Innovators Program (Bariga Community)
            </h3>
            <p className="font-raleway text-[17px]">
              A community-focused training program teaching young people how to
              transform waste into functional products such as slippers, tiles,
              bags, and accessories. <br />
              <br />
              The program has empowered dozens of youths in Bariga with
              practical green entrepreneurship skills.
            </p>
          </div>
        </div>
        {/* Category 3 */}

        <div className="flex justify-between mb-[100px]">
          <div className="w-[48%]">
            <h3 className="font-catamaran text-[30px] leading-[1.1] mb-[10px]">
              Rotary Youth Leadership Academy – Waste to Wealth Trainings
            </h3>
            <p className="font-raleway text-[17px]">
              Delivered in partnership with Rotary, this training program equips
              young leaders with practical competencies in recycling, upcycling,
              and climate-smart product design. <br />
              <br />
              Participants learn fabrication, team collaboration,
              problem-solving, and project leadership.
            </p>
          </div>
          <Image
            src="/images/plasti19.jpg"
            alt="Students learning to build"
            width={200}
            height={200}
            className="w-[48%] h-[400px] object-cover object-top rounded-[10px]"
            unoptimized
          />
        </div>
        {/* Category 4 */}
      </section>
    </>
  );
};

export default page;
