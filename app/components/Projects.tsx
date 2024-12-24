import Link from "next/link";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "FinaTech Platform",
      description:
        "An AI-powered platform for risk assessment tailored for SMEs, leveraging cutting-edge technologies.",
      link: "/projects/finatech",
    },
    {
      title: "Dynamic Pricing Calculator",
      description:
        "A tool designed to revolutionize pricing strategies with real-time data analysis and insights.",
      link: "/projects/pricing-calculator",
    },
    {
      title: "Mathe Delivery System",
      description:
        "A sleek application for order tracking, integrating iOS-like design and enhanced user experience.",
      link: "/projects/mathe",
    },
    {
      title: "Mathe Delivery System",
      description:
        "A sleek application for order tracking, integrating iOS-like design and enhanced user experience.",
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
          Here are some of the exciting projects I&apos;ve worked on. Each
          project is a reflection of my passion for innovation and
          problem-solving.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="backdrop-blur-md bg-white/10 rounded-3xl shadow-lg p-6 transition-transform hover:scale-105"
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-6">{project.description}</p>
            <Link
              href={project.link}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow transition-all duration-300"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
