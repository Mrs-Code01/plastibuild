import { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    id: 1,
    image: "/images/testimonial/niyi.jpeg",
    quote:
      "PlastiBuild's products are a game-changer for the communities we serve. They’re affordable, long-lasting, and empower local artisans while promoting sustainability—a perfect fit for our mission.",
    name: "Rtrn Niyi Adekunle",
    role: "President, rotary club of gbagada"
  },
  {
    id: 2,
    image: "/images/testimonial/mobala.png",
    quote:
      "As a student, I’m all about affordability and style. My EcoFeet shoes are trendy, comfortable, and last long—no need for frequent replacements. Totally worth it!",
    name: "Mobola Olaoye",
    role: "Unilag Student"
  },
  {
    id: 3,
    image: "/images/testimonial/adams.png",
    quote:
      "I absolutely love PlastiBuild’s products! Knowing my EcoFeet shoes reduce waste and carbon emissions while being durable and stylish makes them my go-to choice. It’s sustainability without compromise!",
    name: "Munnir Adams",
    role: "climate advocate"
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
      <h2 className="font-catamaran text-[35px] text-[#ffffff] mb-[50px] leading-[1.2] max-[1050px]:text-[33px] max-[750px]:text-[28px]">
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
