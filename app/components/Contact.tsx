import React from "react";

const Contact: React.FC = () => {
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

      <form className="max-w-3xl mx-auto backdrop-blur-md bg-white/10 rounded-3xl p-8 shadow-lg space-y-6">
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
            className="w-full py-3 px-4 rounded-lg bg-gray-800/50 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your name"
          />
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
            className="w-full py-3 px-4 rounded-lg bg-gray-800/50 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
          />
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
            className="w-full py-3 px-4 rounded-lg bg-gray-800/50 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Write your message here"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-lg transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
