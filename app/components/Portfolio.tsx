import Image from "next/image";

const Portfolio: React.FC = () => {
  const projects = [
    {
      id: 1,
      name: "FinaTech",
      description:
        "Interactive actuarial tools for risk and financial modeling.",
      image: "/images/finatech.png",
    },
    {
      id: 2,
      name: "DevOps Showcase",
      description: "A comprehensive platform demonstrating DevOps skills.",
      image: "/images/devops.png",
    },
    {
      id: 3,
      name: "iOS Design Portfolio",
      description: "A gallery of seamless, user-centric iOS designs.",
      image: "/images/iosdesign.png",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-10">
          My Work
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map(({ id, name, description, image }) => (
            <div key={id} className="rounded-xl shadow-lg overflow-hidden">
              <Image
                src={image}
                alt={name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 bg-gray-800 text-left">
                <h3 className="text-2xl font-bold text-white">{name}</h3>
                <p className="text-gray-300 mt-2">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
