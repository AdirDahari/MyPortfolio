import { useState } from "react";

const Hero = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div id="hero" className="w-full pt-36 pb-36 pr-4 pl-4">
      <h1 className="text-3xl sm:text-4xl md:text-6xl text-center text-main-black">
        Hi, I'm Adir Dahari
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-center text-main-black pt-3 pb-25">
        Let me build your next web application.
      </p>
      <div>
        <a
          href="/#about"
          className="block m-auto w-10 h-10 touch-pan-y"
          onTouchStart={() => setIsActive(true)}
          onTouchEnd={() => setIsActive(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`
          w-6 h-6 
          block mx-auto 
          transition 
          duration-300 
          ease-in-out 
          hover:translate-y-1 
          hover:scale-110
          active:translate-y-1 
          active:scale-110
          ${isActive ? "translate-y-1 scale-110" : ""}
        `}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
