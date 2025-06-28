import { FaUsers, FaHandshake, FaPlusCircle, FaFlag, FaLightbulb } from "react-icons/fa";

const ValuesSection = () => {
  const values = [
    {
      title: "Patient Centricity",
      icon: <FaUsers className="text-4xl text-purple-400" />,
      points: [
        "Commit to ‘best outcomes and experience’ for our patients",
        "Treat patients and their caregivers with compassion, care",
        "Our patients’ needs will come first",
      ],
    },
    {
      title: "Integrity",
      icon: <FaHandshake className="text-4xl text-purple-400" />,
      points: [
        "Be principled, open and honest",
        "Model and live our ‘Values’",
        "Demonstrate moral courage to speak up and do the right things",
      ],
    },
    {
      title: "Teamwork",
      icon: <FaPlusCircle className="text-4xl text-purple-400" />,
      points: [
        "Proactively support each other and operate as one team",
        "Respect and value people at all levels with different opinions, experiences and backgrounds",
        "Demonstrate moral courage to speak up and do the right things",
      ],
    },
    {
      title: "Ownership",
      icon: <FaFlag className="text-4xl text-purple-400" />,
      points: [
        "Be responsible and take pride in our actions",
        "Take initiative and go beyond the call of duty",
        "Deliver commitment and agreement made",
      ],
    },
    {
      title: "Innovation",
      icon: <FaLightbulb className="text-4xl text-purple-400" />,
      points: [
        "Continuously improve and innovate to exceed expectations",
        "Adopt a ‘can-do’ attitude",
        "Challenge ourselves to do things differently",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Values</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {values.map((val, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 border border-purple-100 hover:shadow-lg transition"
          >
            <div className="flex items-start gap-4 mb-4">
              <div>{val.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{val.title}</h3>
            </div>
            <ul className="list-disc list-inside text-gray-700 pl-2">
              {val.points.map((point, idx) => (
                <li key={idx} className="mb-1">{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValuesSection;
