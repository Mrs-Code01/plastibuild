"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const Partners = () => {
  const region = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "Federal Capital Territory (Abuja)",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara"
  ];

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    location: ""
  });

  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({ message: "", type: "" });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("/api/partnersform", formData);
      setPopup({ message: res.data.message, type: "success" });
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phonenumber: "",
        location: ""
      });
    } catch (err) {
      setPopup({ message: "Error submitting form", type: "error" });
    } finally {
      setLoading(false);
      setTimeout(() => setPopup({ message: "", type: "" }), 3000);
    }
  };

  return (
    <section className="w-full bg-[#DAD7CD] py-[100px] px-[5%] flex justify-center">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-[60%] bg-white rounded-[10px] p-[50px]"
      >
        <h2 className="font-catamaran text-center text-[35px] mb-[5px]">
          Become A Partner
        </h2>
        <p className="font-raleway text-center text-[16px] mb-[35px]">
          We continue to grow with the support of additional private sector
          partners, grassroots organizations, community leaders, innovation
          hubs, and climate-focused networks who fuel our mission.
        </p>

        <form onSubmit={handleSubmit} className="font-raleway w-full">
          {/* First & Last Name */}
          <div className="w-full flex flex-wrap justify-between">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={formData.firstname}
              onChange={handleChange}
              required
              className="w-[48%]  h-[50px] border border-gray-300 rounded-[5px] px-[15px] text-[16px] mb-[20px] focus:outline-none focus:ring-1 focus:ring-black"
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={handleChange}
              required
              className="w-[48%]  h-[50px] border border-gray-300 rounded-[5px] px-[15px] text-[16px] mb-[20px] focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full h-[50px] border border-gray-300 rounded-[5px] px-[15px] text-[16px] mb-[20px] focus:outline-none focus:ring-1 focus:ring-black"
          />

          {/* Phone Number */}
          <input
            type="tel"
            name="phonenumber"
            placeholder="Phone Number"
            value={formData.phonenumber}
            onChange={handleChange}
            required
            className="w-full h-[50px] border border-gray-300 rounded-[5px] px-[15px] text-[16px] mb-[20px] focus:outline-none focus:ring-1 focus:ring-black"
          />

          {/* Location Select */}
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full h-[50px] border border-gray-300 rounded-[5px] px-[15px] text-[16px] mb-[20px] focus:outline-none focus:ring-1 focus:ring-black cursor-pointer"
          >
            <option value="">Select Location</option>
            {region.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="cursor-pointer w-full h-[55px] bg-black text-white rounded-[5px] text-[18px] font-semibold transition-colors disabled:opacity-50"
          >
            {loading ? "Sending Application..." : "Apply"}
          </button>

          {/* Popup */}
          {popup.message && (
            <div
              className={`font-raleway mt-[25px] rounded-[8px] p-[10px] text-[18px] text-center ${
                popup.type === "success"
                  ? "bg-green-100 text-green-700 border border-green-300"
                  : "bg-red-100 text-red-700 border border-red-300"
              }`}
            >
              {popup.message}
            </div>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default Partners;
