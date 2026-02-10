"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Testimonial from "@/components/TestimonialSection";
import Chat from "@/components/Chat";
import FadeSlider from "@/components/FadeSlider";
import Waitlist from "@/components/register/Waitlist";

const logos = [
  "/images/logos/logo1.png",
  "/images/logos/logo3.png",
  "/images/logos/logo37.png",
  "/images/logos/logo5.png",
  "/images/logos/logo9.png",
  "/images/logos/logo18.png",
  "/images/logos/logo24.png",
  "/images/logos/logo34.png",
];

const page = () => {
  const [openId, setOpenId] = useState(1);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const openModal = () => setIsWaitlistOpen(true);
  const closeModal = () => setIsWaitlistOpen(false);

  const faqs = [
    {
      id: 1,
      question: "What waste management services does PlastiBuild offer?",
      answer:
        "PlastiBuild provides end-to-end waste management solutions, including waste audits, collection system design, segregation frameworks, and material recovery plans. We transform plastic and other recyclables from waste streams into usable materials for circular manufacturing, reducing landfill dependency, preventing open burning, and supporting climate action.",
    },
    {
      id: 2,
      question: " What advisory services does PlastiBuild provide?",
      answer:
        "We offer consultancy on circular economy adoption, ESG integration, sustainable production, and environmental strategy. This includes lifecycle assessments, circular product design, policy alignment, and practical roadmaps for corporates, NGOs, and government agencies to achieve measurable sustainability outcomes.",
    },
    {
      id: 3,
      question: "What training programs does PlastiBuild offer?",
      answer:
        "PlastiBuild delivers tailored workshops, seminars, and training sessions on ESG reporting, climate resilience, circular economy, and environmental compliance. These programs target corporates, NGOs, academic institutions, and government agencies, equipping teams with the skills to implement climate-smart decision-making and sustainability strategies.",
    },
    {
      id: 4,
      question: "What is PlastiBuild DigiHub?",
      answer:
        "The DigiHub is our digital platform that complements our physical hubs. It connects waste pickers, artisans, recyclers, green businesses, and corporates across the circular economy. The platform integrates AI, IoT, blockchain, and data analytics to digitize waste management, carbon tracking, and sustainable manufacturing workflows.",
    },
    {
      id: 5,
      question:
        "What products and services are part of the waste-to-value ecosystem?",
      answer:
        "Our ecosystem converts waste into eco-friendly products like sustainable footwear (EcoFeet), green furniture, and eco-interiors. The DigiHub tracks the waste-to-product journey and monetizes it via carbon credits, token rewards, and marketplace sales, creating income opportunities for communities, artisans, and green SMEs.",
    },
  ];

  return (
    <>
      <main className="relative min-h-screen overflow-hidden py-[70px] px-[5%] flex justify-center items-center max-[1099px]:mt-[-10px]">
        {/* Animated Background */}
        <div
          className="absolute top-[-220px] inset-0 bg-cover bg-center opacity-4 animated-bg w-[100%] h-[1000px]"
          style={{ backgroundImage: "url('/images/abstract.png')" }}
        ></div>

        {/* Content */}
        <div className="relative z-20 text-center pt-[70px]">
          <h1 className="font-catamaran text-[3.3rem] font-bold max-[670px]:text-[2.5rem] leading-[1.1] mb-[15px]">
            Welcome to PlastiBuild
          </h1>
          <p className="font-raleway w-[60%] mx-auto text-[1.2rem] max-[670px]:text-[1rem] max-[670px]:w-[90%]">
            We are a climate-tech and sustainable manufacturing company
            transforming waste into value through circular innovation, green
            technologies, and community empowerment across Africa
          </p>
          <div className="mt-[30px]">
            <button
              onClick={openModal}
              className=" font-raleway text-[#ffffff] text-[1.1rem] w-[170px] bg-[#008000] rounded-full py-[12px] mr-[20px] cursor-pointer max-[420px]:w-[240px] max-[420px]:mr-[0px] max-[420px]:mb-[20px]"
            >
              Join Waitlist
            </button>
            <Waitlist isOpen={isWaitlistOpen} onClose={closeModal} />
            <Link
              href="/about-us"
              className=" font-raleway w-[170px] border border-[#000000] rounded-full py-[12px] inline-block max-[420px]:w-[240px]"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Animation Styles */}
        <style>
          {`
      .animated-bg {
        animation: slowZoom 5s ease-in-out infinite alternate;
      }

      @keyframes slowZoom {
        0% {
          transform: scale(1) translateY(0px);
        }
        100% {
          transform: scale(1.05) translateY(-10px);
        }
      }
    `}
        </style>
      </main>

      {/* End of hero section */}
      {/* End of hero section */}
      <section className="my-[130px]">
        <h2 className="font-catamaran text-[35px] max-[1050px]:text-[33px] max-[750px]:text-[28px]  text-center mb-[40px] text-[#292929]">
          Trusted By
        </h2>
        <div className="relative overflow-hidden">
          <div className="marquee flex w-[200%]">
            {/* First set */}
            <div className="flex">
              {logos.map((src, i) => (
                <div
                  key={`logo-a-${i}`}
                  className="w-[200px] h-[200px] flex-shrink-0 flex justify-center items-center mx-3"
                >
                  <Image
                    src={src}
                    alt="client logo"
                    width={150}
                    height={150}
                    unoptimized
                  />
                </div>
              ))}
            </div>
            {/* Duplicate set */}
            <div className="flex">
              {logos.map((src, i) => (
                <div
                  key={`logo-b-${i}`}
                  className="w-[200px] flex-shrink-0 flex justify-center items-center mx-3"
                >
                  <Image
                    src={src}
                    alt="client logo"
                    width={130}
                    height={130}
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Local keyframes + animation */}
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .marquee {
            animation: marquee 15s linear infinite;
          }
        `}</style>
      </section>
      {/* End of partners section */}
      {/* End of partners section */}

      <section className="w-[90%] mx-auto mb-[130px]">
        <div className="w-[90%] mx-auto mb-[50px] text-center text-[#262626]">
          <h2 className="font-catamaran text-[35px] mb-[15px] max-[1050px]:text-[33px] max-[750px]:text-[28px]">
            Who We Are?
          </h2>
          <p className="w-[100%] mx-auto font-raleway text-[17px] max-[1050px]:text-[16px]">
            PlastiBuild Creative Solutions Limited is a climate-tech and
            sustainable manufacturing company transforming how communities
            manage waste, create value, and build climate resilience. We exist
            to solve one of Africa’s most pressing environmental
            challenges—urban waste pollution—by converting discarded materials
            into functional products, green technologies, and empowering
            learning experiences that unlock economic opportunity.
          </p>
        </div>
        <div className="w-[100%] flex justify-between flex-wrap items-start max-[650px]:flex-col-reverse gap-y-[70px]">
          <div className="w-[40%] flex justify-between flex-wrap gap-y-[20px] max-[650px]:w-[100%]">
            <h3 className="font-catamaran w-[48%] border-[1px] h-[150px] text-[25px] max-[900px]:text-[20px] rounded-[10px] flex justify-center items-center">
              Makers
            </h3>
            <h3 className="font-catamaran w-[48%] border-[1px] h-[150px] text-[25px] max-[900px]:text-[20px] rounded-[10px] flex justify-center items-center">
              Innovators
            </h3>
            <h3 className="font-catamaran w-[100%] border-[1px] h-[150px] text-[25px] rounded-[10px max-[900px]:text-[20px] flex justify-center items-center">
              Problem Solvers
            </h3>
          </div>
          <Image
            src="/images/plastibuildabout.png"
            alt="plastibuildhero"
            width={200}
            height={150}
            className="w-[55%] max-[650px]:w-[100%]"
            unoptimized
          />
        </div>
        <Link
          href="/about-us/who-we-are"
          className="font-raleway text-[19px] w-[170px] mx-auto text-center bg-[#008000] text-[#ffffff] block rounded-full py-[10px] mt-[100px] max-[750px]:w-[170px] max-[750px]:text-[16px]"
        >
          View More
        </Link>
      </section>
      {/* End of who we are */}
      {/* End of who we are */}
      <section className="w-[90%] mx-auto mb-[130px]">
        <div className="w-[90%] mx-auto mb-[50px] text-center text-[#262626]">
          <h2 className="font-catamaran text-[35px] mb-[15px] max-[1050px]:text-[33px] max-[750px]:text-[28px]">
            Our Services
          </h2>
          <p className="font-raleway text-[17px] max-[1050px]:text-[16px]">
            At PlastiBuild Creative Solutions, we provide end-to-end
            sustainability, circular economy, and climate-tech solutions that
            help organisations, communities, and innovators transition toward a
            cleaner and more resilient future. Our services cut across training,
            consulting, digital solutions, product innovation, and
            waste-to-value systems.
          </p>
        </div>

        {/* Flex container wrapping all service cards */}

        <section className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE (IMAGE SLIDER) */}
          <FadeSlider />

          {/* RIGHT SIDE (TEXT) */}
          <div>
            <h2 className="font-catamaran text-[2rem] font-bold text-[#008000] mb-[10px]">
              PlastiBuild Services
            </h2>

            <ul className="font-raleway text-[1rem]">
              <li className="mb-[7px]">&bull;&nbsp;Training and Workshops</li>
              <li className="mb-[7px]">
                &bull;&nbsp;Circularity and Sustainability Consulting
              </li>
              <li className="mb-[7px]">
                &bull;&nbsp;Corporate Recycling Programs
              </li>
              <li className="mb-[7px]">
                &bull;&nbsp;Industrial Waste Management Solutions
              </li>
              <li className="mb-[7px]">
                &bull;&nbsp;Technology and Digital Solutions
              </li>
              <li className="mb-[7px]">
                &bull;&nbsp;Circular Product and Climate-Tech Design
              </li>
              <li className="mb-[7px]">
                &bull;&nbsp;E-Learning and Digital Climate Education
              </li>
            </ul>

            <Link
              href="/services"
              className="font-raleway w-[170px] mx-auto mt-6 px-6 py-[10px] border border-[#008000] text-[#008000] rounded-full hover:bg-[#008000] hover:text-white transition cursor-pointer inline-block text-center"
            >
              View More
            </Link>
          </div>
        </section>
      </section>
      {/* End of services */}
      {/* End of services */}
      <section className="w-[90%] mx-auto mb-[130px] flex justify-between flex-wrap gap-y-[50px]">
        <div className="w-[40%] max-[700px]:w-[100%] text-center">
          <h2 className="font-catamaran text-[40px] text-[#262626] leading-[1.1] max-[1050px]:text-[33px] max-[750px]:text-[30px]">
            Download our app for better experience
          </h2>
          <p className="font-raleway text-[17px] text-[#000000] my-[20px] max-[1050px]:text-[16px]">
            Watch out for our google playstore and our appstore to access more
            features
          </p>
          <div className="w-[100%] flex mb-[20px]">
            <Image
              src="/images/playstore.png"
              alt="playstore"
              width={200}
              height={100}
              className="w-[48%]"
              unoptimized
            />
            <Image
              src="/images/appstore.png"
              alt="appstore"
              width={200}
              height={200}
              className="w-[48%]"
              unoptimized
            />
          </div>
          <Image
            src="/images/qr.png"
            alt="qrcode"
            width={100}
            height={100}
            className="w-[100px] mx-auto"
            unoptimized
          />
        </div>
        <Image
          src="/images/app.png"
          alt="phone mockup"
          width={200}
          height={200}
          className="w-[55%] h-[500px] max-[1130px]:h-[400px] max-[900px]:h-[300px] max-[700px]:w-[100%] max-[700px]:h-[340px] max-[470px]:h-[280px] max-[400px]:h-[260px]"
          unoptimized
        />
      </section>
      {/* Download app section */}
      {/* Download app section */}
      <Testimonial />
      {/* Testimonial Section */}
      {/* Testimonial Section */}
      <section className="w-[90%] mx-auto my-[130px] flex justify-between items-center flex-wrap">
        <Image
          src="/images/phone.png"
          alt="phone mockup"
          width={200}
          height={200}
          className="w-[30%] object-cover max-[700px]:w-[60%] mx-auto  max-[700px]:mb-[100px]  "
          unoptimized
        />
        <div className="w-[60%] max-[700px]:w-[100%] ">
          <header className="w-full mb-6 text-center">
            <h2 className="font-catamaran text-[35px] text-[#262626] max-[1050px]:text-[33px] max-[750px]:text-[28px]">
              FAQ's Just the Facts
            </h2>
            <p className="font-raleway text-[17px] max-[1050px]:text-[16px]">
              Quick answers to some common questions.
            </p>
          </header>
          <div className="w-full flex flex-col gap-3">
            {faqs.map((item) => (
              <div
                key={item.id}
                className="font-raleway text-[17px] w-full border border-slate-200 rounded-lg bg-white overflow-hidden"
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-4 py-3 hover:bg-slate-50"
                  onClick={() => setOpenId(openId === item.id ? null : item.id)}
                >
                  <div className="flex-1">
                    <h3 className="font-[700] text-left max-[700px]:text-[16px]">
                      {item.question}
                    </h3>
                  </div>

                  <div className="w-[8%] flex items-center justify-end">
                    {openId === item.id ? (
                      // Minus icon
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-slate-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20 12H4"
                        />
                      </svg>
                    ) : (
                      // Plus icon
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-slate-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    )}
                  </div>
                </button>

                {/* Accordion content with smooth animation */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openId === item.id ? "max-h-[260px]" : "max-h-0"
                  }`}
                >
                  <div className="max-[700px]:text-[16px] px-4 pb-4 pt-1">
                    <p className="">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/faq"
            className="font-raleway text-[19px] w-[100%] text-center bg-[#008000] text-[#ffffff] block rounded-[10px] py-[10px] mt-[20px]"
          >
            View All
          </Link>
        </div>
      </section>
      {/* End of FAQ  */}
      {/* End of FAQ  */}
      <Chat />
    </>
  );
};

export default page;
