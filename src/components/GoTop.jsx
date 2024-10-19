import React, { useEffect, useState, useRef } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

function GoTop() {
  const [showGoTop, setShowGoTop] = useState(false);

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleVisibleButton = () => {
    const position = window.scrollY;

    setShowGoTop(position > 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
    // Cleanup function to remove the scroll event listener
    return () => {
      window.removeEventListener("scroll", handleVisibleButton);
    };
  }, []);

  return (
    <>
      <div
        className={`${
          showGoTop ? "opacity-100" : "opacity-0"
        } fixed bottom-4 md:right-4 z-50 transition-all duration-500 max-sm:right-1`}
      >
        <button
          onClick={handleScrollUp}
          className="bg-red-600 text-white p-3 rounded-full shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <FaArrowUp className="animate-bounce" />
        </button>
      </div>
    </>
  );
}

export default GoTop;
