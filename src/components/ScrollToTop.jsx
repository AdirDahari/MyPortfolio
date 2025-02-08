import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          onTouchStart={() => setIsActive(true)}
          onTouchEnd={() => setIsActive(false)}
          className={`
            fixed 
            bottom-4 sm:bottom-6 md:bottom-8 
            right-4 sm:right-6 md:right-8 
            p-2 sm:p-3 md:p-4 
            z-50
            transition-all 
            duration-300 
            ease-in-out
            touch-pan-y
            ${isActive ? "bg-gray-50 scale-110 -translate-y-1" : ""}
          `}
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`
              w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8
              block 
              mx-auto
              transition 
              duration-300 
              ease-in-out 
              hover:-translate-y-1 
              hover:scale-110
              active:-translate-y-1 
              active:scale-110
              ${isActive ? "-translate-y-1 scale-110" : ""}
            `}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 18.75 7.5-7.5 7.5 7.5"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
