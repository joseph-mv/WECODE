import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons/faArrowAltCircleUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";


const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled beyond a certain point
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed z-40 bottom-5 right-5 bg-orange-500 text-white p-4 px-5 rounded-full shadow-md hover:bg-orange-600 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <FontAwesomeIcon className="text-2xl" icon={faArrowUp}/>
    </button>
  );
};

export default ScrollToTop;
