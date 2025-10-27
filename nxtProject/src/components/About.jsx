import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
    
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About NxtRole.AI
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            NxtRole.AI is an AI-powered platform dedicated to helping students and professionals 
            discover the best career paths. Our vision is to empower individuals by providing 
            personalized guidance, skill analysis, and actionable roadmaps so they can achieve 
            their professional goals efficiently and confidently.
          </p>
        </div>

       
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="https://hr1vietnam.com/htdocs/images/owners/hr1vietnam/news/202312/notResize/notResize_246_1676451752.jpg"
            alt="About Illustration" 
            className="w-full max-w-md rounded-xl shadow-lg dark:shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
