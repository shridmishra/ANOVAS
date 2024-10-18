"use client";

import React, { useState } from "react";
import { AiOutlineMail, AiOutlineUser, AiOutlineMessage, AiOutlineSend } from "react-icons/ai";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required.";
    if (!formData.email) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is not valid.";
    }
    if (!formData.message) tempErrors.message = "Message is required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission logic
      setIsSubmitted(true);
    }
  };

  return (
    <div className="py-10 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-sora font-bold">Contact Us</h1>
        </div>

        {isSubmitted ? (
          <div className="text-center text-green-400 text-2xl">
            Thank you! Your message has been sent.
          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-center justify-between md:space-x-10">
            {/* Contact Form */}
            <div className="w-full md:w-1/2">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center w-full bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-lg text-white space-y-6"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                {/* Name */}
                <div className="w-full">
                  <label className="flex items-center mb-2 text-lg">
                    <AiOutlineUser className="mr-2 text-2xl" />
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className={`w-full px-4 py-2 rounded-lg bg-black bg-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div className="w-full">
                  <label className="flex items-center mb-2 text-lg">
                    <AiOutlineMail className="mr-2 text-2xl" />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className={`w-full px-4 py-2 rounded-lg bg-black bg-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div className="w-full">
                  <label className="flex items-center mb-2 text-lg">
                    <AiOutlineMessage className="mr-2 text-2xl" />
                    Message
                  </label>
                  <textarea
                    name="message"
                    className={`w-full h-32 px-4 py-2 rounded-lg bg-black bg-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg hover:bg-purple-700 transition-all duration-300 text-lg"
                >
                  Send Message
                  <AiOutlineSend className="ml-2 text-2xl" />
                </button>
              </form>
            </div>

            
          </div>
        )}
      </div>
    </div>
  );
};
