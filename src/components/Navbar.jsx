import { useState } from "react";

const navItems = [
  { id: 1, href: "/#about", text: "About" },
  { id: 2, href: "/#education", text: "Education" },
  { id: 3, href: "/#projects", text: "Projects" },
  { id: 4, href: "/#contact", text: "Contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleTouchStart = (item) => {
    setActiveItem(item);
  };

  const handleTouchEnd = () => {
    setActiveItem(null);
  };

  return (
    <div className="bg-white w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-24">
          <div className="flex items-center">
            <p className="text-2xl sm:text-3xl font-bold">Adir</p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`
                    text-main-black 
                    px-3 py-2 
                    rounded-md
                    transition-colors 
                    duration-200
                    hover:bg-main-light-grey
                    active:bg-main-light-grey
                    touch-pan-y
                  `}
                  onTouchStart={() => handleTouchStart(item.text)}
                  onTouchEnd={handleTouchEnd}
                >
                  {item.text}
                </a>
              ))}
            </div>
            <div className="flex space-x-2 ml-4">
              <a
                href="/assets/files/WebDevCV-ADIR.pdf"
                download="WebDevCV-ADIR.pdf"
                className={`
                    cursor-pointer
                    bg-white 
                    text-main-black 
                    font-semibold 
                    py-2 px-4 
                    border 
                    border-main-dark-grey 
                    rounded 
                    shadow
                    transition-colors 
                    duration-200
                    hover:bg-main-light-grey
                    active:bg-main-light-grey
                    touch-pan-y
                  `}
                onTouchStart={() => handleTouchStart("Resume")}
                onTouchEnd={handleTouchEnd}
              >
                Resume
              </a>
              {/* <a
                className={`
                    cursor-pointer
                    bg-white 
                    text-main-black 
                    font-semibold 
                    py-2 px-4 
                    border 
                    border-main-dark-grey 
                    rounded 
                    shadow
                    transition-colors 
                    duration-200
                    hover:bg-main-light-grey
                    active:bg-main-light-grey
                    touch-pan-y
                  `}
                onTouchStart={() => handleTouchStart("Hire Me")}
                onTouchEnd={handleTouchEnd}
              >
                Hire Me
              </a> */}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-main-black hover:bg-main-light-grey active:bg-main-light-grey focus:outline-none transition-colors duration-200 touch-pan-y"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`
                    text-main-black 
                    block px-3 py-2 
                    rounded-md 
                    text-center 
                    w-full 
                    max-w-xs
                    transition-colors 
                    duration-200
                    hover:bg-main-light-grey
                    active:bg-main-light-grey
                    touch-pan-y
                    ${activeItem === item.text ? "bg-main-light-grey" : ""}
                  `}
                  onTouchStart={() => handleTouchStart(item.text)}
                  onTouchEnd={handleTouchEnd}
                >
                  {item.text}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-2 items-center w-full">
                <a
                  href="/assets/files/WebDevCV-ADIR.pdf"
                  download="WebDevCV-ADIR.pdf"
                  className={`
                      text-center
                      bg-white 
                      text-main-black 
                      font-semibold 
                      py-2 px-4 
                      border 
                      border-main-dark-grey 
                      rounded 
                      shadow 
                      w-full 
                      max-w-xs
                      transition-colors 
                      duration-200
                      hover:bg-main-light-grey
                      active:bg-main-light-grey
                      touch-pan-y
                      ${activeItem === "Resume" ? "bg-main-light-grey" : ""}
                    `}
                  onTouchStart={() => handleTouchStart("Resume")}
                  onTouchEnd={handleTouchEnd}
                >
                  Resume
                </a>
                {/* <a
                  className={`
                      text-center
                      bg-white 
                      text-main-black 
                      font-semibold 
                      py-2 px-4 
                      border 
                      border-main-dark-grey 
                      rounded 
                      shadow 
                      w-full 
                      max-w-xs
                      transition-colors 
                      duration-200
                      hover:bg-main-light-grey
                      active:bg-main-light-grey
                      touch-pan-y
                      ${activeItem === "Resume" ? "bg-main-light-grey" : ""}
                    `}
                  onTouchStart={() => handleTouchStart("Hire Me")}
                  onTouchEnd={handleTouchEnd}
                >
                  Hire Me
                </a> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
