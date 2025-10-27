import React from "react";
import { RiLightbulbFlashLine, RiBookLine, RiBarChart2Line, RiMapLine } from "react-icons/ri";

const Features = () => {
  const features = [
    {
      title: "Career Recommendations",
      description: "Get AI-powered suggestions for the best career paths based on your profile and interests.",
      icon: <RiLightbulbFlashLine className="text-blue-500 w-10 h-10" />
    },
    {
      title: "Course Recommendations",
      description: "Discover courses and learning resources that help you gain relevant skills efficiently.",
      icon: <RiBookLine className="text-yellow-500 w-10 h-10" />
    },
    {
      title: "Skill Gap Analysis",
      description: "Analyze your current skills and find out what you need to reach your career goals.",
      icon: <RiBarChart2Line className="text-purple-500 w-10 h-10" />
    },
    {
      title: "Personalized Roadmap",
      description: "Receive a step-by-step roadmap tailored to your career aspirations and learning pace.",
      icon: <RiMapLine className="text-green-500 w-10 h-10" />
    },
  ];

  return (
    <section id="features" className="py-10 px-3 bg-gray-100 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          What We Can Assist You With
        </h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
          Our platform provides personalized AI guidance to help you discover the best career and learning paths.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border transition-all duration-300 relative overflow-hidden 
                       group hover:scale-105 dark:hover:shadow-xl  dark:hover:shadow-black
                       shadow-lg dark:shadow-2xl 
                       border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
          >
            {/* Card content */}
            <div className="relative z-10 flex flex-col items-start space-y-4 text-gray-900 dark:text-white">
              <div>{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
