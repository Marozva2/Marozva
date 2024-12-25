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
      className="relative py-20 px-6 md:px-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">
          Contact Me
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
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
            className="block text-lg font-medium text-gray-300 mb-2"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className={`w-full py-3 px-4 rounded-lg bg-gray-800/50 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 ${
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
            className="block text-lg font-medium text-gray-300 mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full py-3 px-4 rounded-lg bg-gray-800/50 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 ${
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
            className="block text-lg font-medium text-gray-300 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={`w-full py-3 px-4 rounded-lg bg-gray-800/50 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 ${
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
          className="text-blue-400 hover:text-blue-300 transition"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/Marozva2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-300 transition"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://X.com/Marozva2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition"
        >
          <FaTwitter size={30} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
