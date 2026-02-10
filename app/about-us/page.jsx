import React from "react";
import Link from "next/link";
import Image from "next/image";

const teamMembers = [
  {
    name: "Amidu Mohammed",
    role: "Founder / CEO",
    image: "/images/team/ceo.jpg",
    description: "Sustainability Expert",
  },
  {
    name: "Toki Mabogunje",
    role: "Lead Innovator",
    image: "/images/team/team1.jpeg",
    description: "Vice Chair Africa, World Chamber Federation",
  },
  {
    name: "Adamu Garba",
    role: "Finance & Strategy",
    image: "/images/team/team4.jpeg",
    description: "Chief Operating Officer, Nigeria Climate Innovation Center",
  },
  {
    name: "Abdullahi Sidi",
    role: "Finance & Strategy",
    image: "/images/team/team3.jpeg",
    description:
      "Director Export Trade , International Trade Facilitation Association",
  },
  {
    name: "Dr Ahmed Yahya",
    role: "Finance & Strategy",
    image: "/images/team/team2.jpeg",
    description: "President,  Development Association of Renewable Energy",
  },
];

const PlastiBuildAbout = () => {
  return (
    <div className="font-raleway bg-[#FAF9F6] text-[#1a1a1a] mt-[70px]">
      {/* --- SECTION 1: THE PROBLEM (Layout from image_f50c3a.png) --- */}
      <main className="relative overflow-hidden py-[70px] px-[5%] flex justify-center items-center max-[1099px]:mt-[-10px]">
        {/* Animated Background */}
        <div
          className="absolute top-[-220px] inset-0 bg-cover bg-center opacity-4 animated-bg w-[100%] h-[1000px]"
          style={{ backgroundImage: "url('/images/abstract.png')" }}
        ></div>

        {/* Content */}
        <div className="relative z-20 text-center">
          <h1 className="font-catamaran text-[3.3rem] font-bold max-[550px]:text-[2.5rem]">
            About PlastiBuild
          </h1>
          <p className="font-raleway w-[60%] mx-auto text-[1.2rem] max-[550px]:text-[1rem] max-[550px]:w-[100%]">
            A climate-tech and sustainable manufacturing company transforming
            waste into value through circular innovation, green technologies,
            and community empowerment across Africa
          </p>
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
      <section className="py-16 px-6 max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="font-catamaran text-[2.5rem] font-black text-center mb-2 leading-[1.1] max-[550px]:text-[1.9rem]">
          The Problem We're Solving
        </h2>
        <p className="text-slate-500 text-[1.1rem] mb-10 text-center max-[550px]:text-[1rem]">
          A massive environmental crisis hiding in plain sight
        </p>

        {/* Crisis Card */}
        <div className="w-full bg-[#d32f2f] rounded-2xl overflow-hidden shadow-lg mb-6">
          <div className="flex items-center justify-center gap-2 py-4 bg-black/10 text-white font-bold uppercase tracking-wider text-xs">
            <span>⚠️</span> The Urban Waste Crisis
          </div>
          <div className="bg-white m-1 rounded-b-2xl p-12 flex flex-col items-center text-center">
            <span className="font-catamaran text-7xl font-black text-[#d32f2f] mb-2">
              80%
            </span>
            <p className="font-bold text-lg mb-4">
              of urban waste ends up in landfills and Nigeria generates 32
              million tons of wastes annually
            </p>
            <p className="text-slate-600 text-sm max-w-2xl leading-relaxed">
              Every day, massive amounts of plastic, textile, and wood waste are
              discarded, filling up drainages or being set ablaze, releasing
              harmful carbon emissions.
            </p>
          </div>
        </div>

        {/* Small Stats Row - Flexbox % Widths */}
        <div className="flex flex-wrap justify-between w-full gap-4 mb-6">
          <div className="flex flex-col w-[30%] bg-white px-6 py-[40px] rounded-2xl shadow-sm border border-slate-100 text-center max-[550px]:w-[48%] max-[435px]:w-[100%]">
            <span className="text-2xl font-black text-blue-600 block">
              13,000+ tonnes
            </span>
            <span className="font-bold uppercase text-[.8rem]">
              DAILY WASTE
            </span>
            <p className="text-[.7rem] text-slate-500 mt-2">
              Waste generated daily in Lagos
            </p>
          </div>
          <div className="flex-1 min-w-[30%] bg-white px-6 py-[40px] rounded-2xl shadow-sm border border-slate-100 text-center max-[550px]:w-[48%] max-[435px]:w-[100%]">
            <span className="text-2xl font-black text-orange-600 block">
              12%
            </span>
            <span className="font-bold uppercase text-[.8rem]">
              COLLECTION RATE
            </span>
            <p className="text-[.7rem] text-slate-500 mt-2">
              Total waste collected
            </p>
          </div>
          <div className="flex flex-col w-[30%] bg-white px-6 py-[40px] rounded-2xl shadow-sm border border-slate-100 text-center max-[550px]:w-[100%]">
            <span className="text-2xl font-black text-emerald-600 block">
              10%
            </span>
            <span className="text-[.8rem] font-bold uppercase">
              RECYCLING RATE
            </span>
            <p className="text-[.7rem] text-slate-500 mt-2">
              Total waste recycled
            </p>
          </div>
        </div>

        {/* Impact Box */}
        <div className="w-full bg-white p-10 rounded-2xl border border-slate-100 shadow-sm mb-6">
          <h3 className="font-catamaran text-center font-bold mb-8 text-[1.9rem] leading-[1.1]">
            The Environmental & Economic Impact
          </h3>
          <div className="flex flex-wrap justify-between gap-8">
            <div className="w-full md:w-[45%]">
              <p className="text-red-600 font-bold text-[1.1rem] uppercase mb-4 flex items-center gap-2">
                🚫 Environmental Damage
              </p>
              <ul className="text-[0.9rem] text-slate-600 space-y-3 list-disc pl-4 leading-relaxed">
                <li>
                  Carbon emissions from burning waste contribute to climate
                  change
                </li>
                <li>
                  Landfill overflow with materials that could be repurposed
                </li>
                <li>
                  Plastic waste filling drainages in communities like Bariga
                </li>
              </ul>
            </div>
            <div className="w-full md:w-[45%]">
              <p className="text-orange-600 font-bold text-[1.1rem] uppercase mb-4 flex items-center gap-2">
                📉 Economic Loss
              </p>
              <ul className="text-[.9rem] text-slate-600 space-y-3 list-disc pl-4 leading-relaxed">
                <li>
                  Untapped industrial processing opportunity in the circular
                  economy
                </li>
                <li>Loss of livelihood opportunities for youth and women</li>
                <li>
                  Communities lose access to affordable, sustainable products
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hope Button Card */}
        <div className="w-full bg-[#008000] p-8 rounded-2xl text-white text-center">
          <h3 className="font-catamaran text-[2rem] font-bold mb-4 ">
            But There's Hope 🌱
          </h3>
          <p className="text-[1.1rem] opacity-90 mb-6 max-w-3xl mx-auto">
            At PlastiBuild, we believe this "waste" is actually a valuable
            resource waiting to be transformed.
          </p>
          <button className="bg-white text-[#1b5e20] px-8 py-3 rounded-full font-black text-[1rem] uppercase tracking-widest">
            Our mission: Transform Waste into Opportunity
          </button>
        </div>
      </section>

      {/* --- SECTION 2: OUR MISSION (Layout from image_f50cf0.png) --- */}
      <section className="bg-[#000000] py-20 px-6 text-white text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-catamaran text-4xl font-black mb-6">
            Our Mission
          </h2>
          <p className="text-lg opacity-90 mb-12 max-w-3xl mx-auto">
            Our mission is to build climate-smart communities where young people
            can innovate, collaborate, and create sustainable livelihoods.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <div className="w-full md:w-[30%] bg-white/10 p-8 rounded-2xl border border-white/10">
              <span className="font-catamaran text-[1.3rem] font-black block mb-4">
                Empowering Youth
              </span>
              <p className="text-[.9rem] opacity-80 leading-relaxed">
                Unlocking economic opportunity through green technologies and
                learning.
              </p>
            </div>
            <div className="w-full md:w-[30%] bg-white/10 p-8 rounded-2xl border border-white/10">
              <span className="font-catamaran text-[1.3rem] font-black block mb-4">
                Creating Jobs
              </span>
              <p className="text-[.9rem] opacity-80 leading-relaxed">
                Developing sustainable livelihoods while contributing to a
                cleaner world.
              </p>
            </div>
            <div className="w-full md:w-[30%] bg-white/10 p-8 rounded-2xl border border-white/10">
              <span className="font-catamaran text-[1.3rem] font-black block mb-4">
                Transforming Waste
              </span>
              <p className="text-[.9rem] opacity-80 leading-relaxed">
                Converting discarded materials into high-quality, market-ready
                solutions.
              </p>
            </div>
          </div>

          <div className="bg-white text-slate-800 p-12 rounded-3xl text-left shadow-2xl">
            <p className="font-catamaran font-bold mb-8 text-center text-[1.5rem] leading-[1.1]">
              We are committed to building a circular ecosystem where:
            </p>
            <div className="flex flex-wrap justify-between gap-y-6">
              <div className="w-full md:w-[48%] text-[.9rem] flex gap-2">
                ✅{" "}
                <span>
                  Young creators access tools and mentoring for eco-products.
                </span>
              </div>
              <div className="w-full md:w-[48%] text-[.9rem] flex gap-2">
                ✅{" "}
                <span>
                  Waste becomes wealth through circular economy practices.
                </span>
              </div>
              <div className="w-full md:w-[48%] text-[.9rem] flex gap-2">
                ✅ <span>Artisans and women learn practical green skills.</span>
              </div>
              <div className="w-full md:w-[48%] text-[.9rem] flex gap-2">
                ✅{" "}
                <span>
                  Environment heals as we deploy low-carbon solutions.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: THE TEAM (Layout from image_f51451.png) --- */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-catamaran text-3xl font-black mb-4">
            Leadership & Advisory Board
          </h2>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto">
            Led by innovators, makers, and problem-solvers dedicated to
            redefining sustainability.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Amidu */}
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-full sm:w-[48%] lg:w-[31%] bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm"
            >
              <Image
                src={member.image}
                width={100}
                height={100}
                alt="Founder"
                className="w-[100%] h-[250px] object-cover object-top"
                unoptimized
              />
              <div className="p-6 text-center">
                <h4 className="font-catamaran font-black text-[1.3rem]">
                  {member.name}
                </h4>
                <p className="font-bold uppercase text-[.8rem] mb-4 opacity-70">
                  {member.role}
                </p>
                <p className="text-[.8rem] leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- PARTNERS SECTION --- */}
      <section className="py-2 text-center bg-[#ffffff] py-[70px]">
        <div className="max-w-4xl mx-auto px-[20px]">
          <p className="text-slate-600 text-[1.3rem] mb-10 leading-relaxed  max-[550px]:text-[1.1rem]">
            Our work is strengthened by a diverse network of international NGOs,
            government institutions, and private-sector partners committed to
            rethinking waste and redesigning the future of African climate
            solutions.
          </p>
          <Link
            href="/about-us/partners-and-collaborators"
            className="bg-[#008000] text-white px-12 py-4 rounded-full font-black text-[1rem] max-[550px]:text-[.9rem]"
          >
            View Our Partners
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PlastiBuildAbout;
