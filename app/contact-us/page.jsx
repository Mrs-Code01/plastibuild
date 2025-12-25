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

export default function ContactUs() {
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
    <div className="font-raleway flex flex-col items-center md:p-8 bg-gray-100">
      <h1 className="text-3xl pt-[100px] font-bold text-center mb-2">
        Contact Us
      </h1>
      <p className="text-center max-w-xl mb-6">
        If you have any questions, feel free to reach out via phone, text,
        email, the form below, or social media!
      </p>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-xl space-y-4 bg-white p-6 rounded shadow"
      >
        <input
          type="text"
          name="name"
          placeholder="Enter your name*"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number*"
          value={formData.phone}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email*"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          className="border p-2 rounded h-32"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>

      {/* Info Sections */}
      <div className="flex flex-col md:flex-row justify-between w-full max-w-4xl mt-8 space-y-6 md:space-y-0 md:space-x-6">
        <div className="flex-1 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
          <p>
            <strong>Phone:</strong> 773-985-1420
          </p>
          <p>
            <strong>Email:</strong> office@elginsportsmens.com
          </p>
          <p>
            <strong>Address:</strong> 1435 N McLean Blvd, Elgin, IL
          </p>
        </div>

        <div className="flex-1 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Business Hours</h2>
          <p>
            <strong>Mon - Fri:</strong> 9:00 a.m. - 8:00 p.m.
          </p>
          <p>
            <strong>Saturday:</strong> 9:00 a.m. - 6:00 p.m.
          </p>
          <p>
            <strong>Sunday:</strong> 9:00 a.m. - 5:00 p.m.
          </p>
        </div>
      </div>

      {/* Map */}
      <div className="w-full relative z-[10] max-w-4xl h-96 mt-8 rounded overflow-hidden shadow">
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
