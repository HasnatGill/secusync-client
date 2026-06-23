import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function TestimonialSlider({ testimonials }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto transition every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  if (!testimonials || testimonials.length === 0) return null;
  const active = testimonials[activeIndex];

  return (
    <div className="relative mx-auto max-w-4xl px-4 py-8">
      {/* Testimonial Panel */}
      <div className="relative overflow-hidden min-h-[220px] flex items-center justify-center text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Big quote mark */}
            <span className="block text-6xl text-primary/10 font-serif leading-none h-4">“</span>
            
            <p className="text-lg sm:text-xl font-medium text-gray-700 leading-relaxed max-w-3xl mx-auto italic">
              {active.quote}
            </p>

            <div className="pt-2">
              <h4 className="text-base font-bold text-gray-900">{active.name}</h4>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mt-0.5">
                {active.role} &bull; <span className="text-gray-500">{active.company}</span>
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="mt-8 flex justify-center items-center gap-6">
        <button
          onClick={handlePrev}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 bg-white text-gray-600 hover:bg-gray-50 shadow-xs transition-colors"
          aria-label="Previous testimonial"
        >
          <FiChevronLeft className="h-5 w-5" />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-200 ${
                activeIndex === index ? "bg-primary w-6" : "bg-gray-200"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 bg-white text-gray-600 hover:bg-gray-50 shadow-xs transition-colors"
          aria-label="Next testimonial"
        >
          <FiChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
