import Image from "next/image";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jane Doe",
      feedback:
        "This platform has truly revolutionized how I approach projects. Highly recommended!",
      image: "/images/s.png",
    },
    {
      id: 2,
      name: "John Smith",
      feedback: "An absolute game-changer. I can’t imagine working without it!",
      image: "/images/s.png",
    },
    {
      id: 3,
      name: "Alice Brown",
      feedback: "Exceptional quality and s experience. Kudos to the team!",
      image: "/images/s.png",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-10">
          What People Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(({ id, name, feedback, image }) => (
            <div
              key={id}
              className="bg-gray-900/50 backdrop-blur-md shadow-lg p-6 rounded-xl text-left transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={image}
                  alt={`Portrait of ${name}`}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="/images/user.png"
                />
                <div>
                  <h3 className="font-bold text-xl text-white">{name}</h3>
                </div>
              </div>
              <p className="text-gray-300 italic line-clamp-3">
                {`${feedback}`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
