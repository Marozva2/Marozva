import React from "react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white h-screen flex flex-col"
      id="hero"
    >
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 py-4 px-6 md:px-20 flex justify-between items-center z-10">
        <h1 className="text-2xl font-bold text-blue-400">Marozva Smith</h1>
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li>
            <Link
              href="#about"
              className="hover:text-blue-400 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="hover:text-blue-400 transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
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
      <div className="flex-grow flex flex-col items-center justify-center text-center px-6 md:px-20 space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-400 leading-tight">
          Building Dreams <br /> One Line of Code at a Time
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          I am Marozva Smith, a Software Engineer passionate about crafting
          solutions that matter. Welcome to my world of creativity and
          technology.
        </p>
        <div className="flex justify-center gap-6">
          <Link
            href="#about"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-full shadow-md transform hover:scale-105 transition-all duration-300"
          >
            About Me
          </Link>
          <Link
            href="#projects"
            className="border border-gray-600 hover:border-white text-gray-300 hover:text-white font-semibold py-3 px-6 rounded-full shadow-md transform hover:scale-105 transition-all duration-300"
          >
            View Projects
          </Link>
        </div>
      </div>

      {/* Bottom: Scroll Down Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
        <Link
          href="#about"
          className="animate-bounce text-blue-400 hover:text-blue-500 transition-all"
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
