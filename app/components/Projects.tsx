"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<
    null | (typeof projects)[0]
  >(null);

  const projects = [
    {
      title: "FinaTech Platform",
      description:
        "An AI-powered platform for risk assessment tailored for SMEs, leveraging cutting-edge technologies.",
      techStack: ["React", "Python", "Flask", "TailwindCSS"],
      role: "Full-Stack Developer",
      preview: "/images/finatech-preview.gif",
      link: "/projects/finatech",
    },
    {
      title: "Dynamic Pricing Calculator",
      description:
        "A tool designed to revolutionize pricing strategies with real-time data analysis and insights.",
      techStack: ["Next.js", "TypeScript", "Chart.js"],
      role: "Frontend Engineer",
      preview: "/images/pricing-calculator-preview.gif",
      link: "/projects/pricing-calculator",
    },
    {
      title: "Mathe Delivery System",
      description:
        "A sleek application for order tracking, integrating iOS-like design and enhanced user experience.",
      techStack: ["React Native", "Node.js", "MongoDB"],
      role: "UI/UX Designer",
      preview: "/images/mathe-preview.gif",
      link: "/projects/mathe",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-20 px-6 md:px-20 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-12">
          Projects
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
          Explore some of the exciting projects I&apos;ve crafted. Each one
          demonstrates a blend of innovation and meticulous problem-solving.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative backdrop-blur-md bg-white/10 rounded-3xl shadow-lg overflow-hidden transform transition-all hover:scale-105 cursor-pointer group"
            onClick={() => setSelectedProject(project)}
          >
            <Image
              src={project.preview}
              alt={`${project.title} preview`}
              width={400}
              height={250}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-gray-800 text-white rounded-3xl shadow-lg max-w-3xl w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 bg-gray-600 hover:bg-gray-500 text-white rounded-full p-2"
            >
              ✕
            </button>
            <h3 className="text-3xl font-bold text-blue-400 mb-4">
              {selectedProject.title}
            </h3>
            <Image
              src={selectedProject.preview}
              alt={`${selectedProject.title} preview`}
              width={600}
              height={400}
              className="w-full rounded-md mb-6"
            />
            <p className="text-gray-300 mb-4">{selectedProject.description}</p>
            <p className="text-gray-300 mb-2">
              <span className="font-semibold">Role:</span>{" "}
              {selectedProject.role}
            </p>
            <p className="text-gray-300">
              <span className="font-semibold">Tech Stack:</span>{" "}
              {selectedProject.techStack.join(", ")}
            </p>
            <div className="mt-6 text-center">
              <Link
                href={selectedProject.link}
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded-full shadow transform hover:scale-105 transition-all duration-300"
              >
                View Full Details
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
