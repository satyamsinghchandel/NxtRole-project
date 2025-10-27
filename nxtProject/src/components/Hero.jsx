import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Hero = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="hero"
      className={`flex flex-col md:flex-row mt-5 items-center justify-between px-6 md:px-20 py-24 bg-gray-50 dark:bg-gray-900 transition-colors`}
    >
      {/* Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
          NxtRole.AI – Career Guidance & Roadmap Generator
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl">
          AI-powered platform that helps students and professionals find the right career path,
          discover job roles, and learn skills to grow.
        </p>
        <a
          href="#features"
          className="inline-block px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-indigo-700"
        >
          Explore Now
        </a>
      </div>

      {/* Image*/}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src="https://images.pexels.com/photos/8828426/pexels-photo-8828426.jpeg"
          alt="NxtRole AI"
          className="rounded-xl shadow-xl"
        />
      </div>
    </section>
  );
};

export default Hero;
