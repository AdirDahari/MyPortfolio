import { useState } from "react";
import PropTypes from "prop-types";

const SVGIcon = ({ link, SVGPath }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <a
      href={link}
      className="inline-block"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        onTouchStart={() => setIsActive(true)}
        onTouchEnd={() => setIsActive(false)}
        className={`
          w-6 h-6 
          block 
          transition 
          duration-300 
          ease-in-out 
          hover:translate-y-1 
          hover:scale-110
          active:translate-y-1 
          active:scale-110
          touch-pan-y
          cursor-pointer
          ${isActive ? "translate-y-1 scale-110" : ""}
        `}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        {SVGPath}
      </svg>
    </a>
  );
};

SVGIcon.propTypes = {
  link: PropTypes.string.isRequired,
  SVGPath: PropTypes.element.isRequired,
};

export default SVGIcon;
