import Image from "next/image";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-6 md:px-20 dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-black dark:text-white"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Left Column: Text */}
        <div className="space-y-6">
          <h2 className="text-5xl font-bold text-blue-400 mb-4">About Me</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Hello! I am <span className="text-blue-400">Marozva Smith</span>, a
            passionate Software Engineer blending creativity with technology.
            From designing captivating user experiences to solving intricate
            backend challenges, I take pride in building solutions that matter.
          </p>
          <p className="text-lg dark:text-gray-300 text-gray-700 leading-relaxed">
            With a flair for actuarial science, I explore the intersection of
            analytics and innovation, crafting tools that demystify risks for
            businesses. Outside the tech world, I revel in vintage aesthetics,
            music, and learning new languages.
          </p>
          <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
            Explore My Projects
          </button>
        </div>

        <div className="relative flex justify-center items-center">
          <Image
            src="/images/marozva.jpg"
            width={288}
            height={288}
            alt="Marozva Smith"
            className="rounded-full shadow-xl border-4 border-blue-400 w-72 h-72 object-cover hover:scale-105 transition-transform duration-300"
          />
          {/* Decorative Circle */}
          <div className="absolute w-80 h-80 rounded-full bg-blue-400/20 blur-xl animate-pulse"></div>
        </div>
      </div>

      {/* Fun Facts */}
      <div className="mt-16 max-w-4xl mx-auto p-8 dark:bg-white/10 bg-white/90 dark:backdrop-blur-lg rounded-3xl shadow-lg">
        <h3 className="text-3xl font-bold text-center text-blue-400 mb-6">
          Fun Facts About Me
        </h3>
        <ul className="list-disc list-inside space-y-4 dark:text-gray-300 text-gray-700 text-lg leading-relaxed">
          <li>
            I am a connoisseur of all things vintage – from fashion to cars.
          </li>
          <li>
            Music keeps my world spinning; I play the violin and adore hymnals.
          </li>
          <li>I&apos;m learning Japanese—on my way to mastering Hiragana!</li>
          <li>
            Actuarial Science is my analytical playground; risk evaluation is my
            forte.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
