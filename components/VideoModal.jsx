import React from "react";

import { X } from "lucide-react";

const VideoModal = ({ videoId, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed z-[100] inset-0 z-50 flex items-center justify-center bg-background/90 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-[90%] max-w-[900px] animate-scale-in"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 p-2 text-[#ffffff]"
        >
          <X size={28} />
        </button>
        <div className="relative" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreenz
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
