import React, { useState, useEffect, useCallback } from "react";
import { MdStar, MdFormatQuote, MdArrowBack, MdArrowForward } from "react-icons/md";

const testimonials = [
  {
    name: "Anshika Sharma",
    location: "Delhi",
    avatar: "AS",
    rating: 5,
    text: "MediCure saved my son's life. When he had a severe allergic reaction at midnight, their team delivered the injection in under 12 minutes. I can't imagine what would have happened without them.",
  },
  {
    name: "Rajesh Verma",
    location: "Mumbai",
    avatar: "RV",
    rating: 5,
    text: "My father needed a rare injection that no pharmacy in our area had. MediCure found it at a verified hospital and delivered it the same day. Absolutely incredible service.",
  },
  {
    name: "Priya Nair",
    location: "Bangalore",
    avatar: "PN",
    rating: 5,
    text: "Living away from family, MediCure gives me peace of mind. I ordered insulin for my diabetic mother in Chennai and it reached her within 20 minutes. The tracking feature is fantastic.",
  },
  {
    name: "Amit Patel",
    location: "Ahmedabad",
    avatar: "AP",
    rating: 5,
    text: "As a physician myself, I'm impressed by MediCure's commitment to verified suppliers. I recommend it to all my patients who need emergency medications.",
  },
  {
    name: "Sneha Reddy",
    location: "Hyderabad",
    avatar: "SR",
    rating: 5,
    text: "During the floods, MediCure was the only service that managed to reach us. They navigated waterlogged streets to deliver critical medicines. True heroes.",
  },
];

const gradients = [
  "from-blue-500 to-cyan-500",
  "from-teal-500 to-emerald-500",
  "from-violet-500 to-purple-500",
  "from-amber-500 to-orange-500",
  "from-rose-500 to-pink-500",
];

const Testimonies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next, isPaused]);

  return (
    <section
      className="py-20 lg:py-28 bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-primary-600 text-sm font-semibold tracking-wide uppercase">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight">
            What people say
          </h2>
          <p className="mt-3 text-neutral-500 text-lg max-w-xl mx-auto">
            Real stories from families whose lives were changed
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-neutral-50 rounded-3xl p-8 md:p-12 border border-neutral-100">
            {/* Quote icon */}
            <MdFormatQuote className="absolute top-6 right-6 text-5xl text-primary-100" />

            {/* Stars */}
            <div className="flex gap-0.5 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <MdStar key={i} className="text-lg text-amber-400" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed mb-8">
              "{testimonials[currentIndex].text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-full bg-gradient-to-br ${
                  gradients[currentIndex % gradients.length]
                } flex items-center justify-center text-white text-sm font-bold`}
              >
                {testimonials[currentIndex].avatar}
              </div>
              <div>
                <p className="font-bold text-neutral-900">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-sm text-neutral-500">
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-600 hover:border-neutral-300 transition-all"
              aria-label="Previous"
            >
              <MdArrowBack />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "w-6 bg-primary-500"
                      : "w-2 bg-neutral-200 hover:bg-neutral-300"
                  }`}
                  aria-label={`Go to ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-600 hover:border-neutral-300 transition-all"
              aria-label="Next"
            >
              <MdArrowForward />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
