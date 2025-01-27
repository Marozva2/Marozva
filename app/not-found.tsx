import React from "react";
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <section className="h-screen dark:bg-gradient-to-b dark:from-black dark:via-gray-900 dark:to-gray-800 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-extrabold text-blue-400">404</h1>
      <p className="text-2xl dark:text-gray-300 text-gray-700 mb-6">
        Oops! Page not found.
      </p>
      <Link href="/">
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
          Go Back Home
        </button>
      </Link>
    </section>
  );
};

export default NotFound;
