import React, { useState, useEffect } from "react";
import { FaChevronLeft ,FaChevronRight} from "react-icons/fa6";
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of image URLs
  const images = [
    "https://app-static-prod-skyplus6e.goindigo.in/content/dam/skyplus6e/in/en/assets/homepage/images/HP_Mokobara.png",
    "https://app-static-prod-skyplus6e.goindigo.in/content/dam/skyplus6e/in/en/assets/homepage/images/HP_Australia.jpg",
    "https://app-static-prod-skyplus6e.goindigo.in/content/dam/skyplus6e/in/en/assets/homepage/images/Saudi_HP_banner.jpg",
    "https://app-static-prod-skyplus6e.goindigo.in/content/dam/skyplus6e/in/en/assets/homepage/Ayodhya-Homepage.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the current index, reset to 0 when reaching the end
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    // Clean up the interval
    return () => clearInterval(interval);
  }, []);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="mx-auto relative w-full h-full">
      <button onClick={goToPreviousSlide} className="pl-5 text-2xl absolute text-black z-10 left-0 top-1/2 transform -translate-y-1/2">
        <FaChevronLeft></FaChevronLeft>
      </button>
      <button onClick={goToNextSlide} className=" pr-5 text-2xl absolute text-black z-10 right-0 top-1/2 transform -translate-y-1/2">
       <FaChevronRight></FaChevronRight>
      </button>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`absolute rounded-md top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
