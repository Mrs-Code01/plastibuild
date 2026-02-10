import React from "react";
import Link from "next/link"; // Import Link for navigation

const services = [
  {
    id: 1,
    title: "Training & Workshops",
    description:
      "We deliver high-impact, hands-on training programs that build practical green skills for...",
    slug: "cocopeat",
    image: "/images/plasti19.jpg",
  },
  {
    id: 2,
    title: "Circularity & sustainability consulting",
    description:
      " We support organisations in integrating circular economy principles, responsible...",
    slug: "circularity-and-sustainability-consulting",
    image: "/images/plasti8.jpg",
  },
  {
    id: 3,
    title: "Corporate Recycling Programs",
    description:
      "We help companies design and execute efficient in-house recycling and...",
    slug: "corporate-recycling-programs",
    image: "/images/plasti11.jpg",
  },
  {
    id: 4,
    title: "Industrial Waste Management Solutions",
    description:
      "We work with manufacturers, SMEs, and production facilities to...",
    slug: "industrial-waste-management-solutions",
    image: "/images/plasti15.jpg",
  },
  {
    id: 5,
    title: "Technology & Digital Solutions",
    description:
      "We build and deploy technology that enhances sustainability, waste...",
    slug: "technology-and-digital-solutions",
    image: "/images/plasti6.jpg",
  },
  {
    id: 6,
    title: "Circular product design & climate-tech innovation",
    description:
      " We support innovators, startups, schools, research teams, and corporates in...",
    slug: "circular-product-design",
    image: "/images/plasti19.jpg",
  },
  {
    id: 7,
    title: "E-learning & digital climate education",
    description:
      "Our digital learning ecosystem makes climate literacy accessible to",
    slug: "e-learning-and-digital-climate-education",
    image: "/images/plasti15.jpg",
  },
];

const ProductGrid = () => {
  return (
    <section className="py-20 px-[5%] bg-gray-50 mt-[70px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-4 text-[#001f3f] font-catamaran">
          Our Services
        </h2>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col p-5 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="w-full h-[320px] mb-5 overflow-hidden rounded-xl">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[50%] object-cover"
                />
                <div className="flex flex-col flex-grow text-center h-[30%] mt-[15px]">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 font-catamaran leading-[1.5rem]">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-1 font-raleway leading-snug">
                    {product.description}
                  </p>

                  {/* The "View More" Link Button */}
                </div>
              </div>

              {/* Product Info */}

              <Link
                href={`/services/${product.slug}`}
                className="font-raleway block w-full py-[10px] text-[.9rem] rounded-lg font-bold text-center transition-all bg-[#008000] text-white hover:bg-[#006400]"
              >
                View more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
