"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import react-leaflet components (client-side only)
const MapContainer = dynamic(
  () => import("react-leaflet").then(mod => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then(mod => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(() => import("react-leaflet").then(mod => mod.Marker), {
  ssr: false
});
const Popup = dynamic(() => import("react-leaflet").then(mod => mod.Popup), {
  ssr: false
});

export default function page() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          setUserLocation([pos.coords.latitude, pos.coords.longitude]);
        },
        () => {
          setUserLocation([41.916, -88.304]); // fallback: Elgin, IL
        }
      );
    }
  }, []);

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-[100%] font-raleway flex flex-col items-center md:p-8 bg-gray-100">
      <h1 className="font-catamaran w-[50%] text-[35px] pt-[150px] text-center mb-2">
        Contact Us
      </h1>
      <p className="font-raleway w-[50%] text-[17px] text-center mb-6">
        If you have any questions, feel free to reach out via phone, text,
        email, the form below, or social media!
      </p>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[65%] bg-white py-[60px] px-[30px] rounded-[10px]"
      >
        <input
          type="text"
          name="name"
          placeholder="Enter your name*"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 py-[13px] px-[12px] rounded-[5px] mb-[15px]"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number*"
          value={formData.phone}
          onChange={handleChange}
          className="border border-gray-300 py-[13px] px-[12px] rounded-[5px] mb-[15px]"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email*"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 py-[13px] px-[12px] rounded-[5px] mb-[15px]"
          required
        />
        <textarea
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          className="border border-gray-300 py-[13px] h-[150px] px-[12px] rounded-[5px] mb-[15px]"
        />
        <button
          type="submit"
          className="bg-[#000000] text-white py-[13px] px-[5px] px-4 rounded"
        >
          Send Message
        </button>
      </form>

      {/* Info Sections */}
      <div className="w-[65%] flex justify-between my-[50px]">
        <div className="rounded-[10px] p-[20px] bg-[#ffffff] w-[48%]">
          <h2 className="font-catamaran text-[20px] mb-[8px]">
            Contact Information
          </h2>
          <p>
            <strong>Phone:</strong> 773-985-1420
          </p>
          <p>
            <strong>Email:</strong> office@elginsportsmens.com
          </p>
          <p>
            <strong>Address:</strong> Nipost Workshop Services Compound, Next to
            LAWMA HEADQUARTERS, Ijora Olopa, Lagos
          </p>
        </div>

        <div className="rounded-[10px] p-[20px] bg-[#ffffff] w-[48%]">
          <h2 className="font-catamaran text-[20px] mb-[8px]">
            Business Hours
          </h2>
          <p>
            <strong>Mon - Fri:</strong> 9:00 a.m. - 5:00 p.m.
          </p>
        </div>
      </div>

      {/* Map */}
      <div className="w-[65%] relative z-[10] max-w-4xl h-96 mb-[100px] rounded overflow-hidden shadow">
        {userLocation && (
          <MapContainer
            center={userLocation}
            zoom={13}
            className="h-full w-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={userLocation}>
              <Popup>You are here</Popup>
            </Marker>
          </MapContainer>
        )}
      </div>
    </div>
  );
}
