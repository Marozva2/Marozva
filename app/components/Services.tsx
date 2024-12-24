import React from "react";

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Custom Software Solutions",
      description:
        "Tailored applications built to address your unique business challenges.",
      icon: "🚀",
    },
    {
      id: 2,
      title: "Risk Analysis Tools",
      description:
        "Advanced actuarial models for precise and efficient risk assessment.",
      icon: "📊",
    },
    {
      id: 3,
      title: "Innovative Design",
      description:
        "Seamless user experiences with a focus on modern, responsive design.",
      icon: "🎨",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-400 text-center mb-10">
          What I Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map(({ id, title, description, icon }) => (
            <div
              key={id}
              className="bg-gray-900/50 backdrop-blur-md shadow-lg p-6 rounded-xl text-center"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
              <p className="text-gray-300">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
