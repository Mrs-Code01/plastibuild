"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Testimonial from "../components/TestimonialSection";
import SocialSidebar from "../components/SocialSidebar";

const logos = [
  "https://res.cloudinary.com/dv7osqi65/image/upload/v1765964360/client-intake/gallery/hiusiqivqbf1kr0amegk.png",
  "https://res.cloudinary.com/dv7osqi65/image/upload/v1765964358/client-intake/gallery/lbe7xzadoydgkxucnxah.png",
  "https://res.cloudinary.com/dv7osqi65/image/upload/v1765964358/client-intake/gallery/qmczxjgssqreus9kplsg.png",
  "https://res.cloudinary.com/dv7osqi65/image/upload/v1765964359/client-intake/gallery/fag7fduwd7j4jplovvw0.png",
  "https://res.cloudinary.com/dv7osqi65/image/upload/v1765964359/client-intake/gallery/ige6opxavscrdnkzxqwz.png",
  "https://res.cloudinary.com/dv7osqi65/image/upload/v1765964360/client-intake/gallery/fuwusaiibsgcvkzgwmtk.png"
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
      question: "Why is the sky blue?",
      answer:
        "A clear cloudless daytime sky is blue because molecules in the air scatter blue light from the sun more than they scatter red light. When we look towards the sun at sunset, we see red and orange colors because the blue light has been scattered out and away from the line of sight."
    },
    {
      id: 2,
      question: "Where do babies come from?",
      answer:
        "Babies develop in the uterus during pregnancy. If you want age-appropriate resources or more detail, it’s best to ask a trusted adult or a healthcare professional."
    },
    {
      id: 3,
      question: "When will we get there?",
      answer:
        "Arrival time depends on distance and speed. Estimating with a map or navigation app can give a realistic timeframe."
    },
    {
      id: 4,
      question: "When will we get there?",
      answer:
        "Arrival time depends on distance and speed. Estimating with a map or navigation app can give a realistic timeframe."
    },
    {
      id: 5,
      question: "When will we get there?",
      answer:
        "Arrival time depends on distance and speed. Estimating with a map or navigation app can give a realistic timeframe."
    }
  ];

  return (
    <>
      <main className="mt-[140px] mb-[120px] w-[90%] mx-auto flex justify-between items-center">
        <div className="w-[60%]">
          <p className="font-raleway bg-[#DAD7CD] border-[1px] text-[#000000] text-[19px] p-[10px] rounded-[10px] inline-block mb-[10px]">
            PlastiBuild Creative Solutions Limited
          </p>
          <h1 className="font-catamaran text-[60px] leading-[1.2]">
            Turning Waste Into Climate Solutions, Jobs, and Opportunity
          </h1>
          <p className="font-raleway text-[19px] leading-[1.4] mt-[20px] mb-[35px]">
            Climate-tech & sustainable manufacturing company driving circular
            economy innovation across Africa
          </p>
          <div>
            <Link
              href="#"
              className="font-raleway text-[19px] w-[200px] text-center bg-[#008000] text-[#ffffff] border-[1px] border-[#28833d] inline-block rounded-[10px] py-[10px] mr-[15px]"
            >
              Explore Our Work
            </Link>
            <Link
              href="#"
              className="font-raleway text-[19px] w-[200px] text-center bg-[#ffffff] border-[1px] inline-block rounded-[10px] py-[10px] mr-[15px]"
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
          className="w-[37%]"
          unoptimized
        />
      </main>
      {/* End of hero section */}
      {/* End of hero section */}
      <section className="my-[130px]">
        <h2 className="font-catamaran text-[35px] text-center mb-[40px] text-[#292929]">
          Trusted By
        </h2>
        <div className="relative overflow-hidden">
          <div className="marquee flex w-[200%]">
            {/* First set */}
            <div className="flex">
              {logos.map((src, i) => (
                <div
                  key={`logo-a-${i}`}
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
      <SocialSidebar />
      <section className="w-[90%] mx-auto mb-[130px]">
        <div className="w-[90%] mx-auto mb-[50px] text-center text-[#262626]">
          <h2 className="font-catamaran text-[35px] mb-[15px]">Who We Are?</h2>
          <p className="font-raleway text-[17px]">
            PlastiBuild Creative Solutions Limited is a climate-tech and
            sustainable manufacturing company transforming how communities
            manage waste, create value, and build climate resilience. We exist
            to solve one of Africa’s most pressing environmental
            challenges—urban waste pollution—by converting discarded materials
            into functional products, green technologies, and empowering
            learning experiences that unlock economic opportunity.
          </p>
        </div>
        <div className="w-[100%] flex justify-between items-start">
          <div className="w-[40%] flex justify-between flex-wrap gap-y-[20px]">
            <h3 className="font-catamaran w-[48%] border-[1px] h-[150px] text-[25px] rounded-[10px] flex justify-center items-center">
              Makers
            </h3>
            <h3 className="font-catamaran w-[48%] border-[1px] h-[150px] text-[25px] rounded-[10px] flex justify-center items-center">
              Innovators
            </h3>
            <h3 className="font-catamaran w-[100%] border-[1px] h-[150px] text-[25px] rounded-[10px] flex justify-center items-center">
              Problem Solvers
            </h3>
          </div>
          <Image
            src="/images/plastibuildabout.png"
            alt="plastibuildhero"
            width={200}
            height={150}
            className="w-[55%]"
            unoptimized
          />
        </div>
        <Link
          href="#"
          className="font-raleway text-[19px] w-[200px] mx-auto text-center bg-[#008000] text-[#ffffff]  block rounded-[10px] py-[10px] mt-[100px]"
        >
          View More
        </Link>
      </section>
      {/* End of who we are */}
      {/* End of who we are */}
      <section className="w-[90%] mx-auto mb-[130px]">
        <div className="w-[90%] mx-auto mb-[50px] text-center text-[#262626]">
          <h2 className="font-catamaran text-[35px] mb-[15px]">Our Services</h2>
          <p className="font-raleway text-[17px]">
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
              className="flex justify-between items-start w-[48%] border rounded-[10px] p-[20px]"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={80}
                height={80}
                className="object-cover w-[80px] h-[80px] rounded-[100%] border-[2px] border-[#000000]"
              />
              <div className="w-[80%]">
                <h3 className="font-catamaran text-[20px]">{service.title}</h3>
                <p className="font-raleway text-[#000000]">{service.text}</p>
                <Link
                  href={service.view}
                  className="font-raleway text-[#000000] bg-[#ffffff] rounded-[10px] p-[5px] border-[1px] inline-block w-[70px] text-center mt-[10px] hover:opacity-[.7]"
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
      <section className="w-[90%] mx-auto mb-[130px] flex justify-between">
        <div className="w-[40%]">
          <h2 className="font-catamaran text-[40px] text-[#262626] leading-[1.1]">
            Download our app for better experience
          </h2>
          <p className="font-raleway text-[17px] text-[#000000] my-[20px]">
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
            className="w-[100px]"
            unoptimized
          />
        </div>
        <Image
          src="/images/app.png"
          alt="phone mockup"
          width={200}
          height={200}
          className="w-[55%]"
          unoptimized
        />
      </section>
      {/* Download app section */}
      {/* Download app section */}
      <Testimonial />
      {/* Testimonial Section */}
      {/* Testimonial Section */}
      <section className="w-[90%] mx-auto my-[130px] flex justify-between items-center">
        <Image
          src="/images/phone.png"
          alt="phone mockup"
          width={200}
          height={200}
          className="w-[30%]"
          unoptimized
        />
        <div className="w-[60%]">
          <header className="w-full mb-6">
            <h1 className="font-catamaran text-[35px] text-[#262626]">
              FAQ's Just the Facts
            </h1>
            <p className="font-raleway text-[17px]">
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
                  <div className="flex items-center gap-3 w-[92%]">
                    <h3 className="font-[700]">{item.question}</h3>
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
                    openId === item.id ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <div className="px-4 pb-4 pt-1">
                    <p className="">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End of FAQ  */}
      {/* End of FAQ  */}
    </>
  );
};

export default page;
