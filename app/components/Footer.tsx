import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import Footerdeco from "../Decorations/Footerdeco";

const Footer: React.FC = () => {
  return (
    <>
      <Footerdeco />
      <footer className="relative dark:bg-gray-900 bg-gray-300 py-12 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and About */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-blue-400">Marozva Smith</h1>
            <p className="text-sm">
              Crafting innovative solutions, one line of code at a time. Thank
              you for visiting my space of creativity and technology.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold dark:text-white">
              Quick Links
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="hover:text-blue-400 transition duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-blue-400 transition duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-400 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold dark:text-white">Follow Me</h2>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://twitter.com/FranklineIsabo1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition duration-300"
                >
                  <FaTwitter size={30} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/frankline-isaboke-68460428b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition duration-300"
                >
                  <FaLinkedin size={30} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Marozva2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition duration-300"
                >
                  <FaGithub size={30} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/marozva5544/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition duration-300"
                >
                  <FaInstagram size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Marozva Smith. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
