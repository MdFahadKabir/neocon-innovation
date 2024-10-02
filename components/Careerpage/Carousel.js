import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Nabil from "../../public/assets/images/Career/nabil.png";

const images = [
  {
    id: 1,
    src: Nabil,
    alt: "Image 1",
  },
  {
    id: 2,
    src: Nabil,
    alt: "Image 2",
  },
  {
    id: 3,
    src: Nabil,
    alt: "Image 3",
  },
  {
    id: 4,
    src: Nabil,
    alt: "Image 4",
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-96">
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            activeIndex === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ zIndex: activeIndex === index ? 1 : 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: activeIndex === index ? 1 : 0 }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            quality={100}
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
      ))}
      <div className="absolute top-1/2 left-0 w-full z-10">
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded-l-md focus:outline-none"
          onClick={handlePrevClick}
        >
          Previous
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded-r-md focus:outline-none"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
