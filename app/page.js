"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Testimonial from "../components/TestimonialSection";
import Chat from "../components/Chat";

const logos = [
  "/images/logos/logo1.png",
  "/images/logos/logo3.png",
  "/images/logos/logo37.png",
  "/images/logos/logo5.png",
  "/images/logos/logo9.png",
  "/images/logos/logo18.png",
  "/images/logos/logo24.png",
  "/images/logos/logo34.png"
];

const services = [
  {
    title: "Training & Workshops",
    image: "/images/plastibuildhero.png",
    view: "/services/training-and-workshops",
    text:
      "We deliver high-impact, hands-on training programs that build practical green skills for individuals...",
    bg: "#DBEAFE" // light blue
  },
  {
    title: "Circularity & Sustainability Consulting",
    image: "/images/plasti9.jpg",
    view: "/services/circularity-and-sustainability-consulting",
    text:
      "We support organisations in integrating circular economy principles, responsible production...",
    bg: "#D1FAE5" // light green
  },
  {
    title: "Corporate Recycling Programs",
    image: "/images/plasti9.jpg",
    view: "/services/corporate-recycling-programs",
    text:
      "We help companies design and execute efficient in-house recycling...",
    bg: "#FEF3C7" // light yellow
  },
  {
    title: "Industrial Waste Management Solutions",
    image: "/images/plastibuildhero.png",
    view: "/services/industrial-waste-management-solutions",
    text:
      "We work with manufacturers, SMEs, and production facilities to manage waste streams...",
    bg: "#E9D5FF" // light purple
  },
  {
    title: "Technology & Digital Solutions",
    image: "/images/plastibuildhero.png",
    view: "/services/technology-and-digital-solutions",
    text:
      "We build and deploy technology that enhances sustainability, waste management...",
    bg: "#FBCFE8" // light pink
  },
  {
    title: "Circular Product Design & Climate-Tech Innovation",
    image: "/images/plasti9.jpg",
    view: "/services/circular-product-design",
    text:
      "We support innovators, startups, schools, research teams, and corporates in developing...",
    bg: "#FECACA" // light red
  },
  {
    title: "E-Learning & Digital Climate Education",
    image: "/images/plasti9.jpg",
    view: "/services/e-learning-and-digital-climate-education",
    text:
      "Our digital learning ecosystem makes climate literacy accessible to everyone...",
    bg: "#F3F4F6" // light indigo
  }
];

const testimonials = [
  {
    name: "Jessica Jones",
    title: "Web Designer",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Minus veritatis repellendus delectus, est, alias recusandae."
  },
  {
    name: "John Smith",
    title: "UI Developer",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Minus veritatis repellendus delectus, est, alias recusandae."
  },
  {
    name: "Emily Clark",
    title: "Project Manager",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Minus veritatis repellendus delectus, est, alias recusandae."
  },
  {
    name: "Michael Brown",
    title: "Product Designer",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Minus veritatis repellendus delectus, est, alias recusandae."
  },
  {
    name: "Sophia Lee",
    title: "Marketing Specialist",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Minus veritatis repellendus delectus, est, alias recusandae."
  }
];

const page = () => {
  const [openId, setOpenId] = useState(1);

  const faqs = [
    {
      id: 1,
      question: "What waste management services does PlastiBuild offer?",
      answer:
        "PlastiBuild provides end-to-end waste management solutions, including waste audits, collection system design, segregation frameworks, and material recovery plans. We transform plastic and other recyclables from waste streams into usable materials for circular manufacturing, reducing landfill dependency, preventing open burning, and supporting climate action."
    },
    {
      id: 2,
      question: " What advisory services does PlastiBuild provide?",
      answer:
        "We offer consultancy on circular economy adoption, ESG integration, sustainable production, and environmental strategy. This includes lifecycle assessments, circular product design, policy alignment, and practical roadmaps for corporates, NGOs, and government agencies to achieve measurable sustainability outcomes."
    },
    {
      id: 3,
      question: "What training programs does PlastiBuild offer?",
      answer:
        "PlastiBuild delivers tailored workshops, seminars, and training sessions on ESG reporting, climate resilience, circular economy, and environmental compliance. These programs target corporates, NGOs, academic institutions, and government agencies, equipping teams with the skills to implement climate-smart decision-making and sustainability strategies."
    },
    {
      id: 4,
      question: "What is PlastiBuild DigiHub?",
      answer:
        "The DigiHub is our digital platform that complements our physical hubs. It connects waste pickers, artisans, recyclers, green businesses, and corporates across the circular economy. The platform integrates AI, IoT, blockchain, and data analytics to digitize waste management, carbon tracking, and sustainable manufacturing workflows."
    },
    {
      id: 5,
      question:
        "What products and services are part of the waste-to-value ecosystem?",
      answer:
        "Our ecosystem converts waste into eco-friendly products like sustainable footwear (EcoFeet), green furniture, and eco-interiors. The DigiHub tracks the waste-to-product journey and monetizes it via carbon credits, token rewards, and marketplace sales, creating income opportunities for communities, artisans, and green SMEs."
    }
  ];

  return (
    <>
      <main className="mt-[140px] mb-[120px] w-[90%] mx-auto flex justify-between items-center flex-wrap gap-y-[70px]">
        <div className="w-[60%] max-[750px]:w-[100%] max-[750px]:text-center ">
          <p className="font-raleway bg-[#DAD7CD] border-[1px] text-[#000000] text-[19px] max-[1050px]:text-[15px] p-[10px] rounded-[10px] inline-block mb-[10px]">
            PlastiBuild Creative Solutions Limited
          </p>
          <h1 className="font-catamaran text-[60px] max-[1050px]:text-[45px] max-[1050px]:text-[38px] max-[750px]:text-[34px] leading-[1.2]">
            Turning Waste Into Climate Solutions, Jobs, and Opportunity
          </h1>
          <p className="font-raleway text-[19px] max-[1050px]:text-[16px] leading-[1.4] mt-[20px] mb-[35px]">
            Climate-tech & sustainable manufacturing company driving circular
            economy innovation across Africa
          </p>
          <div>
            <Link
              href="/media"
              className="font-raleway text-[19px] max-[1050px]:text-[16px] w-[200px] max-[820px]:w-[170px] text-center bg-[#008000] text-[#ffffff] border-[1px] border-[#28833d] inline-block rounded-[10px] py-[10px] mr-[15px] max-[430px]:w-[70%] max-[430px]:mb-[20px]"
            >
              Explore Our Work
            </Link>
            <Link
              href="/about-us/partners-and-collaborators"
              className="font-raleway text-[19px] max-[1050px]:text-[16px] w-[200px] max-[820px]:w-[170px] text-center bg-[#ffffff] border-[1px] inline-block rounded-[10px] py-[10px] mr-[15px] max-[430px]:w-[70%]"
            >
              Partner With Us
            </Link>
          </div>
        </div>
        <Image
          src="/images/plastibuildhero.png"
          alt="plastibuildhero"
          width={200}
          height={200}
          className="w-[37%] max-[750px]:w-[100%]"
          unoptimized
        />
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
            animation: marquee 40s linear infinite;
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
          <p className="font-raleway text-[17px] max-[1050px]:text-[16px]">
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
          className="font-raleway text-[19px] w-[200px] mx-auto text-center bg-[#008000] text-[#ffffff] block rounded-[10px] py-[10px] mt-[100px] max-[750px]:w-[170px] max-[750px]:text-[16px]"
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
        <div className="w-[100%] flex flex-wrap justify-between gap-y-[40px]">
          {services.map((service, index) => (
            <div
              key={index}
              style={{ backgroundColor: service.bg }}
              className="flex justify-between items-start flex-wrap w-[48%] border rounded-[10px] p-[20px] max-[1000px]:flex-col max-[700px]:items-center max-[700px]:px-[16px] max-[700px]:w-[100%]"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={70}
                height={70}
                className="object-cover w-[70px] h-[70px] rounded-[100%] border-[2px] border-[#000000]"
              />
              <div className="w-[80%] max-[1000px]:w-[100%] max-[700px]:text-center">
                <h3 className="font-catamaran text-[20px] leading-[1.1] mb-[8px] mt-[12px] max-[700px]:text-[18px]">
                  {service.title}
                </h3>
                <p className="font-raleway text-[#000000] text-[16px] max-[700px]:text-[15px]">
                  {service.text}
                </p>
                <Link
                  href={service.view}
                  className="font-raleway text-[#000000] text-[16px] bg-[#ffffff] rounded-[10px] p-[5px] border-[1px] inline-block w-[70px] text-center mt-[10px] hover:opacity-[.7] max-[700px]:text-[15px]"
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
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
            {faqs.map(item => (
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
