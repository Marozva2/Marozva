import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gray-900 text-gray-300 py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand and About */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-blue-400">Marozva Smith</h1>
          <p className="text-sm">
            Crafting innovative solutions, one line of code at a time. Thank you
            for visiting my space of creativity and technology.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-white">Quick Links</h2>
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
          <h2 className="text-lg font-semibold text-white">Follow Me</h2>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5.5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v5h-4v-5a2 2 0 0 0-4 0v5h-4v-5a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.43c.58.11.79-.25.79-.56v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.66-.3-5.47-1.33-5.47-5.93a4.65 4.65 0 0 1 1.24-3.24 4.3 4.3 0 0 1 .11-3.19s1-.33 3.29 1.23a11.5 11.5 0 0 1 6 0c2.29-1.56 3.29-1.23 3.29-1.23.42 1.28.16 2.54.08 2.8a4.65 4.65 0 0 1 1.24 3.24c0 4.61-2.81 5.63-5.48 5.93.41.36.76 1.08.76 2.18v3.24c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Marozva Smith. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
