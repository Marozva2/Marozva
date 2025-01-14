"use client";

import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [feedback, setFeedback] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;

    setFormData((prev) => ({ ...prev, [id]: value }));

    // Dynamic feedback
    if (id === "name") {
      if (value.trim().length > 0) {
        setFeedback((prev) => ({ ...prev, name: "Looks good!" }));
      } else {
        setFeedback((prev) => ({ ...prev, name: "" }));
        setErrors((prev) => ({ ...prev, name: "Name is required." }));
      }
    }

    if (id === "email") {
      if (value.trim().length > 0 && /\S+@\S+\.\S+/.test(value)) {
        setFeedback((prev) => ({ ...prev, email: "Valid email!" }));
        setErrors((prev) => ({ ...prev, email: "" })); // Clear error if valid
      } else if (value.trim() === "") {
        setFeedback((prev) => ({ ...prev, email: "" }));
        setErrors((prev) => ({ ...prev, email: "Email is required." }));
      } else {
        setFeedback((prev) => ({ ...prev, email: "" }));
        setErrors((prev) => ({ ...prev, email: "Invalid email format." }));
      }
    }

    if (id === "message") {
      if (value.trim().length >= 10) {
        setFeedback((prev) => ({ ...prev, message: "Message looks good!" }));
        setErrors((prev) => ({ ...prev, message: "" })); // Clear error if valid
      } else if (value.trim() === "") {
        setFeedback((prev) => ({ ...prev, message: "" }));
        setErrors((prev) => ({ ...prev, message: "Message is required." }));
      } else {
        setFeedback((prev) => ({ ...prev, message: "" }));
        setErrors((prev) => ({
          ...prev,
          message: "Message must be at least 10 characters.",
        }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
    setFeedback({});
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid email is required.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }
    return newErrors;
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-6 md:px-20 dark:bg-gradient-to-b dark:from-gray-900 dark:via-black dark:to-gray-900"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">
          Contact Me
        </h2>
        <p className="text-lg md:text-xl dark:text-gray-300 text-gray-700 max-w-2xl mx-auto mb-12">
          Have a project in mind or just want to say hello? Drop me a message,
          and I&apos;ll get back to you promptly.
        </p>
      </div>

      <form
        className="max-w-3xl mx-auto backdrop-blur-md bg-white/10 rounded-3xl p-8 shadow-lg space-y-6"
        onSubmit={handleSubmit}
      >
        <div>
          <label
            htmlFor="name"
            className="block text-lg font-medium dark:text-gray-300 text-gray-700 mb-2"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className={`w-full py-3 px-4 rounded-lg dark:bg-gray-800/50 bg-gray-200/50 dark:text-gray-100 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 ${
              feedback.name ? "focus:ring-green-400" : "focus:ring-blue-400"
            }`}
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
          {feedback.name && (
            <p className="text-green-400 text-sm mt-1">{feedback.name}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-lg font-medium dark:text-gray-300 text-gray-700 mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full py-3 px-4 rounded-lg dark:bg-gray-800/50 bg-gray-200/50 dark:text-gray-100 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 ${
              feedback.email ? "focus:ring-green-400" : "focus:ring-blue-400"
            }`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
          {feedback.email && (
            <p className="text-green-400 text-sm mt-1">{feedback.email}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-lg font-medium dark:text-gray-300 text-gray-700 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={`w-full py-3 px-4 rounded-lg dark:bg-gray-800/50 bg-gray-200/50 dark:text-gray-100 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 ${
              feedback.message ? "focus:ring-green-400" : "focus:ring-blue-400"
            }`}
            placeholder="Write your message here"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
          {feedback.message && (
            <p className="text-green-400 text-sm mt-1">{feedback.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-lg transition-all duration-300"
        >
          Send Message
        </button>
      </form>

      <div className="flex justify-center mt-12 space-x-6">
        <a
          href="https://www.linkedin.com/in/frankline-isaboke-68460428b"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600 transition"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/Marozva2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-600 transition"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://X.com/FranklineIsabol1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600 transition"
        >
          <FaTwitter size={30} />
        </a>
      </div>
      <div className="absolute right-0 top-5 z-[-1]">
        <svg
          width="238"
          height="531"
          viewBox="0 0 238 531"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="422.819"
            y="-70.8145"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 422.819 -70.8145)"
            fill="url(#paint0_linear_83:2)"
          />
          <rect
            opacity="0.3"
            x="426.568"
            y="144.886"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 426.568 144.886)"
            fill="url(#paint1_linear_83:2)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_83:2"
              x1="517.152"
              y1="-251.373"
              x2="517.152"
              y2="459.865"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_83:2"
              x1="455.327"
              y1="-35.673"
              x2="455.327"
              y2="675.565"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-5 left-0 z-[-1]">
        <svg
          width="279"
          height="106"
          viewBox="0 0 279 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path
              d="M-57 12L50.0728 74.8548C55.5501 79.0219 70.8513 85.7589 88.2373 79.3692C109.97 71.3821 116.861 60.9642 156.615 63.7423C178.778 65.291 195.31 69.2985 205.911 62.3533C216.513 55.408 224.994 47.7682 243.016 49.1572C255.835 50.1453 265.278 50.8936 278 45.3373"
              stroke="url(#paint0_linear_72:302)"
            />
            <path
              d="M-57 1L50.0728 63.8548C55.5501 68.0219 70.8513 74.7589 88.2373 68.3692C109.97 60.3821 116.861 49.9642 156.615 52.7423C178.778 54.291 195.31 58.2985 205.911 51.3533C216.513 44.408 224.994 36.7682 243.016 38.1572C255.835 39.1453 265.278 39.8936 278 34.3373"
              stroke="url(#paint1_linear_72:302)"
            />
            <path
              d="M-57 23L50.0728 85.8548C55.5501 90.0219 70.8513 96.7589 88.2373 90.3692C109.97 82.3821 116.861 71.9642 156.615 74.7423C178.778 76.291 195.31 80.2985 205.911 73.3533C216.513 66.408 224.994 58.7682 243.016 60.1572C255.835 61.1453 265.278 61.8936 278 56.3373"
              stroke="url(#paint2_linear_72:302)"
            />
            <path
              d="M-57 35L50.0728 97.8548C55.5501 102.022 70.8513 108.759 88.2373 102.369C109.97 94.3821 116.861 83.9642 156.615 86.7423C178.778 88.291 195.31 92.2985 205.911 85.3533C216.513 78.408 224.994 70.7682 243.016 72.1572C255.835 73.1453 265.278 73.8936 278 68.3373"
              stroke="url(#paint3_linear_72:302)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_72:302"
              x1="256.267"
              y1="53.6717"
              x2="-40.8688"
              y2="8.15715"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_72:302"
              x1="256.267"
              y1="42.6717"
              x2="-40.8688"
              y2="-2.84285"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_72:302"
              x1="256.267"
              y1="64.6717"
              x2="-40.8688"
              y2="19.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_72:302"
              x1="256.267"
              y1="76.6717"
              x2="-40.8688"
              y2="31.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Contact;
