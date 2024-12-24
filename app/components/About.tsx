import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-6 md:px-20 bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white"
    >
      {/* Glassmorphic Card */}
      <div className="max-w-5xl mx-auto backdrop-blur-lg bg-white/10 rounded-3xl shadow-lg p-8 md:p-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-400 mb-8">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
          Greetings! I am <span className="text-blue-400">Marozva Smith</span>,
          a passionate Software Engineer with a keen interest in bridging
          technology and creativity. From crafting sleek user interfaces to
          solving complex back-end problems, I find joy in the art of coding.
        </p>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
          I also have a deep appreciation for actuarial science, leveraging
          technology to evaluate risks and provide meaningful insights.
          Combining my technical skills with an analytical mindset, I strive to
          build solutions that make an impact.
        </p>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Outside work, I indulge in my love for vintage aesthetics, music, and
          languages. Whether it’s building innovative projects or exploring new
          hobbies, I’m always eager to learn and grow.
        </p>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
          Explore My Projects
        </button>
      </div>
    </section>
  );
};

export default About;
