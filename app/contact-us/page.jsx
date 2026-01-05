"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useForm, ValidationError } from "@formspree/react";

// Import Leaflet CSS
import "leaflet/dist/leaflet.css";

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

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const [userLocation, setUserLocation] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const [submittedEmails, setSubmittedEmails] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  // Formspree hook
  const [state, handleSubmitFormspree] = useForm("xnjnbdkp");

  useEffect(() => {
    setIsClient(true);

    // Fix Leaflet default icon issue with Next.js
    if (typeof window !== "undefined") {
      const L = require("leaflet");
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
        iconUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png"
      });
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          setUserLocation([pos.coords.latitude, pos.coords.longitude]);
        },
        () => {
          // Fallback to Lagos coordinates based on the address in your form
          setUserLocation([6.4698, 3.3792]); // Lagos, Nigeria
        }
      );
    } else {
      setUserLocation([6.4698, 3.3792]);
    }
  }, []);

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();

    // Check for duplicate email
    if (submittedEmails.includes(formData.email)) {
      setSuccessMessage("You have already submitted this email before.");
      setTimeout(() => setSuccessMessage(""), 10000);
      return;
    }

    await handleSubmitFormspree(e); // call Formspree

    // Safe check for errors
    if (!state.errors || state.errors.length === 0) {
      setSubmittedEmails(prev => [...prev, formData.email]);
      setSuccessMessage("Thanks for reaching out! We'll get back to you soon.");
      setFormData({ name: "", phone: "", email: "", message: "" }); // clear all fields
      setTimeout(() => setSuccessMessage(""), 10000);
    }
  };

  return (
    <div className="w-full font-raleway flex flex-col items-center md:p-8 bg-gray-100">
      <h2 className="font-catamaran w-full md:w-[50%] text-[35px] max-[700px]:text-[30px] pt-[150px] text-center mb-2">
        Contact Us
      </h2>
      <p className="font-raleway w-full md:w-[50%] text-[17px] text-center mb-6 px-4 max-[700px]:text-[15px]">
        If you have any questions, feel free to reach out via phone, text,
        email, the form below, or social media!
      </p>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[90%] md:w-[65%] bg-white py-[60px] px-[30px] rounded-[10px]"
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
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number*"
          value={formData.phone}
          onChange={handleChange}
          className="border border-gray-300 py-[13px] px-[12px] rounded-[5px] mb-[15px]"
          required
        />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />

        <input
          type="email"
          name="email"
          placeholder="Enter your email*"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 py-[13px] px-[12px] rounded-[5px] mb-[15px]"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <textarea
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          className="border border-gray-300 py-[13px] h-[150px] px-[12px] rounded-[5px] mb-[15px]"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button
          type="submit"
          disabled={state.submitting}
          className="bg-[#000000] text-white py-[13px] px-4 rounded hover:bg-gray-800 transition disabled:opacity-50"
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>

        {/* Success / Error message */}
        {successMessage && (
          <p
            className={`text-sm mt-4 text-center ${
              successMessage.includes("already")
                ? "text-red-500"
                : "text-green-500"
            }`}
          >
            {successMessage}
          </p>
        )}
      </form>

      {/* Info Sections */}
      <div className="w-[90%] md:w-[65%] flex flex-col md:flex-row justify-between my-[50px] gap-4">
        <div className="rounded-[10px] p-[20px] bg-[#ffffff] w-full md:w-[48%]">
          <h2 className="font-catamaran text-[20px] mb-[8px]">
            Contact Information
          </h2>
          <p>
            <strong>Phone:</strong> +234 7086170247
          </p>
          <p>
            <strong>Email:</strong> plastibuildcreatives@gmail.com
          </p>
          <p>
            <strong>Address:</strong> Nipost Workshop Services Compound, Next to
            LAWMA HEADQUARTERS, Ijora Olopa, Lagos
          </p>
        </div>

        <div className="rounded-[10px] p-[20px] bg-[#ffffff] w-full md:w-[48%]">
          <h2 className="font-catamaran text-[20px] mb-[8px]">
            Business Hours
          </h2>
          <p>
            <strong>Mon - Fri:</strong> 9:00 a.m. - 5:00 p.m.
          </p>
        </div>
      </div>

      {/* Map */}
      <div className="w-[90%] md:w-[65%] relative z-[10] max-w-4xl h-96 mb-[100px] rounded overflow-hidden shadow">
        {isClient && userLocation && (
          <MapContainer
            center={userLocation}
            zoom={13}
            className="h-full w-full"
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://carto.com/">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
              maxZoom={19}
              subdomains={["a", "b", "c", "d"]}
            />
            <Marker position={userLocation}>
              <Popup>You are here</Popup>
            </Marker>
          </MapContainer>
        )}
        {!userLocation && (
          <div className="h-full w-full flex items-center justify-center bg-gray-200">
            <p>Loading map...</p>
          </div>
        )}
      </div>
    </div>
  );
}
