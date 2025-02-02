"use client"

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Switching to electric buses for our fleet has been a game-changer! With reduced operating costs and zero emissions, we’re not just saving money—we’re saving the planet. Our customers love the eco-friendly approach too!",
    author: "Adebola A.",
    title: "Logistics Manager",
    company: "GreenHaul Nigeria"
  },
  {
    quote: "Investing in this green venture has been both rewarding and impactful. The returns are solid, and knowing this investment contributes to a cleaner future gives me immense satisfaction.",
    author: "Ngozi E.",
    title: "Urban Developer",
    company: ""
  },
  {
    quote: "The Ozone Prepaid Card makes fueling so easy! No more cash hassles or inflated prices. I get discounts and manage my expenses efficiently—it's a win-win!",
    author: "James T.",
    title: "Ride Hailing Driver",
    company: ""
  },
  {
    quote: "Converting my vehicle to autogas was the best decision I made. It's cheaper, cleaner, and better for the environment. Plus, the installation process was smooth and professional.",
    author: "Chinedu I.",
    title: "Small Business Owner",
    company: ""
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const getNextIndex = (current: number) => current === testimonials.length - 1 ? 0 : current + 1;
  const getPrevIndex = (current: number) => current === 0 ? testimonials.length - 1 : current - 1;

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(getPrevIndex);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(getNextIndex);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="mx-auto px-8 md:px-16 py-16 md:py-28">
      <div className="mb-12">
        <h2 className="text-4xl md:text-6xl mb-4">What Our Customers <br /> Say</h2>
        <p className="text-gray-600">
          Real stories from individuals and businesses embracing sustainable mobility and energy solutions.
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out gap-6"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="min-w-full flex gap-6">
              {/* Current Slide */}
              <div className="md:w-[70%] bg-white rounded-lg">
                <blockquote className="text-lg md:text-2xl mb-8 md:max-w-4xl">
                  {testimonial.quote}
                </blockquote>
                
                <div className="text-gray-600">
                  <p className="font-semibold">{testimonial.author}</p>
                  {testimonial.title && <p>{testimonial.title}</p>}
                  {testimonial.company && <p>{testimonial.company}</p>}
                </div>
              </div>

              {/* Preview of Next Slide */}
              <div className="w-[15%] bg-white rounded-lg p-8 hidden text-gray-300">
                <blockquote className="text-xl line-clamp-3">
                  {testimonials[getNextIndex(index)].quote}
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-8 right-8 flex justify-between gap-2 z-10">
          <button 
            onClick={goToPrevious}
            disabled={isAnimating}
            className="p-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors disabled:opacity-50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={goToNext}
            disabled={isAnimating}
            className="p-2 bg-black hover:bg-gray-800 text-white rounded-lg transition-colors disabled:opacity-50"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;