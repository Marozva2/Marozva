import React from "react";
import Link from "next/link";

const Blog: React.FC = () => {
  const blogs = [
    {
      id: 1,
      title: "How to Build Modern Web Apps",
      description: "Tips and tricks for efficient development.",
      date: "December 15, 2024",
    },
    {
      id: 2,
      title: "Top Actuarial Models for Risk Analysis",
      description: "Leverage powerful tools to analyze uncertainties.",
      date: "December 10, 2024",
    },
    {
      id: 3,
      title: "Mastering iOS Design",
      description: "Blend aesthetics and functionality seamlessly.",
      date: "December 5, 2024",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-10 text-center">
          Latest Articles
        </h2>
        <div className="grid gap-6">
          {blogs.map(({ id, title, description, date }) => (
            <div
              key={id}
              className="bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
              <p className="text-gray-300 mb-4">{description}</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">{date}</span>
                <Link
                  href={`/blog/${id}`}
                  className="text-blue-400 hover:text-blue-500 text-sm font-medium"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
