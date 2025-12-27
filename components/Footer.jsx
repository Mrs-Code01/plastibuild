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
    link:
      "https://x.com/iswaafrica/status/1998144481741472232?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1998144481741472232%7Ctwgr%5Ef669d3873c0ff19680630cf072b68a01d8427ec4%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Fpublish.twitter.com%2F%3Furl%3Dhttps%3A%2F%2Ftwitter.com%2Fiswaafrica%2Fstatus%2F1998144481741472232"
  },
  {
    text:
      "Eco-friendly steal alert! Get ready to step into sustainability in style...",
    link:
      "https://x.com/Plastibuild/status/1906680918116368823?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1906680918116368823%7Ctwgr%5Ed3956e1fbf034915758fd856d1740573a2090497%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Fpublish.twitter.com%2F%3Furl%3Dhttps%3A%2F%2Ftwitter.com%2FPlastibuild%2Fstatus%2F1906680918116368823"
  },
  {
    text: "Unlock sustainable growth with plastibuild training school!!",
    link:
      "https://x.com/Plastibuild/status/1875248081266200823?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1875248081266200823%7Ctwgr%5Ea22e9fe859af645656c879633acd4cc569807803%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Fpublish.twitter.com%2F%3Furl%3Dhttps%3A%2F%2Ftwitter.com%2FPlastibuild%2Fstatus%2F1875248081266200823"
  }
];

const navLinks = [
  {
    text: "Terms & Condition",
    ref: "/terms"
  },
  {
    text: "Privacy Policy",
    ref: "/privacy-policy"
  }
];

const Footer = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [email, setEmail] = useState("");

  const handleVideoClick = videoId => {
    setSelectedVideo(videoId);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className="">
      {/* Footer Section */}
      <footer className="bg-[#000000] py-16 px-6">
        <div className="font-raleway text-[#eeeeee] max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-wrap" style={{ margin: "0 -15px" }}>
            {/* About Us Column */}
            <div
              style={{ width: "33.333%", padding: "0 15px" }}
              className="mb-8"
            >
              <h3 className="font-catamaran text-[25px] font-semibold text-[#008000] mb-6">
                About Us
              </h3>
              <p className="text-muted-foreground text-[14px] leading-relaxed mb-6">
                PlastiBuild Creative Solutions Limited is a climate-tech and
                sustainable manufacturing company transforming how communities
                manage waste, create value, and build climate resilience.
              </p>

              <div className="flex items-center mb-3">
                <Phone size={16} className="text-primary mr-3" />
                <span className="text-foreground text-[14px]">
                  +234 7086170247
                </span>
              </div>

              <div className="flex items-center mb-8">
                <Mail size={16} className="text-primary mr-3" />
                <span className="text-foreground text-[14px]">
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
                  className="bg-[#ffffff] text-[#000000] text-[17px] px-4 py-3 rounded-tl-[10px] rounded-bl-[10px] outline-none placeholder:text-muted-foreground"
                  style={{ width: "65%" }}
                />
                <button
                  type="submit"
                  className="bg-[#008000] text-[#000000] text-sm font-medium px-6 py-3 rounded-r-full hover:opacity-90 transition-opacity"
                  style={{ width: "35%" }}
                >
                  Send
                </button>
              </form>
            </div>

            {/* Latest Tweet Column */}
            <div
              style={{ width: "33.333%", padding: "0 15px" }}
              className="mb-8"
            >
              <h3 className="font-catamaran text-[25px] font-semibold text-[#008000] mb-6">
                Latest Tweet
              </h3>
              <div className="space-y-6">
                {tweets.map((tweet, index) => (
                  <div key={index} className="flex">
                    <Twitter
                      size={16}
                      className="text-primary mr-3 mt-1 flex-shrink-0"
                    />
                    <a
                      href={tweet.link}
                      className="text-primary text-[14px] leading-relaxed "
                    >
                      {tweet.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Instagram/Videos Column */}
            <div
              style={{ width: "33.333%", padding: "0 15px" }}
              className="mb-8"
            >
              <h3 className="font-catamaran text-[25px] font-semibold text-[#008000] mb-6">
                Youtube
              </h3>
              <div className="flex flex-wrap" style={{ margin: "0 -4px" }}>
                {videoData.map((video, index) => (
                  <div key={index} style={{ width: "50%", padding: "4px" }}>
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
          <div className="border-t border-border mt-8 pt-8">
            <div className="flex flex-wrap items-center justify-between">
              <nav className="flex flex-wrap gap-6">
                {navLinks.map(link => (
                  <Link
                    key={link}
                    href={link.ref}
                    className="text-foreground text-[13px] hover:text-primary transition-colors"
                  >
                    {link.text}
                  </Link>
                ))}
              </nav>
              <span className="text-[#ffffff] text-[13px]">
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
