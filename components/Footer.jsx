"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, Twitter } from "lucide-react";
import VideoThumbnail from "./VideoThumbnail";
import VideoModal from "./VideoModal";
import ChatModal from "../components/ChatModal";

const videoData = [
  { id: "3WdGJOxwcug", thumbnail: "/images/plasti7.jpg" },
  { id: "6SCpEOSMbS4", thumbnail: "/images/plasti10.jpg" }
];

const tweets = [
  {
    text:
      "Big congratulations to ISWA ARC Member Amidu Mohammed, fondly called AmiduClimate!",
    link: "https://x.com/iswaafrica/status/1998144481741472232"
  },
  {
    text:
      "Eco-friendly steal alert! Get ready to step into sustainability in style...",
    link: "https://x.com/Plastibuild/status/1906680918116368823"
  },
  {
    text: "Unlock sustainable growth with plastibuild training school!!",
    link: "https://x.com/Plastibuild/status/1875248081266200823"
  }
];

const navLinks = [
  { text: "Terms & Condition", ref: "/terms" },
  { text: "Privacy Policy", ref: "/privacy-policy" }
];

const Footer = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [email, setEmail] = useState("");

  const handleVideoClick = videoId => setSelectedVideo(videoId);
  const handleCloseModal = () => setSelectedVideo(null);
  const handleSubmit = e => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div>
      <footer className="bg-[#000000] py-[4rem] px-[1.5rem]">
        <div className="font-raleway text-[#eeeeee] max-w-[72rem] mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-wrap gap-y-[2rem] -mx-[0.9375rem]">
            {/* About Us Column */}
            <div className="w-[100%] sm:w-[48%] lg:w-[33%] px-[0.9375rem] mb-[2rem]">
              <h3 className="font-catamaran text-[1.5625rem] font-semibold text-[#008000] mb-[1.5rem]">
                About Us
              </h3>
              <p className="text-muted-foreground text-[0.875rem] leading-relaxed mb-[1.5rem]">
                PlastiBuild Creative Solutions Limited is a climate-tech and
                sustainable manufacturing company transforming how communities
                manage waste, create value, and build climate resilience.
              </p>

              <div className="flex items-center mb-[0.75rem]">
                <Phone size={16} className="text-primary mr-[0.75rem]" />
                <span className="text-foreground text-[0.875rem]">
                  +234 7086170247
                </span>
              </div>

              <div className="flex items-center mb-[2rem]">
                <Mail size={16} className="text-primary mr-[0.75rem]" />
                <span className="text-foreground text-[0.875rem]">
                  plastibuildcreatives@gmail.com
                </span>
              </div>

              {/* Email Subscription */}
              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="email"
                  placeholder="Enter your e-mail"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="bg-[#ffffff] text-[#000000] text-[1.0625rem] px-[1rem] py-[0.75rem] rounded-tl-[0.625rem] rounded-bl-[0.625rem] outline-none placeholder:text-muted-foreground w-[65%]"
                />
                <button
                  type="submit"
                  className="bg-[#008000] text-[#000000] text-sm font-medium px-[1.5rem] py-[0.75rem] rounded-r-full hover:opacity-90 transition-opacity w-[35%]"
                >
                  Send
                </button>
              </form>
            </div>

            {/* Latest Tweet Column */}
            <div className="w-[100%] sm:w-[48%] lg:w-[33%] px-[0.9375rem] mb-[2rem]">
              <h3 className="font-catamaran text-[1.5625rem] font-semibold text-[#008000] mb-[1.5rem]">
                Latest Tweet
              </h3>
              <div className="space-y-[1.5rem]">
                {tweets.map((tweet, index) => (
                  <div key={index} className="flex">
                    <Twitter
                      size={16}
                      className="text-primary mr-[0.75rem] mt-[0.25rem] flex-shrink-0"
                    />
                    <a
                      href={tweet.link}
                      className="text-primary text-[0.875rem] leading-relaxed"
                    >
                      {tweet.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Youtube Column */}
            <div className="w-[100%] sm:w-[48%] lg:w-[33%] px-[0.9375rem] mb-[2rem]">
              <h3 className="font-catamaran text-[1.5625rem] font-semibold text-[#008000] mb-[1.5rem]">
                Youtube
              </h3>
              <div className="flex flex-wrap -mx-[0.25rem]">
                {videoData.map((video, index) => (
                  <div key={index} className="w-[50%] px-[0.25rem]">
                    <VideoThumbnail
                      thumbnail={video.thumbnail}
                      onClick={() => handleVideoClick(video.id)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-border mt-[2rem] pt-[2rem]">
            <div className="flex flex-wrap items-center justify-between gap-y-[1rem]">
              <nav className="flex flex-wrap gap-[1.5rem]">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.ref}
                    className="text-foreground text-[0.8125rem] hover:text-primary transition-colors"
                  >
                    {link.text}
                  </Link>
                ))}
              </nav>
              <span className="text-[#ffffff] text-[0.8125rem]">
                Copyright &copy; 2025 plastibuildafrica.com &bull; All rights
                reserved
              </span>
            </div>
          </div>
        </div>
        <ChatModal />
      </footer>

      {/* Video Modal */}
      <VideoModal
        videoId={selectedVideo || "3WdGJOxwcug"}
        isOpen={!!selectedVideo}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Footer;
