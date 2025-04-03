import { useState } from "react";

const baseUrl = import.meta.env.BASE_URL;

const PDFDownloadButton = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handleDownload = (e) => {
    e.preventDefault();
    const pdfUrl = `${baseUrl}/assets/files/FullstackCV-ADIR.pdf`;

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "WebDevCV-ADIR.pdf");
    link.setAttribute("target", "_blank");

    // For iOS Safari
    if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {
      window.open(pdfUrl, "_blank");
      return;
    }

    // For other devices
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleTouchStart = () => {
    setIsPressed(true);
  };

  const handleTouchEnd = () => {
    setIsPressed(false);
  };

  return (
    <button
      onClick={handleDownload}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={`
        cursor-pointer
        bg-white 
        text-main-black 
        font-semibold 
        py-2 
        px-4 
        border 
        border-main-dark-grey 
        rounded 
        shadow
        transition-colors 
        duration-200
        ${isPressed ? "bg-main-light-grey" : "hover:bg-main-light-grey"}
        touch-pan-y
      `}
    >
      Resume
    </button>
  );
};

export default PDFDownloadButton;
