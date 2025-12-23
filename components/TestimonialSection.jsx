import { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    id: 1,
    image: "/images/girl2.png",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Minus veritatis repellendus delectus, est, alias recusandae.",
    name: "Jessica Jones",
    role: "Web Designer"
  },
  {
    id: 2,
    image: "/images/girl4.png",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Minus veritatis repellendus delectus, est, alias recusandae.",
    name: "Maria Garcia",
    role: "Product Manager"
  },
  {
    id: 3,
    image: "/images/girl6.png",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Minus veritatis repellendus delectus, est, alias recusandae.",
    name: "Sarah Wilson",
    role: "UI Developer"
  },
  {
    id: 4,
    image: "/images/girl7.png",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Minus veritatis repellendus delectus, est, alias recusandae.",
    name: "Emily Chen",
    role: "Creative Director"
  },
  {
    id: 5,
    image: "/images/girl8.png",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Minus veritatis repellendus delectus, est, alias recusandae.",
    name: "Amanda Brooks",
    role: "Marketing Lead"
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const getVisibleTestimonials = () => {
    const total = testimonials.length;
    const prev = (currentIndex - 1 + total) % total;
    const next = (currentIndex + 1) % total;
    return [testimonials[prev], testimonials[currentIndex], testimonials[next]];
  };

  const handlePrev = () => {
    setCurrentIndex(
      prev => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center py-16 md:py-20 px-4 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url('/images/plasti1.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <h2 className="font-catamaran text-[35px] text-[#ffffff] mb-[50px]">
        What People Say About Us
      </h2>
      <div className="font-raleway flex items-center justify-center gap-4 md:gap-6 pt-8 md:pt-12 w-full max-w-4xl">
        {visibleTestimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            image={testimonial.image}
            quote={testimonial.quote}
            name={testimonial.name}
            role={testimonial.role}
            isCenter={index === 1}
          />
        ))}
      </div>

      <div className="flex gap-4 mt-8 md:mt-10">
        <button
          onClick={handlePrev}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#ffffff33] hover:bg-[#ffffff4d] transition-colors flex items-center justify-center text-white"
          aria-label="Previous testimonial"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:h-6 md:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#ffffff33] hover:bg-[#ffffff4d] transition-colors flex items-center justify-center text-white"
          aria-label="Next testimonial"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:h-6 md:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div className="flex gap-2 mt-5 md:mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-[#ffffff66]"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
