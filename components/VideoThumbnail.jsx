import React from "react";
import { Play } from "lucide-react";

const VideoThumbnail = ({ thumbnail, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative z-[100] group overflow-hidden rounded-lg cursor-pointer"
      style={{ width: "100%" }}
    >
      <img
        src={thumbnail}
        alt="Video thumbnail"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute z-[100] inset-0 bg-background/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
          <Play size={34} className="text-primary-foreground ml-1" fill="red" />
        </div>
      </div>
      <div className="absolute bottom-2 right-2">
        <div className="w-8 h-8 rounded-full bg-destructive flex items-center justify-center">
          <Play size={20} className="ml-0.5 border-[#ffffff]" fill="red" />
        </div>
      </div>
    </button>
  );
};

export default VideoThumbnail;
