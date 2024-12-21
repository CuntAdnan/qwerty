"use client"
import { useState } from 'react';

const industries = [
  {
    title: "Sports",
    description: "From fitness studios to sports academies, Rmax empowers sports businesses",
    image: "/sports-image.jpg"
  },
  {
    title: "Healthcare & Wellness",
    description: "Health and wellness service providers—from yoga instructors and gyms",
    image: "/healthcare-image.jpg"
  },
  {
    title: "Learning Activites",
    description: "Tutors, educators, and learning centers—from music schools to art studios",
    image: "/learning-image.jpg"
  }
];

export const IndustriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? industries.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === industries.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Empowering Service Providers
          <br />
          Across Industries
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg max-w-3xl mx-auto">
          Whether you're in sports, education, wellness, household services, or niche markets, our technology simplifies your business operations, making it easier for you to focus on what you do best.
        </p>

        <div className="relative flex items-center">
          <button 
            onClick={handlePrevious}
            className="absolute left-0 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-50"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="mx-auto max-w-xl bg-white rounded-xl overflow-hidden">
            <div className="h-80 overflow-hidden">
              <img 
                src={industries[currentIndex].image}
                alt={industries[currentIndex].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{industries[currentIndex].title}</h3>
              <p className="text-gray-600 mb-4">{industries[currentIndex].description}</p>
              <div className="flex items-center text-blue-600 hover:text-blue-700 cursor-pointer">
                <span className="font-medium">Know more</span>
                
              </div>
            </div>
          </div>

          <button 
            onClick={handleNext}
            className="absolute right-0 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-50"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

