"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/images/plasti10.jpg",
  "/images/plasti11.jpg",
  "/images/plasti12.jpg",
  "/images/plasti18.jpg",
  "/images/plasti19.jpg",
];

export default function FadeSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-xl">
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          width={100}
          height={100}
          alt="products"
          unoptimized
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
