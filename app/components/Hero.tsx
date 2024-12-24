import React from "react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white h-screen flex flex-col items-center justify-center"
      id="hero"
    >
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 py-6 px-8 md:px-20 flex justify-between items-center z-10 rounded-xl shadow-lg">
        <h1 className="text-3xl font-semibold text-blue-400 tracking-tight">
          Marozva Smith
        </h1>
        <div className="hidden md:flex backdrop-blur-lg gap-8 text-lg font-medium bg-white/20 p-3 rounded-full">
          <Link
            href="#about"
            className="text-gray-200 hover:text-blue-400 transition-all duration-300"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-gray-200 hover:text-blue-400 transition-all duration-300"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-gray-200 hover:text-blue-400 transition-all duration-300"
          >
            Contact
          </Link>
        </div>
        <button className="block md:hidden text-gray-300 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
            />
          </svg>
        </button>
      </nav>

      {/* Center Content */}
      <div className="text-center px-6 md:px-20 space-y-8">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
          Building Dreams <br /> One Line of Code at a Time
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          I am Marozva Smith, a Software Engineer passionate about crafting
          solutions that matter. Welcome to my world of creativity and
          technology.
        </p>
        <div className="flex justify-center gap-6">
          <Link href="#about">
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
              About Me
            </button>
          </Link>
          <Link href="#projects">
            <button className="bg-transparent border border-gray-600 text-gray-300 hover:border-white hover:text-white font-semibold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
              View Projects
            </button>
          </Link>
        </div>
      </div>

      {/* Bottom: Scroll Down Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
        <Link
          href="#about"
          className="animate-bounce text-blue-400 hover:text-blue-500 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5L12 21m0 0L4.5 13.5M12 21V3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
