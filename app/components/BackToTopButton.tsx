"use client";

import React, { useEffect, useState } from "react";

const BackToTopButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  // Show the button when the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <button
        onClick={handleClick}
        className="fixed bottom-6 right-6 bg-white/30 backdrop-blur-md rounded-full p-4 shadow-xl transform hover:scale-110 transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-blue-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5L12 3m0 0L4.5 10.5M12 3v18"
          />
        </svg>
      </button>
    )
  );
};

export default BackToTopButton;
